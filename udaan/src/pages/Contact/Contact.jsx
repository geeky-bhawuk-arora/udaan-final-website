import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    contact: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs.send(
        "service_dgixjrs",
        "template_5mg42f6",
        formData,
        "T3hQHZN1nbGuGMP7o"
      )
        .then(() => {
          setFormData({
            name: "",
            email: "",
            location: "",
            contact: "",
            message: ""
          });
        })
        .catch((error) => {
          console.log("Failed..", error);
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className='contact-page'>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold z-auto text-purple-300 uppercase italic text-6xl sm:*:text-xl'>
            Get In Touch
          </h1>
          <p className='text-center w-75 mb-5 text-white mt-10 text-2xl'>
            Have any questions or need assistance? Reach out to us—we're here to help!
          </p>
        </div>
      </header>

      <div className='container my-5 d-flex justify-content-center'>
        <form id='contact-form' onSubmit={handleSubmit}>
          <h1 className='text-3xl text-center font-bold mb-4 uppercase'>Connect With Us</h1>

          <div className='mb-3'>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder='Name'
              onChange={handleChange}
              className='mb-8 w-full appearance-none border-2 border-[#0056b3] rounded-md bg-transparent px-3 py-2 text-sm focus:outline-none hover:border-green-400'
            />
            {errors.name && <p className='text-sm text-rose-800'>{errors.name}</p>}
          </div>

          <div className='mb-3'>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder='Enter Your Email'
              onChange={handleChange}
              className='mb-8 w-full appearance-none border-2 border-[#0056b3] rounded-md bg-transparent px-3 py-2 text-sm focus:outline-none hover:border-green-400'
            />
            {errors.email && <p className='text-sm text-rose-800'>{errors.email}</p>}
          </div>

          <div className='mb-3'>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              placeholder='Enter Your Location'
              onChange={handleChange}
              className='mb-8 w-full appearance-none hover:border-green-400 bg-transparent px-3 py-2 text-sm focus:outline-none border-2 border-[#0056b3] rounded-md'
            />
            {errors.location && <p className='text-sm text-rose-800'>{errors.location}</p>}
          </div>

          <div className='mb-3'>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              placeholder='Enter Your Contact'
              onChange={handleChange}
              className='mb-8 w-full appearance-none border-2 border-[#0056b3] rounded-md bg-transparent px-3 py-2 text-sm focus:outline-none hover:border-green-400'
            />
            {errors.contact && <p className='text-sm text-rose-800'>{errors.contact}</p>}
          </div>

          <div className='mb-3'>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              placeholder='Message'
              onChange={handleChange}
              className='mb-8 w-full appearance-none border-2 border-[#0056b3] rounded-md bg-transparent px-3 py-2 text-sm focus:outline-none hover:border-green-400'
              rows="6"
            />
            {errors.message && <p className='text-sm text-rose-800'>{errors.message}</p>}
          </div>

          <button
            type="submit"
            className={`bg-[#0056b3] border-none rounded-md px-5 py-2 text-white duration-300 ease-in-out ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={isSending}
          >
            <div className='flex items-center justify-center gap-2 hover:border-green-400'>
              {isSending ? "Sending..." : "Send"}
              <FiSend />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
