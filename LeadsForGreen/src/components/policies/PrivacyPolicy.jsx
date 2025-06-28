import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="container mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-skyblue-700">Privacy Policy</h1>

      <p className="mb-4">
        <strong>Who we are:</strong> Our website address is: <a href="https://leadsforgreen.com" className="text-skyblue-600 underline">https://leadsforgreen.com</a>.
      </p>

      <p className="mb-4">
        At LeadForGreen we are strongly committed to protecting the privacy of users of this website, and we do all that we can to protect user information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Data Protection</h2>
      <p className="mb-4">
        Any information you provide will be held securely and in accordance with the Data Protection Act 1998. Your personal details will not be disclosed to third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Information we collect from visitors</h2>
      <p className="mb-2">We collect information from visitors relating to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Feedback submitted to us</li>
        <li>Site usage tracking</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Feedback</h2>
      <p className="mb-4">
        If you provide feedback about the website through a contact form or email address we will only use this information for the purposes intended. You will not receive any subsequent unsolicited communication.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Site usage tracking – Cookies</h2>
      <p className="mb-4">
        To make this site simpler, small data files are placed on your computer. These are known as cookies. Most big websites do this too.
      </p>
      <p className="mb-4">
        They improve things by:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Remembering settings, so you don’t have to keep re-entering them</li>
        <li>Remembering information you’ve given (e.g. your postcode)</li>
        <li>Measuring how you use the website</li>
      </ul>
      <p className="mb-4">
        Our cookies aren’t used to identify you personally. They’re just here to make the site work better for you. You can manage and/or delete these small files as you wish.
      </p>
      <p className="mb-4">
        To learn more about cookies and how to manage them, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noreferrer" className="text-green-600 underline">AboutCookies.org</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Google Analytics</h2>
      <p className="mb-4">
        We use Google Analytics to collect information about how people use this site. We do this to ensure it meets users’ needs and to understand how to improve it. We do not collect or store your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Online privacy policy</h2>
      <p className="mb-4">
        We endeavor to take all reasonable steps to protect your personal information using firewalls, anti-virus software, and backups. However, we cannot guarantee full security of data you disclose online.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Your rights</h2>
      <p className="mb-4">
        You have the right to see any personal data we keep about you. You can view and print the data we hold. If it is incorrect, please contact us.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">External links</h2>
      <p className="mb-4">
        Our website may link to external sites. We are not responsible for their data policies or content.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
