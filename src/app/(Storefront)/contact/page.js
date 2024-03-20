import { Input } 
from "@/components/ui/input.jsx";

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
          className="w-16 px-1.5 py-1 text-base font-normal text-white bg-black rounded-md cursor-pointer hover:bg-gray-500"
        >
          Submit
        </button>
      </form>
      <div className="grid grid-cols-2 gap-4 mx-auto mt-8 text-center">
          <div grid1>
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
          <div grid2>
            <p>Eukami Audio</p>
            <p>Birmingham</p>
            <p>United Kingdom</p>
            <p>B47ET</p>
          </div> 
      </div>
    </div>
  );
};

export default ContactPage;
