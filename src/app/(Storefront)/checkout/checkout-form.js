"use client";

import { useCheckout } from "@/app/(Storefront)/checkout/checkout-context";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// TODO: Delivery Types. Next Working Day, Standard
// TODO: Multiple Payment Options 
// TODO: Confirm the things that need to be checked for each order before accepting it
// TODO (optional): shpping and tracking status link / page

// TODO: for now we define this in this form but this will be pulled from the database
const DeliveryMethods = [
    {
        label: 'Next Day delivery',
        value: 'next',
        price: 8.99
    },
    {
        label: 'Standard Delivery',
        value: 'standard',
        price: 4.99
    }
  ]
  
  // TODO: for now we define this in this form but this will be pulled from the database
  const PaymentMethods = [
    {
        label: 'Debit Card',
        value: 'debit',
    },
    {
        label: 'Credit Card',
        value: 'credit',
    },
    {
        label: 'Paypal',
        value: 'paypal',
    }
  ] 
  
const CheckoutForm = () => {

    const CheckoutContext = useCheckout();
    const { form, deliveryMethod, setDeliveryMethod } = CheckoutContext;

    return (
        <div>
            <Form {...form}>
                <form
                    id="checkout-form"
                    // onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <div className="grid gap-3 lg:grid-cols-2">
                        <h3 className="text-sm font-medium uppercase text-primary col-span-full">
                            Billing Details
                        </h3>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="John Doe"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="mail@mail.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="phone"
                                            placeholder="1234567890"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <h3 className="text-sm font-medium uppercase text-primary col-span-full">
                            Shipping Info
                        </h3>
                        <div className="col-span-full"><FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="address"
                                            placeholder="1234 Main St"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /></div>
                        <FormField
                            control={form.control}
                            name="zip"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Postcode</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="zip"
                                            placeholder="12345"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="city"
                                            placeholder="City"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="country"
                                            placeholder="Country"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <h3 className="text-sm font-medium uppercase text-primary col-span-full">
                            Shipping & Delivery Method
                        </h3>
                        <FormField
                            control={form.control}
                            name="deliveryMethod"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                  <FormLabel>Shipping Method</FormLabel>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                      className="flex flex-col gap-1"
                                    >
                                      { DeliveryMethods.map((option)=>(
                                      <FormItem key={option.value} className="flex items-center gap-x-1">
                                        <FormControl>
                                          <RadioGroupItem value={option.value} />
                                        </FormControl>
                                        <FormLabel className="pb-2 font-normal">
                                        {option.label}
                                        </FormLabel>
                                      </FormItem>))}
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                        />
                        <h3 className="text-sm font-medium uppercase text-primary col-span-full">
                            Payment Details
                        </h3>
                        {/* <div className="col-span-full">
                        <FormField
                            control={form.control}
                            name="paymentMethod"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                  <FormLabel>Payment Method</FormLabel>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                      className="flex flex-wrap items-center gap-3"
                                    >
                                      { PaymentMethods.map((option)=>(
                                      <FormItem key={option.value} className="flex items-center gap-x-1">
                                        <FormControl>
                                          <RadioGroupItem  value={option.value} />
                                        </FormControl>
                                        <FormLabel className="pb-2 font-normal">
                                        {option.label}
                                        </FormLabel>
                                      </FormItem>))}
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                        />
                        </div> */}
                        <FormField
                            control={form.control}
                            name="cardName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Card Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="cardName"
                                            placeholder=""
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="cardNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Card Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="cardNumber"
                                            placeholder="4242424242424242"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="cardExpiry"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Card Expiry</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="cardExpiry"
                                            placeholder="12/24"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="cardCvc"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Card Cvc</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="cardCvc"
                                            placeholder="123"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default CheckoutForm;
