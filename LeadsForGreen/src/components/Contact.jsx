import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Logos from './Logos';

const Contact = () => {
  return (
    <>
      <section className="bg-sky-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 text-lg mb-2">
            You can contact us using the details below or fill in our form and one of our helpful advisors will be in touch.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mt-10">
          {/* Contact Details */}
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg text-sky-700">Phone</h3>
              <p>0330 818 6395</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-sky-700">Email</h3>
              <p>enquiries@simplexeco.co.uk</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-sky-700">Registered Address</h3>
              <p>LeadsForsky Eco LTD<br />1-3 College Street, St Helens, England, WA10 1TD</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-sky-700">Opening Hours</h3>
              <p>Monday – Friday: 9am to 5pm</p>
              <p>Saturday & Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white rounded shadow-md p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input type="text" className="w-full border rounded px-3 py-2 mt-1" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="w-full border rounded px-3 py-2 mt-1" placeholder="Your email" />
            </div>
            <div>
              <label className="block text-sm font-medium">Telephone</label>
              <input type="tel" className="w-full border rounded px-3 py-2 mt-1" placeholder="Your number" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea rows="4" className="w-full border rounded px-3 py-2 mt-1" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="bg-sky-700 text-white px-6 py-2 rounded hover:bg-sky-800">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Logos />
    </>
  );
};

export default Contact;
