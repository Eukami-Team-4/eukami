import Image from "next/image"
const AboutUs= () => {
    return (
        <div className="bg-[#0C233B] text-white text-center"> 
        <div className="relative w-full h-[600px]">
        <Image
            src="/images/hp1.png" 
            fill
            alt="Man with Headphones"
            className="object-cover"
        ></Image>
        </div>
        Welcome to EUKAMI, where our passion for flawless audio meets innovative design to provide you with a unique sound experience.
        </div>




    );
}

export default AboutUs;