import React, { useEffect, useState } from 'react'
import { getItemFromLocalStorage } from './helpers/helper';
import { STORAGE_KEYS } from './config/config';
import { getOrdersByUserId, updateOrderStatus } from './services/order.service';
import NavBar from './NavBar';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const userData = getItemFromLocalStorage(STORAGE_KEYS.USER_DATA);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const response = await getOrdersByUserId(userData._id);
            setOrders(response.data);
        } catch (error) {
            console.error("failed to fetch user orders:", error);
            alert(error.message || "Failed to load your orders");
        } finally {
            setLoading(false);
        }
    };

    const handleCancelOrder = async (orderId) => {
        const confirmCancel = window.confirm("Are you sure you want to cancel this order?");
        if (!confirmCancel) return;

        try {
            await updateOrderStatus(orderId, "cancelled");
            alert("Order cancelled successfully!");
            setOrders((prev) =>
            prev.map((order) => (order._id === orderId ? { ...order, status: "cancelled"} : order)));
        } catch (error) {
            console.error("Failed to cancel order: ", error);
            alert(error.message || "Failed to cancel order");
        }
    };

    const userId = userData._id
    useEffect(() => {
        fetchOrders();
        const joinUserRoom = () => {
            console.log(`Joining user room user_${userId}`);
            socket.emit("join_user", {userId});
        }
        joinUserRoom()
        socket.on("nnew_order", (newOrder) => {
            if (newOrder.user.userId === userData._id) {
                setOrders((prev) => [newOrder, ...prev]);
            }
        });

        socket.on("order_status_update", (updatedOrder) => {
            if (updatedOrder.user.userId === userData._id) {
                setOrders((prev) =>
                    prev.map((order) => (order._id === updatedOrder._id ? updatedOrder : order))
                );
            }
        });

        return () => {
            socket.off("new_order");
            socket.off("order_status_update");
        };
    }, []);

    useEffect(() => {
        console.log("order ", orders)
    }, [orders]);
  return (
    <div className='min-h-screen bg-gray-50'>
        <NavBar/>
        <div className='max-w-6xl mx-auto py-10 px-4'>
            <h1 className='text-2xl font-bold mb-6'>
               My Orders 
            </h1>
            {loading ? (
                <div className='text-center text-gray-500 py-10'>
                    Loading your orders...
                </div>
            ) : orders?.length === 0 ? (
                <div className='text-center text-gray-500 py-10'>
                    No orders yet.
                </div>
            )
            :
            (
                <div className='space-y-6'>
                    {orders?.map((order) => (
                        <div
                        key={order._id}
                        className='bg-whtie rounded-xl shadow p-5 border border-gray-100'
                        >
                            <div className='flex justify-between items-center mb-3'>
                                <div>
                                    <h3 className='font-semibold text-lg'>
                                        Order #{order?._id.slice(-6).toUpperCase()}
                                    </h3>
                                    <p className='text-sm text-gray-500'>
                                        {new Date(order?.createdAt).toLocaleString()}
                                    </p>
                                </div>

                                <div
                                className={`px-3 py-1 rounded-lg text-sm font-semibold ${order.status === "pending" ? "bg-yellow-100 text-yellow-800" : order.status === "cancelled" ? "bg-red-100 text-red-700" : order.status === "completed" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                                >
                                    {order.status}
                                </div>
                            </div>

                            <div className='divide-y divide-gray-100'>
                                {order.items.map((item, index) => (
                                    <div
                                    key={index}
                                    className='flex justify-between items-center py-2'
                                    >
                                        <div>
                                            <p className='font-medium'>{item.name}</p>
                                            <p className='text-sm text-gray-500'>
                                                {item.size && `Size: ${item.size}`}
                                                {item.variant && `Variant: ${item.variant}`}
                                            </p>
                                        </div>

                                        <div className='text-right'>
                                            <p className='text-sm'>
                                                ${item.price.toLocaleString()} x {item.qty}
                                            </p>
                                            <p className='font-semibold'>
                                                ${item.subtotal.toLocaleString()}
                                            </p>
                                        </div>

                                        <div className='flex justify-between items-center mt-4'>
                                            <p className='font-bold text-lg'>
                                                Total: ${order.total.toLocaleString()}
                                            </p>

                                            {order.status === "pending" && (
                                                <button
                                                    onClick={() => handleCancelOrder(order._id)}
                                                    className='text-red-600 font-medium underline hover:text-red-800'
                                                >
                                                    Cancel Order
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )
            }
        </div>
    </div>
  )
}

export default Order