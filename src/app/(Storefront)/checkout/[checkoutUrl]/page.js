"use client";
import CheckoutForm from "@/app/(Storefront)/checkout/checkout-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { CartSummary } from "./CartSummary";
import { BackButton } from "@/app/(Storefront)/products/[productName]/BackButton";

//TODO: Checkout page should be dynamic with an id that saves the lineitems to the database

const CheckoutPage = ({ params }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 lg:p-16">
      <div>
        <BackButton/>
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
              <CartSummary />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const CheckOutNotFound = () => {
  return (
    <div>
      <h1>Checkout not found</h1>
    </div>
  );
};

export default CheckoutPage;
