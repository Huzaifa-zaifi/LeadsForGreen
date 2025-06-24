import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Logos from './Logos';

const WhyFree = () => {
  return (
    <>


      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-sky-800 mb-4">Why Is It Free?</h1>
          <p className="text-gray-700 text-lg mb-6">
            At LeadsForGreen, we help households across the UK benefit from fully funded energy efficiency upgrades through the ECO4 scheme — a government-backed initiative aimed at reducing energy bills and carbon emissions.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            The funding is provided by energy companies, who are obligated by the UK government to support the installation of measures like insulation, heating systems, and renewable energy solutions for low-income and vulnerable households. This means you don’t pay for the improvements — the support comes directly from the scheme itself.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Whether it's upgrading an old boiler, adding loft insulation, or installing solar panels, our role is to guide you through the eligibility process and connect you with trusted local installers — all at no cost to you.
          </p>
          <p className="text-gray-700 text-lg">
            Our mission at LeadsForGreen is simple: to make UK homes warmer, greener, and more affordable to run — with zero upfront costs to you.
          </p>
        </div>
      </section>

      <Logos />

    </>
  );
};

export default WhyFree;
