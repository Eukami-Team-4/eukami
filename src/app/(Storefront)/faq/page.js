import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqPage = () => {
  return (
    <div className="px-20 pt-20 bg-[F1F1F1]">
      <h1 className="mt-3 mb-6 font-[650] Inter text-black">FAQ&#39;S</h1>
      
      <div className="flex flex=col items-center  mx-10 px-6 mb-80 bg-white">  
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I return my order in-store?</AccordionTrigger>
          <AccordionContent>
            Yes, online orders can be refunded in-store. You will have 28 days to exchange or return your order within any Eukami store. After the 28 days refunds are no longer possible and your item cannot be exchanged.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Has my order been returned?</AccordionTrigger>
          <AccordionContent>
            Refunds and exchanges will be processed within 10 working days of the parcel arriving at our returns in our warehouse.
            Please note it typically takes at least 7 days for the courier to deliver your return parcel. We do not offer refunds on items damaged without the purchased warranty.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Email Newsletter</AccordionTrigger>
          <AccordionContent>
            To sign up to our email newsletter detailing our new products and price cuts, enter your email on the sign-up page and submit.
            <br/>To unsubscribe, click on the link at the bottom of the newsletter.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>I can&#39;t find my question here</AccordionTrigger>
          <AccordionContent>
          If you have a different question to the ones provided here, please go to our <a href="https://eukami.vercel.app/contact" className="underline cursor-pointer hover:text-blue-600">contact us</a> page, where we will aim to get back to you as soon as we can.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    
    </div>
  );
};

export default FaqPage;
