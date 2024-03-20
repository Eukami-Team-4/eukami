import { ContactForm } from "./ContactForm";

const ContactPage = () => {
  return (
    <main className="flex flex-col items-center justify-center py-16">
      <h1 className="py-6 text-center uppercase">Contact us</h1>
      <ContactDetails />
      <h2 className="py-6 text-center uppercase">Or leave a message</h2>
      <ContactForm />
    </main>
  );
};

const ContactDetails = () => {
  return (
    <div className="flex flex-col justify-between p-3 sm:divide-x sm:flex-row">
      <div className="h-full p-3 px-6 min-h-20">
        <h3 className="pb-3 font-medium uppercase text-brightOrange">
          Get in touch
        </h3>
        <p className="text-sm">
          Phone:{" "}
          <a
            className="text-brightOrange hover:underline"
            href="tel:+441234567890"
          >
            +441234567890
          </a>
        </p>
        <p className="text-sm">
          Email:{" "}
          <a
            className="text-brightOrange hover:underline"
            href="mailto:support@eukami.com"
          >
            support@eukami.com
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
