"use client";
import { useCart } from "@/app/(Storefront)/cart/cart-context";
import { FeaturedCollection } from "@/app/(Storefront)/components/featured-collection";
import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import { UniqueSellingPoint } from "@/app/(Storefront)/components/unique-selling-point";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronLeft, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { QuantitySelector } from "../../components/quantity-selector";

const product = {
    name: "Headphones",
    image: "/images/product1.png",
    price: 2999,
    description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    isFeatured: true,
    features:
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
};

const ProductDetailsPage = () => {
    const router = useRouter();
    return (
        <main className="py-16 space-y-16">
            <section className="container flex">
                <Button
                    variant="ghost"
                    className="text-onyx"
                    onClick={() => router.back()}
                >
                    <ChevronLeft size={12} className="mr-2" /> Go Back
                </Button>
            </section>
            <ProductInfo product={product} />
            <ProductFeatures product={product} />
            <ProductImageGrid product={product} />
            <ProductRecommendations />
            <FeaturedCollection />
            <UniqueSellingPoint />
        </main>
    );
};

const ProductInfo = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { cart, dispatch } = useCart();
    if (!product) {
        return null;
    }

    const handleAddToCart = () => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: { product, quantity },
        });
        toast(
        <div className="flex justify-between w-full">
            {` ${product.name} added to cart`}
            <ShoppingCart size={16} />
        </div>
        )
    }
    return (
        <section className="container relative flex flex-col items-center justify-between h-full gap-12 py-8 rounded-lg lg:flex-row">
            <div className="relative flex items-center justify-center w-full p-8 aspect-square lg:w-1/2 max-h-96">
                <Image
                    src={product.image}
                    fill
                    sizes="100% 100%"
                    className="object-contain rounded-lg lg:h-72"
                    alt={product.name}
                ></Image>
            </div>
            <div className="flex flex-col justify-center flex-1 gap-3">
                {product.isFeatured && (
                    <h3 className="font-light tracking-[0.3em] uppercase text-brightOrange">
                        New Product
                    </h3>
                )}
                <h2 className="text-4xl font-medium uppercase">
                    {product.name}
                </h2>
                <p className="w-full leading-loose text-onyx">
                    {product.description}
                </p>
                <div className="py-3 text-xl font-medium">
                    {new Intl.NumberFormat("en-GB", {
                        style: "currency",
                        currency: "GBP",
                    }).format(product.price)}
                </div>
                <div className="flex gap-3">
                    <QuantitySelector
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />
                    <div className="flex gap-6">
                        <StorefrontButton
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </StorefrontButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProductFeatures = ({ product }) => {
    return (
        <section className="container relative flex flex-col gap-16 lg:flex-row">
            <div className="w-full lg:w-3/4">
                <h2 className="text-3xl font-medium uppercase">Features</h2>
                <p className="pt-3 whitespace-pre-wrap text-onyx">
                    {product.features}
                </p>
            </div>
            <div className="justify-around w-full space-y-3 lg:w-1/4">
                <h2 className="text-3xl font-medium uppercase">In The Box</h2>
                <ul className="flex flex-col gap-3 text-onyx">
                    {Array(4)
                        .fill(1)
                        .map((v, i) => (
                            <li key={i} className="flex items-center">
                                <CheckCircle2
                                    size={16}
                                    className="mr-2 text-brightOrange"
                                />{" "}
                                Headphone Unit
                            </li>
                        ))}
                </ul>
            </div>
        </section>
    );
};

const ProductImageGrid = ({ product }) => {
    return (
        <section className="container lg:flex flex-col lg:flex-row lg:h-[40rem]">
            <div className="flex-col flex-1 h-full gap-4 lg:flex">
                <div className="relative flex-1 w-full h-96 lg:h-full ">
                    <Image
                        className="object-cover rounded-lg"
                        src={product.image}
                        fill
                        loading="lazy"
                        alt=""
                    />
                </div>
                <div className="relative flex-1 w-full h-96 lg:h-full ">
                    <Image
                        className="object-cover rounded-lg"
                        src={product.image}
                        fill
                        loading="lazy"
                        alt=""
                    />
                </div>
            </div>
            <div className="relative flex items-center aspect-square h-96 lg:h-[40rem] lg:w-3/5">
                <Image
                    className="object-cover rounded-lg"
                    src={product.image}
                    fill
                    loading="lazy"
                    alt=""
                />
            </div>
        </section>
    );
};

const recommendedProducts = [
    {
        name: "XX99 Mark I",
        image: "/images/hp1.png",
    },
    {
        name: "XX59",
        image: "/images/hp2.png",
    },
    {
        name: "ZX9 Speaker",
        image: "/images/hp3.png",
    },
];

const ProductRecommendations = () => {
    return (
        <section className="container py-16 space-y-16">
            <h2 className="py-3 text-3xl font-medium text-center uppercase">
                You may also like
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {recommendedProducts.map((product, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center justify-center gap-6"
                    >
                        <Image
                            className="object-cover w-4/5 rounded-md aspect-square"
                            width={300}
                            height={300}
                            src={product.image}
                            alt={product.name}
                        />
                        <h3 className="text-lg font-medium uppercase">
                            {product.name}
                        </h3>
                        <StorefrontButton href="/products/1">
                            See Product
                        </StorefrontButton>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductDetailsPage;
