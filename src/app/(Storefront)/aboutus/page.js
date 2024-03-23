import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
const AboutUs = () => {
  return (
    <div>
        <div className=" bg-[#0C233B] relative object-cover w-full h-full p-8 overflow-hidden">
            <Image
                src="/images/aboutusimage1.jpg"
                alt="Man with Headphones"
                layout="responsive"
                width={500}
                height={300}
            ></Image>
        </div>
      
       <div className="bg-[#0C233B] text-white text-center h-20 text-lg"> Welcome to EUKAMI, where our passion for flawless audio meets innovative
        design to provide you with a unique sound experience. </div>

        
      <div className="mb-20">
        <h2 className="pt-20 text-5xl font-[650] text-center pb-9 ">OUR STORY</h2>
        <p className="mb-2 leading-relaxed text-center px-14">

        Established in 1999 by a group of young adults, EUKAMI began with a simple mission: to create audio equipment that exceeds the ordinary listening experience. 
            
        <br/> Our founders, audiophiles and tech enthusiasts, sought to bridge the gap between professional studio-quality sound and everyday consumer electronics.
          
        <br/> From our first pair of headphones to our latest range of speakers, we are dedicated to creating audio technology that ensures purity of sound because we believe great sound has the power to move you, to touch your soul.
          
        <br/> We are leading in innovation, continuously seeking innovative methods to improve your listening experience. Our products are designed with user-friendly, adaptable and lifestyle-compatible features.
          
        <br/> Your satisfaction is our top priority. We offer a one year comprehensive warranty, 24/7 customer support, and a community forum for EUKAMI enthusiasts to share their experiences and advice.
        </p>

      </div>

      <div className=" bg-[#0C233B] relative object-cover w-full h-full p-8 overflow-hidden">
            <Image
                src="/images/aboutusimage2.jpg"
                alt="Audio Studio"
                layout="responsive"
                width={500}
                height={300}
            ></Image>
        </div>
      

      <div>
        <h2>
            Join our list
        </h2>

        <p>
            Keep up to date with our newest releases, collaborations and more
        </p>
        <div className="w-72">
          <Input type="email" placeholder="Enter your email address"/>
        </div>
        
      </div>
      <Checkbox>
        
      </Checkbox>
      <Button>Sign up</Button>
    </div>
  );
};
export default AboutUs;
