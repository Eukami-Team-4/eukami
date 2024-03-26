"use client";
import { CartItem } from "@/app/(Storefront)/cart/cart-context";
import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { formatCurrency } from "@/lib/format-currency";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCheckout } from "../checkout/checkout-context";
import { QuantitySelector } from "../components/quantity-selector";
import { useCart } from "./cart-context";

const CartDialog = () => {
  const router = useRouter();
  const CheckoutContext = useCheckout();
  const CartContext = useCart();
  if (!CartContext) return null;
  const { cart, dispatch } = CartContext;
  if (!CheckoutContext) return null;
  const { handleCheckout } = CheckoutContext;

  function handleChangeQuantity(lineItem: CartItem, quantity: number) {
    lineItem.quantity = quantity;
    dispatch({ type: "CHANGE_PRODUCT", payload: lineItem });
  }

  function handleRemoveProductFromCart(lineItem: CartItem) {
    dispatch({ type: "REMOVE_PRODUCT", payload: lineItem });
  }

  function handleClearCart() {
    dispatch({ type: "CLEAR_CART", payload: cart.lineItems[0] });
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="relative rounded-full">
            <ShoppingCart size={16} />
            {cart.lineItems.length > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-medium rounded-full animate-pulse bg-primary text-primary-foreground aspect-square">
                {cart.lineItems.length}
              </span>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent close={false}>
          {cart.lineItems.length === 0 ? (
            <CartEmptyState />
          ) : (
            <>
              <div className="flex justify-between">
                <h3 className="text-lg font-medium uppercase">
                  Cart
                  <span>({cart.lineItems.length})</span>
                </h3>
                <Button variant="link" size="sm" onClick={handleClearCart}>
                  Remove all
                </Button>
              </div>
              <ul className="flex flex-col gap-3">
                {cart.lineItems.map((item) => (
                  <li
                    key={item?.id}
                    className="flex items-center justify-between"
                  >
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
                    <div>
                      <QuantitySelector
                        size="sm"
                        quantity={item?.quantity}
                        setQuantity={(quantity: number) => {
                          handleChangeQuantity(item, quantity);
                        }}
                      ></QuantitySelector>
                      <span
                        onClick={() => handleRemoveProductFromCart(item)}
                        className="text-sm cursor-pointer text-muted-foreground hover:underline"
                      >
                        Remove
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between py-3">
                <div className="text-sm font-medium uppercase text-muted-foreground">
                  Total
                </div>
                <div>
                  {formatCurrency(
                    cart.lineItems.reduce(
                      (prev, current) =>
                        prev +
                        current?.product_variant.price * current?.quantity,
                      0
                    )
                  )}
                </div>
              </div>
              <DialogTrigger asChild>
                <StorefrontButton
                  onClick={async () => {
                    const checkout = await handleCheckout(cart);
                    if (checkout?.checkoutUrl) {
                      router.push(`/checkout/${checkout.checkoutUrl}`);
                    }
                  }}
                >
                  Checkout
                </StorefrontButton>
              </DialogTrigger>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const CartEmptyState = () => {
  return (
    <div className="flex items-center justify-center h-full min-h-96">
      <div className="flex flex-col items-center gap-3">
        <ShoppingCart size={48} />
        <h3 className="py-3 text-lg">Your cart is empty</h3>
        <DialogTrigger asChild>
          <StorefrontButton>Continue Shopping</StorefrontButton>
        </DialogTrigger>
      </div>
    </div>
  );
};

export default CartDialog;
