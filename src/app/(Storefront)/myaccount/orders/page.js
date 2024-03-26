"use client";
import { useCheckout } from "@/app/(Storefront)/checkout/checkout-context";
import { formatCurrency } from "@/lib/format-currency";
import Image from "next/image";

const MyOrder = () => {
  const CheckoutContext = useCheckout();
  const { checkout } = CheckoutContext;
  return (
    <div className="container p-4 mx-auto bg-white">
      <div className="flex items-center justify-between p-4 bg-white">
        <input
          type="text"
          placeholder="Type a command for search"
          className="w-full p-2 border border-gray-300 rounded-log"
        />
        <button className="px-4 py-2 text-white bg-black rounded-md">
          Search
        </button>
      </div>
      <div className="flex gap-6">
        <div className="w-1/4">
          <div className="p-4 bg-white ">
            <div className="mb-4">
              <h3 className="mb-2 font-semibold">Order Status</h3>
              <div className="space-y-2">
                <div>
                  <input type="checkbox" id="shipped" />{" "}
                  <label htmlFor="shipped">Shipped</label>
                </div>
                <div>
                  <input type="checkbox" id="delivered" />{" "}
                  <label htmlFor="delivered">Delivered</label>
                </div>
                <div>
                  <input type="checkbox" id="cancelled" />{" "}
                  <label htmlFor="cancelled">Cancelled</label>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mb-2 font-semibold">Order Time</h3>
          <div className="space-y-2">
            <div>
              <input type="checkbox" id="last30days" />
              <label htmlFor="last30days" className="ml-2">
                Last 30 days
              </label>
            </div>
            <div>
              <input type="checkbox" id="last3months" />
              <label htmlFor="last3months" className="ml-2">
                Last 3 months
              </label>
            </div>
            <div>
              <input type="checkbox" id="year2023" />
              <label htmlFor="year2023" className="ml-2">
                2023
              </label>
            </div>
            <div>
              <input type="checkbox" id="year2022" />
              <label htmlFor="year2022" className="ml-2">
                2022
              </label>
            </div>
          </div>
        </div>
        <div className="w-full h-full border min-h-96">
          <ul className="flex flex-col gap-3 pb-6">
            {checkout?.lineItems?.map((item) => (
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
                <div className="pb-4 mb-4 border-b">
                  <p>
                    Your order will be delivered on <br />
                    {new Date(Date.now()).toLocaleDateString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
