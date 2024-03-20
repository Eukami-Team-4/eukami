import { ContactForm } from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="container max-w-md p-8 mx-auto">
      <h1 className="mb-8 text-2xl font-bold text-center">Contact Us</h1>
      <form
        action="/submit_contact_form"
        method="post"
        className="flex flex-col"
      >
        <div className="grid grid-cols-2 gap-3 pb-8">
          
          <Input
            type="text"
            
            id="first_name"
            name="first_name"
            required
            className="text-xs"
            placeholder="First Name"
          />
          <Input
            type="text"
            id="last_name"
            name="last_name"
            required
            className="text-xs "
            placeholder="Last Name"
          />
        </div>
        
        <Input
          type="email"
          id="email_address"
          name="email_address"
          required
          className="mb-8 text-xs"
          placeholder="Email Address"
        />
        <Input
          type="telephone"
          id="mobile_number"
          name="mobile_number"
          required
          className="mb-8 text-xs"
          placeholder="Mobile Number"
        />
        
        <textarea
          id="message"
          name="message"
          required
          rows="4"
          className="p-2 mb-8 text-xs border border-gray-300 rounded-md resize-vertical focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          placeholder="Write your message here"
        ></textarea>
        <button
          type="submit"
          className="p-2 text-white bg-black rounded-md cursor-pointer hover:bg-gray-500"
        >
          Submit
        </button>
      </form>
      <div className="mt-8 text-center contact-info">
        <p className="font-bold">Eukami Audio</p>
        <p>Birmingham, United Kingdom</p>
        <p>Phone: +44 8512309858</p>
        <p>
          Email:{" "}
          <a
            href="mailto:Eukami@gmail.com"
            className="text-gray-500 hover:underline"
          >
            Eukami@gmail.com
          </a>
        </p>
      </div>
      <div className="h-full p-3 px-6 min-h-20">
        <h3 className="pb-3 font-medium uppercase text-brightOrange">
          Find us at
        </h3>
        <p className="text-sm">
          Eukami Audio <br /> Birmingham <br /> United Kingdom B47ET
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
