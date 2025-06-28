

const FreeAirSourceHeatPump = ({ setFormOpen }) => {
  return (
    <div>
      <section className="bg-gray-50 py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Text Content */}
    <div>
      <h1 className="text-4xl font-bold text-sky-700 mb-6">Free Air Source Heat Pump</h1>
      <p className="text-lg text-gray-700 mb-4">
      If you’re a homeowner in the UK, you may be eligible for a free or heavily subsidised air source heat pump installation under the Eco4 scheme. The scheme is designed to help lower-income households or those in fuel poverty make their homes more energy-efficient by providing funding for energy-saving measures, including air source heat pump installation.
      </p>
      <p className="text-lg text-gray-700 mb-4">
      At LeadsForGreen, we specialize in providing Eco4 funding to help eligible homeowners access the funding they need to install a new and efficient air source heat pump. By upgrading to a modern and efficient heating system, you can reduce your energy bills and save money in the long term.
      </p>
      <p className="text-lg text-gray-700 mb-4">
      Under the Eco4 scheme, air source heat pump installation funding is available to homeowners who meet the ECO criteria as set by Ofgem, and whose existing heating system is old and inefficient. The scheme provides funding to cover the cost of installation, as well as any necessary repairs or upgrades to your heating system.
      </p>
      <p className="text-lg text-gray-700 mb-4">
      At LeadsForGreen, we work with fully qualified and certified installers who will be PAS2030 and Trustmark certified. This means that you can be confident that the installation will be of high quality and carried out to the highest standards.
      </p>
      <p className="text-lg text-gray-700 mb-4">
      To get started with your air source heat pump installation application under the Eco4 scheme, simply contact us and provide some basic information about your property and existing heating system. Our team of experts will guide you through the application process, providing advice and support every step of the way. We’ll help you determine which air source heat pump option is right for your property, and provide funding to cover the cost of installation.
      </p>
      <p className="text-lg text-gray-700 mb-4">
      So, if you’re looking to improve the energy efficiency of your home and save money on your energy bills, consider applying for air source heat pump installation funding under the Eco4 scheme with LeadsForGreen. Contact us today to find out more and start your application.
      </p>
      <button className="bg-sky-600 text-white px-6 py-3 rounded hover:bg-sky-700" onClick={() => setFormOpen(true)}>
        Apply Now
      </button>
    </div>

    {/* Right: Image */}
    <div>
      <img
        src="/Images/n3.jpg"
        alt="Free Solar Panels"
        className="w-full rounded shadow"
      />
    </div>
  </div>
</section>

    </div>
  );
};

export default FreeAirSourceHeatPump;
