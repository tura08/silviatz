import React, { useRef, useState } from "react";
import { useEffect } from "react";
import "./contact.css";

import emailjs from "@emailjs/browser";

const Contact = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the form data from the ref
    const formData = new FormData(formRef.current);

    // Check if any required fields are empty
    let isFormValid = true;
    for (const [name, value] of formData.entries()) {
      if (!value && formRef.current.elements[name].hasAttribute("required")) {
        isFormValid = false;
        break;
      }
    }

    if (!isFormValid) {
      window.alert("Please complete the form.");
      return;
    }

    emailjs
      .sendForm(
        "service_f677lah",
        "template_fpmhk6w",
        formRef.current,
        "7trW_Jj8c5INoUOK8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          window.alert("Thank you! Message sent.");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-wrapper">
        <h1>Feel free to contact me for any inquiry!</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name" required />
          <input type="text" placeholder="Topic" name="user_subject" required />
          <input type="text" placeholder="Email" name="user_email" required />
          <textarea rows="5" placeholder="Message" name="message" required />
          <button>Submit</button>
          {done}
        </form>
      </div>
    </div>
  );
};

export default Contact;
