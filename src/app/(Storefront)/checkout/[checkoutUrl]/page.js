"use client";
import { useCart } from "@/app/(Storefront)/cart/cart-context";
import CheckoutForm from "@/app/(Storefront)/checkout/checkout-form";
import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/format-currency";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

//TODO: Checkout page should be dynamic with an id that saves the lineitems to the database

const CheckoutPage = ({ params }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 lg:p-16">
      <div>
        <Button
          variant="ghost"
          className="text-onyx"
          onClick={() => router.back()}
        >
          <ChevronLeft size={12} className="mr-2" /> Go Back
        </Button>
      </div>
      <div className="flex flex-col gap-16 lg:flex-row">
        <div className="flex-1">
          <Card>
            <CardHeader>
              <h1>Checkout {params.checkoutUrl}</h1>
            </CardHeader>
            <CardContent>
              <CheckoutForm />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
        <div className="w-96">
          <Card>
            <CardHeader>
              <h2>Summary</h2>
            </CardHeader>
            <CardContent>
              <CartSummary />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const CartSummary = () => {
  const router = useRouter();

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
      <ul className="pb-6">
        {cart.lineItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center justify-center w-16 h-16 rounded-md aspect-square bg-muted">
                photo
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-medium uppercase truncate">
                  {item.product_variant.name}
                </div>
                <div className="text-muted-foreground">
                  {formatCurrency(item.product_variant.price)}
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

export default CheckoutPage;
