import React from 'react';

const FreeLoftInsulation = ({ setFormOpen }) => {
  return (
    <>
      <section className="bg-sky-100 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image on the left */}
          <div>
            <img
              src="/Images/loft.jpg" // Change this to your actual loft image path
              alt="Free Loft Insulation"
              className="rounded shadow-md w-full"
            />
          </div>

          {/* Text on the right */}
          <div>
            <h1 className="text-3xl font-bold text-sky-700 mb-4">Free Loft Insulation</h1>
            <p className="text-gray-700 text-lg mb-4">
              Loft insulation is one of the most effective ways to retain heat in your home and reduce energy bills. Under the UK government's ECO4 scheme, eligible homeowners can benefit from free or subsidised loft insulation to improve their property's energy efficiency.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              At LeadsForGreen, we help you access funding through the ECO4 initiative to get high-quality loft insulation installed at no cost to you. Whether your existing insulation is insufficient or missing entirely, we ensure your home is brought up to the required standards.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              To qualify, you must own your property or have landlord permission and meet the eligibility criteria set by Ofgem. Our certified installers (PAS2030 and Trustmark approved) ensure that the work is completed to the highest quality standards.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Don’t let heat escape through your roof. Insulate your loft and start saving money today. Reach out to our team to begin your application and enjoy a warmer, more energy-efficient home.
            </p>
            <button className="bg-sky-600 text-white px-6 py-3 rounded hover:bg-sky-700" onClick={() => setFormOpen(true)}>
        Apply Now
      </button>
          </div>
         
        </div>

      </section>
    </>
  );
};

export default FreeLoftInsulation;
