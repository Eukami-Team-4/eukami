"use client";
import { useCart } from "@/app/(Storefront)/cart/cart-context";
import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import { formatCurrency } from "@/lib/format-currency";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const CartSummary = () => {
  const CartContext = useCart();
  if (!CartContext) return null;
  const { cart, dispatch } = CartContext;

  async function handlePayment() {
    console.log("performing payment");
    //wait 2 seconds to simulate payment
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("payment done");
  }

  async function validateCart() {
    console.log("validating cart");
    //wait 500 ms to simulate validation
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("cart validated");
  }

  async function handleCheckout() {
    console.log("checkout");
    // TODO: need to await form submit and only move forward on a successful response
    await validateCart();
    await handlePayment();
    dispatch({ type: "CLEAR_CART" });
    toast.success("Order placed successfully");
    // router.push("/checkout/success");
  }
  return (
    <div className="flex flex-col gap-3">
      <ul className="flex flex-col gap-3 pb-6">
        {cart.lineItems.map((item) => (
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
            cart.lineItems.reduce(
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
            cart.lineItems.reduce(
              (prev, current) =>
                prev + current.product_variant.price * current.quantity,
              0
            ) + 4.99
          )}
        </div>
      </div>
      <StorefrontButton
        onClick={handleCheckout}
        type="submit"
        form="checkout-form"
      >
        Continue and Pay
      </StorefrontButton>
    </div>
  );
};
