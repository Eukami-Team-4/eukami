"use client";
import { cn } from "@/lib/utils";


export const QuantitySelector = ({ quantity, setQuantity, size ="md", className="" }) => {
    if (size === "sm") {
        return (
            <div className={cn("flex bg-antiFlashWhite", className)}>
                <button
                    onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}
                    className="w-8 h-8 text-xs bg-antiFlashWhite"
                >
                    -
                </button>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium">
                    {quantity}
                </div>
                <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 text-xs bg-antiFlashWhite"
                >
                    +
                </button>
            </div>
        );
    }
    return (
        <div className={cn("flex bg-antiFlashWhite", className)}>
            <button
                onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}
                className="w-12 h-12 text-sm bg-antiFlashWhite"
            >
                -
            </button>
            <div className="flex items-center justify-center w-12 h-12 text-lg font-medium">
                {quantity}
            </div>
            <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 text-sm bg-antiFlashWhite"
            >
                +
            </button>
        </div>
    );
};
