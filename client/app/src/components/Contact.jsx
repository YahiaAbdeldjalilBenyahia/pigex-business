import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto px-8 pt-24 text-white ">
      <h1 className="text-3xl font-bold mb-4 text-center">Contactez-nous</h1>
      <p className="text-white font-semibold mb-6 text-center">
        If you have any problems, questions or feedback, please feel free to get
        in touch with us.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
