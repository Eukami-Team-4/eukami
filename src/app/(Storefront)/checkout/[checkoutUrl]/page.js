"use client";
import { getExistingCheckout } from "@/app/(Storefront)/checkout/actions";
import { useCheckout } from "@/app/(Storefront)/checkout/checkout-context";
import CheckoutForm from "@/app/(Storefront)/checkout/checkout-form";
import { BackButton } from "@/app/(Storefront)/products/[productName]/BackButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { CartSummary } from "./CartSummary";

//TODO: Checkout page should be dynamic with an id that saves the lineitems to the database

const CheckoutPage = ({ params }) => {
  const router = useRouter();
  const { checkoutUrl } = params;
  const CheckoutContext = useCheckout();
  if (!checkoutUrl) {
    return <CheckOutNotFound />;
  }
  if (!CheckoutContext) return null;
  const { checkout, setCheckout } = CheckoutContext;
  //check that the checkout url matches the one in the context if not, load the checkout into the context by calling getExistingCheckout
  // Load the checkout into the context by calling getExistingCheckout
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (checkoutUrl !== checkout?.url) {
      const loadCheckout = async () => {
        try {
          const checkout = await getExistingCheckout(checkoutUrl);
          setCheckout(checkout);
        } catch (error) {
          toast.error(error);
        }
      };
      loadCheckout();
    }
  }, [checkoutUrl]);

  if (!checkout) {
    return <CheckOutNotFound />;
  }

  return (
    <div className="flex flex-col gap-4 lg:p-16">
      <div>
        <BackButton />
      </div>
      <div className="flex flex-col gap-16 lg:flex-row">
        <div className="flex-1">
          <Card>
            <CardHeader>
              <h1>Checkout</h1>
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
              <CartSummary checkout={checkout} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const CheckOutNotFound = () => {
  return (
    <div className="flex items-center justify-center gap-3 min-h-96">
      <h1>Checkout not found</h1>
      <Link href="/">
        <Button variant="link">Return to the homepage</Button>
      </Link>
    </div>
  );
};

export default CheckoutPage;
