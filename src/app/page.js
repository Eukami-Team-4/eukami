import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <nav className="flex justify-between w-full gap-4 p-4 text-white bg-black">
      <div className="px-4 text-xl">Eukami</div>
      <div>menu</div>
      <div>cart</div>
    </nav>
    <main className="container p-8 py-16 mx-auto space-y-32">
      <section className="flex text-gray-600"><button>Go Back</button></section>
      <section className="flex">
        <div className="flex flex-1 pl-16">
          <img
            className="object-cover w-4/5 aspect-square"
            src="https://www.yankodesign.com/images/design_news/2022/07/auto-draft/google_pixel_headphones_2.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center flex-1 gap-3">
          <h3 className="font-light tracking-widest uppercase text-amber-500">
            New Product
          </h3>
          <h2 className="text-2xl font-medium uppercase">
            XX99 Mark II <br />Headphones
          </h2>
          <p className="w-4/5 text-sm leading-loose text-gray-500">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <div className="text-lg font-medium">$2,999.00</div>
          <div className="flex gap-4">
            <div className="flex bg-gray-200">
              <button className="p-2 px-4 text-gray-600">-</button>
              <p className="p-2">1</p>
              <button className="p-2 px-4 text-gray-600">+</button>
            </div>
            <button className="p-3 text-sm text-white uppercase bg-amber-500">
              Add To Cart
            </button>
          </div>
        </div>
      </section>
      <section className="flex gap-24">
        <div className="w-3/5">
          <h2 className="text-2xl font-medium uppercase">Features</h2>
          <p className="pt-3 text-sm text-gray-500">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat. <br />
            <br />
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
        <div className="w-2/5 space-y-3">
          <h2 className="text-2xl font-medium uppercase">In The Box</h2>
          <ul className="flex flex-col gap-3 text-gray-500">
            <li>Headphone Unit</li>
            <li>Replacement Earcups</li>
            <li>User Manual</li>
            <li>3.5mm 5m Audio Cable</li>
            <li>Travel Bag</li>
          </ul>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="col-span-2 row-span-2">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </section>
      <section className="space-y-12">
        <h2 className="py-3 text-2xl font-medium text-center uppercase">
          You may also like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-6">
            <img
              className="object-cover w-4/5 rounded-md aspect-square"
              src="https://www.yankodesign.com/images/design_news/2022/07/auto-draft/google_pixel_headphones_2.jpg"
              alt=""
            />
            <h3 className="text-lg font-medium uppercase">XX99 Mark I</h3>
            <button className="p-3 px-8 text-sm text-white uppercase bg-amber-500">
              See Product
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <img
              className="object-cover w-4/5 rounded-md aspect-square"
              src="https://www.yankodesign.com/images/design_news/2022/07/auto-draft/google_pixel_headphones_2.jpg"
              alt=""
            />
            <h3 className="text-lg font-medium uppercase">XX59</h3>
            <button className="p-3 px-8 text-sm text-white uppercase bg-amber-500">
              See Product
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <img
              className="object-cover w-4/5 rounded-md aspect-square"
              src="https://www.yankodesign.com/images/design_news/2022/07/auto-draft/google_pixel_headphones_2.jpg"
              alt=""
            />
            <h3 className="text-lg font-medium uppercase">ZX9 Speaker</h3>
            <button className="p-3 px-8 text-sm text-white uppercase bg-amber-500">
              See Product
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
          <div
            className="relative flex flex-col items-center justify-center gap-3 p-6 h-72"
          >
            <img
              className="object-contain w-32 rounded-md"
              src="/public/images/speaker-nobg.png"
              alt=""
            />
            <h3 className="font-medium uppercase">Headphones</h3>
            <button
              className="flex items-center gap-1 text-sm text-gray-500 uppercase"
            >
              Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right text-amber-500"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
            <div
              className="absolute bottom-0 w-full rounded-md bg-muted h-3/5 -z-10"
            ></div>
          </div>
          <div
            className="relative flex flex-col items-center justify-center gap-3 p-6 h-72"
          >
            <img
              className="object-contain w-32 rounded-md"
              src="/public/images/speaker-nobg.png"
              alt=""
            />
            <h3 className="font-medium uppercase">Speakers</h3>
            <button
              className="flex items-center gap-1 text-sm text-gray-500 uppercase"
            >
              Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right text-amber-500"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
            <div
              className="absolute bottom-0 w-full rounded-md bg-stone-200 h-3/5 -z-10"
            ></div>
          </div>
          <div
            className="relative flex flex-col items-center justify-center gap-3 p-6 h-72"
          >
            <img
              className="object-contain w-32 rounded-md"
              src="/public/images/speaker-nobg.png"
              alt=""
            />
            <h3 className="font-medium uppercase">Earphones</h3>
            <button
              className="flex items-center gap-1 text-sm text-gray-500 uppercase"
            >
              Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right text-amber-500"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
            <div
              className="absolute bottom-0 w-full rounded-md bg-stone-200 h-3/5 -z-10"
            >somethings in here</div>
          </div>
        </div>
      </section>
      <section className="grid-cols-2 md:grid gap-x-32">
        <div className="flex flex-col items-center justify-center ml-auto max-w-96">
          <h3 className="text-2xl uppercase">Bringing you the <span className="text-amber-500">best</span> audio gear</h3>
          <p className="pt-3 text-gray-500 text-small">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img
          className="object-cover rounded-md w-96 h-96 aspect-sqare"
          src="https://images.unsplash.com/photo-1618865212965-5fd43d7fdece?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </section>
    </main>
    <footer className="bg-stone-900">
      <div
        className="container relative grid grid-cols-2 gap-4 p-8 mx-auto text-white"
      >
        <div className="absolute top-0 w-48 h-1 left-8 bg-amber-500"></div>
        <div className="max-w-md space-y-6">
          <h3 className="text-2xl font-medium uppercase">Audiophile</h3>
          <p className="text-sm text-gray-500">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="text-sm text-gray-500">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
        <div className="flex justify-between max-w-md">
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-sm font-medium uppercase">audiophile</h4>
            <a className="text-sm text-gray-500" href="#">Home</a>
            <a className="text-sm text-gray-500" href="#">Headphones</a>
            <a className="text-sm text-gray-500" href="#">Speakers</a>
            <a className="text-sm text-gray-500" href="#">Earphones</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-sm font-medium uppercase">support</h4>
            <a className="text-sm text-gray-500" href="#">Product Help</a>
            <a className="text-sm text-gray-500" href="#">Customer Care</a>
            <a className="text-sm text-gray-500" href="#">Warranty</a>
            <a className="text-sm text-gray-500" href="#">Product Help</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-sm font-medium uppercase">contact</h4>
            <a className="text-sm text-gray-500" href="#">Contact Us</a>
            <a className="text-sm text-gray-500" href="#">Press</a>
            <a className="text-sm text-gray-500" href="#">Careers</a>
          </div>
        </div>
      </div>
    </footer>
    </main>
  );
}
