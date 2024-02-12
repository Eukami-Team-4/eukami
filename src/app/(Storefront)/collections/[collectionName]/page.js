import { FeaturedCollection } from "@/app/(Storefront)/components/featured-collection";
import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import { UniqueSellingPoint } from "@/app/(Storefront)/components/unique-selling-point";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CollectionPage = ({ params }) => {
  return (
    <main className="pb-16 space-y-16">
      <section className="flex items-center justify-center w-full h-40 text-4xl font-medium uppercase bg-indigoDye text-seasalt">
        {params.collectionName}
      </section>

      {Products.map((product, index) => (
        <ProductCard
          key={product.name}
          collectionName={params.collectionName}
          product={product}
          reversed={index % 2 === 0}
        />
      ))}
      <FeaturedCollection />
      <UniqueSellingPoint />
    </main>
  );
};

const Products = [
  {
    name: "Product 1",
    image: "../../../../../public/images/hp1.png",
    description:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    isFeatured: true,
  },
  {
    name: "Product 2",
    image: "../../../../../public/images/hp1.png",
    description:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  },
];

const ProductCard = ({ product, reversed, collectionName }) => {
  return (
    <section
      className={cn(
        "container relative flex flex-col items-center justify-between h-full gap-12 py-8 rounded-lg lg:flex-row text-seasalt",
        reversed && "lg:flex-row-reverse"
      )}
    >
      <div className="flex flex-col justify-center h-full gap-5 text-center lg:w-1/2 lg:text-left">
        {product.isFeatured && (
          <h3 className="uppercase text-brightOrange">Featured Product</h3>
        )}
        <h1 className="text-5xl uppercase text-indigoDye">{collectionName}{" "}{product.name}</h1>
        <p className="text-onyx">{product.description}</p>
        <div>
          <StorefrontButton href="/products/1">See Product</StorefrontButton>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full p-8 aspect-square lg:w-1/2">
        <div>
          <Image
            src={product.image}
            fill
            className="object-contain rounded-lg lg:h-72"
            alt={product.name}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default CollectionPage;
