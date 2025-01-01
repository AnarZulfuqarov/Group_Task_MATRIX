import './Contact.scss';
import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  
  email: string;
  text: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  text?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    text: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = (): boolean => {
    const { name, email, text } = formData;
    const newErrors: FormErrors = {};

    if (!name) newErrors.name = "Name cannot be empty!";
    if (!email) {
      newErrors.email = "Email cannot be empty!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address!";
    }
    if (!text) newErrors.text = "Message cannot be empty!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("/api/contact", formData);
        alert("Message sent successfully!");
        console.log(response.data);
        setFormData({ name: "", email: "", text: "" }); // Clear the form
      } catch (error) {
        console.error("Error sending message:", error);
        alert("Failed to send the message. Please try again later.");
      }
    }
  };

  return (
    <div className='contact-page d-flex justify-content-center align-items-center p-5 gap-2'>
      <div className="contact-us col-6 text-white">
       <h3 className=' p-2'>Contact Us</h3>
        <h1 className='display-1'>Lets talk about your suggestions!</h1>
        
      </div>
      <form className='d-flex flex-column col-6 mt-5' onSubmit={handleSubmit}>
        <input
         className='input'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <p  style={{ color: "red" }}>{errors.name}</p>}

        <input
         className='input'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p className=' p-2' style={{ color: "red" }}>{errors.email}</p>}

        <textarea
        className='input'
          name="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Your message"
        />
        {errors.text && <p className=' p-2' style={{ color: "red" }}>{errors.text}</p>}

        <button className='btn btn-dark submit' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
