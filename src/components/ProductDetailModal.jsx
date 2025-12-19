import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useCart } from "../context/CartContext";

const ProductDetailModal = ({ open, onClose, product }) => {
    if (!open || !product) return null;

    const { addToCart } = useCart();

    const [selectedImage, setSelectedImage] = useState(product.imageUrls?.[0]);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedVariant, setSelectedVariant] = useState(null);

    // ✅ TAKE HIGHEST PRICE FROM ALL SOURCES
    const getHighestPrice = () => {
        const prices = [];

        // size prices
        if (product.size && product.size.length > 0) {
            product.size.forEach(s => prices.push(s.price));
        }

        // variant prices
        if (product.variants && product.variants.length > 0) {
            product.variants.forEach(v => prices.push(v.price));
        }

        // base price fallback
        if (product.price) {
            prices.push(product.price);
        }

        if (prices.length === 0) return 0;

        return Math.max(...prices);
    };

    const handleAddToCart = () => {
        const finalPrice = getHighestPrice();


        console.log("product---", product)
        addToCart({
            id: product._id,
            name: product.name,
            price: finalPrice,
            size: selectedSize?.unit || null,
            variant: selectedVariant?.color || null,
            image: selectedImage,
            qty: 1,
            shopId: product.shopId
        });

        onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white w-full max-w-xl h-[80vh] overflow-auto p-6 rounded-xl shadow-lg relative animate-fadeIn"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                >
                    <IoIosCloseCircle size={28} />
                </button>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-4">{product.name}</h2>

                {/* Preview Image */}
                <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg border mb-4"
                />

                {/* Thumbnails */}
                <div className="grid grid-cols-5 gap-2 mb-4">
                    {product.imageUrls.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            onClick={() => setSelectedImage(img)}
                            className={`h-16 w-full object-cover rounded-lg cursor-pointer border 
                            ${selectedImage === img ? "border-black" : "border-gray-300"}
                        `}
                        />
                    ))}
                </div>

                {/* Sizes */}
                {product.size?.length > 0 && (
                    <>
                        <h3 className="font-semibold mb-2">Select Size</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {product.size.map((s, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedSize(s)}
                                    className={`border p-2 rounded-lg text-sm cursor-pointer 
                                        ${selectedSize?.unit === s.unit
                                            ? "bg-black text-white"
                                            : "bg-gray-50"
                                        }
                                    `}
                                >
                                    <div>{s.unit}</div>
                                    <div>¥{s.price}</div>
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {/* Variants */}
                {product.variants?.length > 0 && (
                    <>
                        <h3 className="font-semibold mt-4 mb-2">Select Variant</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {product.variants.map((v, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedVariant(v)}
                                    className={`border p-2 rounded-lg text-sm cursor-pointer 
                                        ${selectedVariant?.color === v.color
                                            ? "bg-black text-white"
                                            : "bg-gray-50"
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="h-4 w-4 rounded-full border"
                                            style={{ backgroundColor: v.color }}
                                        />
                                        <div>¥{v.price}</div>
                                    </div>

                                </button>
                            ))}
                        </div>
                    </>
                )}

                {/* Add to Cart */}
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800 transition"
                >
                    Add to Cart (Highest Price: ¥{getHighestPrice()})
                </button>
            </div>
        </div>
    );
};

export default ProductDetailModal;