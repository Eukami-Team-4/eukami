"use client";
import { useCart } from "@/app/(Storefront)/cart/cart-context";
import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { formatCurrency } from "@/lib/format-currency";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { QuantitySelector } from "../components/quantity-selector";

const Cart = () => {
    const router = useRouter();

    const { cart, dispatch } = useCart();

    function handleAddProductToCart(product) {
        dispatch({ type: "ADD_PRODUCT", payload: product });
    }

    function handleChangeQuantity(productId, quantity) {
        dispatch({ type: "CHANGE_QUANTITY", payload: { productId, quantity } });
    }

    function handleRemoveProductFromCart(productId) {
        dispatch({ type: "REMOVE_PRODUCT", payload: productId });
    }

    function handleClearCart() {
        dispatch({ type: "CLEAR_CART" });
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <ShoppingCart size={16} />
                    </Button>
                </DialogTrigger>
                <DialogContent close={false}>
                    <div className="flex justify-between">
                        <h3 className="text-lg font-medium uppercase">
                            Cart
                            {cart.lineItems.length > 0 && (
                                <span>({cart.lineItems.length})</span>
                            )}
                        </h3>
                        <Button
                            variant="link"
                            size="sm"
                            onClick={handleClearCart}
                        >
                            Remove all
                        </Button>
                    </div>

                    <ul>
                        {cart.lineItems.map((item, id) => (
                            <li
                                key={id}
                                className="flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-md aspect-square bg-muted">
                                        photo
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="font-medium uppercase truncate">
                                            {item.product.name}
                                        </div>
                                        <div className="text-muted-foreground">
                                            {formatCurrency(item.product.price)}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <QuantitySelector
                                        size="sm"
                                        quantity={item.quantity}
                                        setQuantity={(quantity) => {
                                            handleChangeQuantity(
                                                item.product.id,
                                                quantity
                                            );
                                        }}
                                    ></QuantitySelector>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-between py-3">
                        <div className="text-sm font-medium uppercase text-muted-foreground">Total</div>
                        <div>
                            {formatCurrency(cart.lineItems.reduce(
                                (prev, current) =>
                                    prev +
                                    current.product.price * current.quantity,
                                0
                            ))}
                        </div>
                    </div>
                    <DialogTrigger asChild>
                        <StorefrontButton
                            onClick={() => router.push("/checkout")}
                        >
                            Checkout
                        </StorefrontButton>
                    </DialogTrigger>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Cart;
