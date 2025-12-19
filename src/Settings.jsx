import React, { useEffect, useState } from "react";
import { FaPencil, FaPlus } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import { updateUserData } from "./services/user.service";
import { clearItemFromLocalStorage, getItemFromLocalStorage, removeItemFromLocalStorage } from "./helpers/helper";
import { STORAGE_KEYS } from "./config/config";
import { formatCardNumber } from "./helpers/helper"
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {
    const userData = getItemFromLocalStorage(STORAGE_KEYS.USER_DATA);
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        paymentMethods: [],
    });

    const [editingIndex, setEditingIndex] = useState(null);
    const [paymentInput, setPaymentInput] = useState({
        method: "",
        accountNumber: "",
    });

    // ----------------------------
    // Load user data on mount
    // ----------------------------
    useEffect(() => {
        if (!userData) return;

        setForm({
            name: userData.name || "",
            email: userData.email || "",
            password: "",
            paymentMethods: userData.paymentMethods || [],
        });
    }, []);

    // ----------------------------
    // Save profile update
    // ----------------------------
    const handleSave = async () => {
        try {
            const payload = { ...form };
            if (!payload.password) delete payload.password;

            const res = await updateUserData(userData._id, payload);
            if (res?.success) toast.success("Profile updated");
            clearItemFromLocalStorage()
            navigate("/login")
        } catch (error) {
            console.log("Account update error", error);
        }
    };

    // ----------------------------
    // Add or update payment method
    // ----------------------------
    const savePaymentMethod = () => {
        if (!paymentInput.method || !paymentInput.accountNumber)
            return toast.error("Method and Account Number required");

        // 🔥 Remove all spaces before saving to DB
        const cleanedNumber = paymentInput.accountNumber.replace(/\s+/g, "");

        const updated = [...form.paymentMethods];

        const newEntry = {
            method: paymentInput.method.trim(),
            accountNumber: cleanedNumber, // <-- SAVE CLEAN NUMBER
        };

        if (editingIndex !== null) {
            updated[editingIndex] = newEntry;
        } else {
            updated.push(newEntry);
        }

        setForm({ ...form, paymentMethods: updated });
        setEditingIndex(null);
        setPaymentInput({ method: "", accountNumber: "" });
    };
    const deletePaymentMethod = (index) => {
        const updated = form.paymentMethods.filter((_, i) => i !== index);
        setForm({ ...form, paymentMethods: updated });
    };

    return (
        <div>
            <Navbar />
            <div className="p-6">
                {/* HEADER */}
                <div className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 
                                text-white px-4 py-2 rounded-md w-fit shadow-md">
                    Account Settings
                </div>
                {/* ACCOUNT FORM */}
                <div className="bg-white border mt-4 p-6 rounded-xl shadow-md w-full sm:w-2/3">
                    <div className="flex flex-col gap-4">
                        {/* Name */}
                        <InputField
                            label="Name"
                            value={form.name}
                            onChange={(v) => setForm({ ...form, name: v })}
                        />
                        {/* Email */}
                        <InputField
                            type="email"
                            label="Email"
                            value={form.email}
                            onChange={(v) => setForm({ ...form, email: v })}
                        />
                        {/* Password */}
                        <InputField
                            type="password"
                            label="New Password (optional)"
                            value={form.password}
                            onChange={(v) => setForm({ ...form, password: v })}
                        />
                        <button
                            onClick={handleSave}
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow 
                                       hover:bg-blue-700 active:scale-95 transition w-fit mt-3"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
                {/* PAYMENT METHODS HEADER */}
                <div className="mt-10 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-blue-500 
                                text-white px-4 py-2 rounded-md w-fit shadow-md">
                    Payment Methods
                </div>
                {/* PAYMENT LIST */}
                <div className="w-full sm:w-2/3 max-h-[480px] overflow-auto mt-4">
                    <PaymentTable
                        items={form.paymentMethods}
                        onEdit={(i) => {
                            setEditingIndex(i);
                            setPaymentInput(form.paymentMethods[i]);
                        }}
                        onDelete={deletePaymentMethod}
                    />
                </div>
                {/* ADD / UPDATE PAYMENT METHOD */}
                <div className="mt-8 bg-white border rounded-xl shadow-md p-6 w-full sm:w-2/3">
                    <div className="text-md font-semibold text-gray-800 mb-4">
                        {editingIndex !== null ? "Update Payment Method" : "Add Payment Method"}
                    </div>
                    <div className="flex flex-col gap-4">
                        <InputField
                            label="Payment Method"
                            placeholder="Visa, JCB etc."
                            value={paymentInput.method}
                            onChange={(v) => setPaymentInput({ ...paymentInput, method: v })}
                        />
                        <InputField
                            label="Account Number"
                            placeholder="Account number / identifier"
                            value={formatCardNumber(paymentInput.accountNumber)}
                            onChange={(v) =>
                                setPaymentInput({ ...paymentInput, accountNumber: v })
                            }
                        />
                        <button
                            className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-lg shadow 
                                       hover:bg-indigo-700 active:scale-95 transition w-fit"
                            onClick={savePaymentMethod}
                        >
                            <FaPlus className="text-sm" />
                            {editingIndex !== null ? "Update Method" : "Add Method"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;

/* ---------------------------------- */
/* Reusable Input Component           */
/* ---------------------------------- */
const InputField = ({ label, value, onChange, type = "text", placeholder }) => (
    <div>
        {label && <label className="font-medium">{label}</label>}
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="border border-gray-300 rounded-lg px-3 py-2 mt-1 w-full 
                       focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
        />
    </div>
);

/* ---------------------------------- */
/* Payment Table Component            */
/* ---------------------------------- */
const PaymentTable = ({ items, onEdit, onDelete }) => (
    <>
        {/* Header */}
        <div className="grid grid-cols-4 px-4 py-2 bg-gray-200 rounded-md shadow-sm 
                        text-gray-700 font-medium">
            <div>No</div>
            <div>Method</div>
            <div>Account</div>
            <div className="text-center">Action</div>
        </div>
        {items.map((item, index) => (
            <div
                key={index}
                className={`
                    grid grid-cols-4 items-center px-4 py-3 mt-2 rounded-md transition
                    ${index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}
                    shadow-sm
                `}
            >
                <div>{index + 1}</div>
                <div className="font-medium">{item.method}</div>
                <div>{formatCardNumber(item.accountNumber)}</div>
                <div className="flex justify-center gap-3">
                    <FaPencil
                        className="text-blue-500 cursor-pointer hover:text-blue-700 transition"
                        onClick={() => onEdit(index)}
                    />
                    <TiDelete
                        className="text-red-500 text-xl cursor-pointer hover:text-red-700 transition"
                        onClick={() => onDelete(index)}
                    />
                </div>
            </div>
        ))}
    </>
);