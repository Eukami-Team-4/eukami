import { FeaturedCollection } from "@/app/(Storefront)/components/featured-collection";
import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import { UniqueSellingPoint } from "@/app/(Storefront)/components/unique-selling-point";
import { getCollections, getProducts } from "@/lib/supabase/actions";
import { cn } from "@/lib/utils";
import { FolderOpen } from "lucide-react";
import Image from "next/image";

export const revalidate = 60 * 60; // revalidate at most every 60 minutes

const CollectionPage = async ({ params }) => {
  const collections = await getCollections();
  const products = await getProducts();
  //params collection must exist in collections
  const collection = collections.find(
    (collection) =>
      collection.name.toLowerCase().trim() ===
      decodeURI(params.collectionName).toLowerCase().trim()
  );

  if (!collection) {
    return <div>Collection not found</div>;
  }
  //filter only products that belong to the collection
  const collectionProducts = products.filter(
    (product) => product.collection_id === collection.id
  );
  return (
    <main className="pb-16 space-y-16">
      <section className="flex items-center justify-center w-full h-40 text-4xl font-medium uppercase bg-indigoDye text-seasalt">
        {collection.name}
      </section>

      {collectionProducts.map((product, index) => (
        <ProductCard
          key={product.name}
          collectionName={collection.name}
          product={product}
          reversed={index % 2 === 0}
        />
      ))}
      {collectionProducts.length === 0 && <EmptyCollection />}
      <FeaturedCollection />
      <UniqueSellingPoint />
    </main>
  );
};

const ProductCard = ({ product, reversed }) => {
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
        <h1 className="text-5xl uppercase text-indigoDye">{product.name}</h1>
        <p className="text-onyx">{product.description}</p>
        <div>
          <StorefrontButton href={`/products/${product.name}`}>
            See Product
          </StorefrontButton>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full p-8 aspect-square lg:w-1/2">
        <div>
          <Image
            src={product.images[0]?.publicUrl}
            fill
            className="object-contain rounded-lg lg:h-72"
            alt={product.name}
          ></Image>
        </div>
      </div>
    </section>
  );
};

const EmptyCollection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 text-center text-muted-foreground">
      <FolderOpen size={48} className="text-primary" />
      <p className="max-w-96">
        Collection is empty. <br /> View other recommended collections
      </p>
    </div>
  );
};

export default CollectionPage;
