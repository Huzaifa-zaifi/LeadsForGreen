import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_glgwy88',    
        'template_7ds4hb8',   
        form.current,
        'RDd62LfmIq7OTVFuM'     
      )
      .then(
        () => {
          setSuccess(true);
          setError('');
          form.current.reset();
        },
        (err) => {
          console.error(err.text);
          setError('❌ Failed to send. Please try again later.');
        }
      );
  };

  return (
    <section className="bg-sky-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-800 mb-4">Contact Us</h2>
        <p className="text-gray-700 text-lg mb-2">
          Fill in the form and one of our helpful advisors will be in touch shortly.
        </p>
        {success && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded mt-4">
            ✅ Thank you! Your message has been sent.
          </div>
        )}
        {error && (
          <div className="bg-red-100 text-red-800 px-4 py-2 rounded mt-4">
            {error}
          </div>
        )}
      </div>

      <div className="max-w-2xl mx-auto mt-10">
        <form ref={form} onSubmit={sendEmail} className="bg-white p-6 rounded shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your message"
              className="w-full border rounded px-3 py-2 mt-1"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-sky-700 text-white px-6 py-2 rounded hover:bg-sky-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
