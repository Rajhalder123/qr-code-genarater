// pages/contact.js
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        'service_id', // Replace with your EmailJS service ID
        'template_id', // Replace with your EmailJS template ID
        templateParams,
        'user_id' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Message sent successfully', response);
          setStatus('Message sent successfully!');
        },
        (error) => {
          console.error('Failed to send message', error);
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>
        {status && <p className="text-center mb-4 text-green-500">{status}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full p-3 border rounded-lg"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-3 border rounded-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="w-full p-3 border rounded-lg"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 px-8 py-4 rounded-lg text-xl font-semibold text-white hover:bg-teal-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
