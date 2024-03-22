import Image from "next/image"
const AboutUs= () => {
    return (
        <div className="bg-[#0C233B] text-white text-center ">
            <Image
                src="hp1.png" 
                alt="Man with Headphones"
                className="w-full h-auto"
            ></Image>
            Welcome to EUKAMI, where our passion for flawless audio meets innovative design to provide you with a unique sound experience.
        </div>



    );
}

export default AboutUs;