"use client";
import { useCart } from "@/app/(Storefront)/cart/cart-context";
import { useCheckout } from "@/app/(Storefront)/checkout/checkout-context";
import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import { formatCurrency } from "@/lib/format-currency";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const CartSummary = () => {
  const [message, setMessage] = useState("");
  const CheckoutContext = useCheckout();
  const CartContext = useCart();
  const router = useRouter();
  if (!CartContext) return null;
  const { cart, dispatch } = CartContext;
  if (!CheckoutContext) return null;
  const { checkout, setCheckout, form } = CheckoutContext;
  

  async function handlePayment() {
    toast("performing payment...");
    //wait 2 seconds to simulate payment
    await new Promise((resolve) => setTimeout(resolve, 300));
    toast("payment done");
  }

  async function validateCart() {
    toast("validating cart...");
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast("cart validated");
  }

  async function onSubmit(values) {
    console.log(values);
    toast(message);
    await validateCart();
    await handlePayment();
    toast.success("Order placed successfully");
    dispatch({ type: "CLEAR_CART" });
    router.push("/checkout/success");
  }

  async function handleCheckout() {
    form.handleSubmit(onSubmit)();
    console.log("checkout");
  }
  return (
    <div className="flex flex-col gap-3">
      <ul className="flex flex-col gap-3 pb-6">
        {checkout.lineItems.map((item) => (
          <li key={item?.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-md aspect-square bg-muted">
                <Image
                  src={item?.product_variant.images[0]?.publicUrl}
                  alt={item?.product_variant.name}
                  fill
                  className="items-center justify-center object-cover w-16 h-16 rounded-md aspect-square "
                ></Image>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-medium uppercase truncate">
                  {item?.product_variant.name}
                </div>
                <div className="text-muted-foreground">
                  {formatCurrency(item?.product_variant.price)}
                </div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              x{item.quantity}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between">
        <div className="text-sm font-medium uppercase text-muted-foreground">
          Total
        </div>
        <div>
          {formatCurrency(
            checkout.lineItems.reduce(
              (prev, current) =>
                prev + current.product_variant.price * current.quantity,
              0
            )
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm font-medium uppercase text-muted-foreground">
          Shipping
        </div>
        <div>{formatCurrency(4.99)}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm font-medium uppercase text-muted-foreground">
          Grand Total
        </div>
        <div className="text-primary">
          {formatCurrency(
            checkout.lineItems.reduce(
              (prev, current) =>
                prev + current.product_variant.price * current.quantity,
              0
            ) + 4.99
          )}
        </div>
      </div>
      <StorefrontButton
        onClick={async () => await handleCheckout()}
        type="button"
        // form="checkout-form"
      >
        Continue and Pay
      </StorefrontButton>
    </div>
  );
};
