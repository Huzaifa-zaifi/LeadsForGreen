import React from "react";
import { Link } from "react-router-dom";
import Logos from "./Logos";

const Policies = () => {
  return (
    <>
    <section className="bg-gray-100 py-20 px-6 min-h-[60-vh]">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-sky-700 mb-10 text-center">
          Our Policies
        </h1>

        <ul className="space-y-4 text-lg">
          <li>
            <Link to="/policies/ComplaintsPolicy" className="text-sky-700 hover:underline">
            Complaints Policy
            </Link>
          </li>
          <li>
            <Link to="/policies/CustomerCharter" className="text-sky-700 hover:underline">
              Trustmark Customer Charter
            </Link>
          </li>
          <li>
          <Link to="/policies/Feedback" className="text-sky-700 hover:underline">
              Feedback Procedure
            </Link>
          </li>
          <li>
          <Link to="/policies/PrivacyPolicy" className="text-sky-700 hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <p>Public Liability: – Covea Insurance Limit Of Indemnity £5,000,000</p>
          </li>
          <li>
            <p>Employers Liability: – Covea Insurance Limit Of Indemnity £10,000,000</p>
          </li>
        </ul>
      </div>
      
    </section>
    <Logos />
    </>
  );
  
};

export default Policies;
