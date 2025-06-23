import Logos from "./Logos";


const FAQ = () => {
  return (
    <div className="bg-white text-gray-800">

      <section className="bg-sky-100 py-16 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-sky-700 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-700 text-lg">
            Got questions? We’ve got answers. Below are some of the most common questions we receive
            about the ECO 4 scheme and our services.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-sky-700">What is the ECO 4 Scheme?</h2>
          <p className="text-gray-700">
            The ECO 4 (Energy Company Obligation) scheme is a government initiative aimed at improving
            energy efficiency in UK homes, particularly for low-income households. It offers funding
            for energy-saving improvements like insulation, heating upgrades, and solar installations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-sky-700">Who is eligible for ECO 4 funding?</h2>
          <p className="text-gray-700">
            You may be eligible if you receive certain government benefits or if your household income
            is below a specified threshold. Homeowners and tenants in private rental properties can both qualify.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-sky-700">What kind of upgrades are available?</h2>
          <p className="text-gray-700">
            Available upgrades include air source heat pumps, wall insulation, loft insulation,
            solar PV systems, and replacement of old or inefficient boilers and storage heaters.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-sky-700">How do I apply?</h2>
          <p className="text-gray-700">
            Simply fill out our online form. Once submitted, our team will assess your eligibility
            and contact you to guide you through the next steps.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-sky-700">Do I have to pay anything?</h2>
          <p className="text-gray-700">
            Many installations are fully funded or heavily subsidised. We'll inform you up front
            if any costs apply and ensure you're happy before proceeding.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-sky-700">How long does the process take?</h2>
          <p className="text-gray-700">
            The process from application to installation typically takes a few weeks, depending
            on property surveys and installer availability.
          </p>
        </div>
      </section>
        <Logos />
      
    </div>
  );
};

export default FAQ;
