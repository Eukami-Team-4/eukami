import { UniqueSellingPoint } from "@/app/(Storefront)/components/unique-selling-point";
import { FeaturedCollection } from "../components/featured-collection";
import { FeaturedProducts } from "./FeaturedProducts";
import { Hero } from "./Hero";

const HeroProduct = {
  name: "XX99 studio pro noir I Headphones",
  images: [
    {
      publicUrl:
        "https://xbufnzihtjlgkfljttlv.supabase.co/storage/v1/object/public/images/hero-image.png?t=2024-03-20T08%3A00%3A40.138Z",
    },
  ],
  price: 290,
  description:
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  isFeatured: true,
  features:
    "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
};

const featuredProducts = [
  {
    name: "ZX9 SPEAKER",
    price: 290,
    image:
      "https://xbufnzihtjlgkfljttlv.supabase.co/storage/v1/object/public/images/speakers.png",
    isFeatured: true,
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    description:
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
  },
  {
    name: "ZX7 SPEAKER",
    image:
      "https://xbufnzihtjlgkfljttlv.supabase.co/storage/v1/object/public/images/wide%20speaker.png?t=2024-03-20T08%3A07%3A56.495Z",
    description: "",
    price: 420,
    isFeatured: true,
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
  },
];

export default function Home() {
  return (
    <main className="">
      <Hero product={HeroProduct} />
      <FeaturedCollection />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <UniqueSellingPoint />
    </main>
  );
}
