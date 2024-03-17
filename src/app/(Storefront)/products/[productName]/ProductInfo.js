"use client";
import { useCart } from "@/app/(Storefront)/cart/cart-context";
import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { QuantitySelector } from "../../components/quantity-selector";

export const ProductInfo = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { cart, dispatch } = useCart();
    if (!product) {
        return null;
    }

    const handleAddToCart = () => {
        console.log("product", product);
        console.log("quantity", quantity);
        console.log("cart before adding", cart);
        dispatch({
            type: "ADD_PRODUCT",
            payload: { product, quantity },
        });
        toast(
            <div className="flex justify-between w-full">
                {` ${product.name} added to cart`}
                <ShoppingCart size={16} />
            </div>
        );
    };
    return (
        <section className="container relative flex flex-col items-center justify-between h-full gap-12 py-8 rounded-lg lg:flex-row">
            <div className="relative flex items-center justify-center w-full p-8 aspect-square lg:w-1/2 max-h-96">
                <Image
                    src={product.images[0]?.publicUrl}
                    fill
                    sizes="100% 100%"
                    className="object-contain rounded-lg lg:h-72"
                    alt={product.name}
                ></Image>
            </div>
            <div className="flex flex-col justify-center flex-1 gap-3">
                {product.isFeatured && (
                    <h3 className="font-light tracking-[0.3em] uppercase text-brightOrange">
                        New Product
                    </h3>
                )}
                <h2 className="text-4xl font-medium uppercase">
                    {product.name}
                </h2>
                <p className="w-full leading-loose text-onyx">
                    {product.description}
                </p>
                <div className="py-3 text-xl font-medium">
                    {new Intl.NumberFormat("en-GB", {
                        style: "currency",
                        currency: "GBP",
                    }).format(product.price)}
                </div>
                <div className="flex gap-3">
                    <QuantitySelector
                        quantity={quantity}
                        setQuantity={setQuantity} />
                    <div className="flex gap-6">
                        <StorefrontButton
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </StorefrontButton>
                    </div>
                </div>
            </div>
        </section>
    );
};
