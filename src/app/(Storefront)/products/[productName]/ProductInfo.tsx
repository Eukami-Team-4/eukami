"use client";
import { CartItem, useCart } from "@/app/(Storefront)/cart/cart-context";
import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { QuantitySelector } from "../../components/quantity-selector";
import {  ProductVariant } from "@/lib/supabase/schema";

export const ProductInfo = ({ product }: { product: ProductVariant }) => {
  const [quantity, setQuantity] = useState(1);
  const CartContext = useCart();
  if (!CartContext) return null;
  const { cart, dispatch } = CartContext;

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        title: product.name,
        product_variant: product,
        quantity,
        cart_id: cart.id,
      },
    });
    toast.success(
      <div className="flex justify-between w-full">
        {` ${product.name} added to cart`}
        <ShoppingCart size={16} />
      </div>
    );
  };
  return (
    <section className="container relative flex flex-col items-center justify-between h-full gap-12 py-8 rounded-lg lg:flex-row">
      <div className="relative flex items-center justify-center w-full p-8 bg-white rounded-lg aspect-square lg:w-1/2 max-h-[500px]">
        <Image
          src={product.images[0]?.publicUrl}
          fill
          sizes="100% 100%"
          className="object-contain rounded-lg"
          alt={product.name}
        ></Image>
      </div>
      <div className="flex flex-col justify-center flex-1 gap-3">
        {product.isFeatured && (
          <h3 className="font-light tracking-[0.3em] uppercase text-brightOrange">
            New Product
          </h3>
        )}
        <h2 className="text-4xl font-medium uppercase">{product.name}</h2>
        <p className="w-full leading-loose text-onyx">{product.description}</p>
        <div className="py-3 text-xl font-medium">
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(product.price)}
        </div>
        <div className="flex gap-3">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <div className="flex gap-6">
            <StorefrontButton onClick={handleAddToCart}>
              Add To Cart
            </StorefrontButton>
          </div>
        </div>
      </div>
    </section>
  );
};
