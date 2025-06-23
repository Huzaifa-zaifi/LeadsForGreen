import Header from './Header';
import Footer from './Footer';

const FreeSolarPanels = ({ setFormOpen }) => {
  return (
    <div>
      <section className="bg-gray-50 py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Text Content */}
    <div>
      <h1 className="text-4xl font-bold text-sky-700 mb-6">Free Solar Panel Grants</h1>
      <p className="text-lg text-gray-700 mb-4">
        The ECO4 scheme enables qualifying UK homeowners and private tenants to receive solar panel grants completely free of charge. Solar PV panels reduce electricity bills and help households become more energy efficient and environmentally friendly.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        If your household receives certain government benefits or qualifies based on income, you could be eligible for full funding under the ECO4 scheme.
      </p>

      <h2 className="text-2xl font-semibold text-sky-600 mt-6 mb-2">Eligibility Criteria:</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
        <li>You are a homeowner or private tenant</li>
        <li>Your home has an EPC rating of D or lower</li>
        <li>Someone in your household receives qualifying benefits</li>
      </ul>

      <h2 className="text-2xl font-semibold text-sky-600 mt-6 mb-2">Benefits of Solar PV:</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
        <li>Lower your electricity bills</li>
        <li>Reduce your carbon footprint</li>
        <li>Increase your property value</li>
        <li>Generate clean energy at home</li>
      </ul>

      <button className="bg-sky-600 text-white px-6 py-3 rounded hover:bg-sky-700" onClick={() => setFormOpen(true)}>
        Apply Now
      </button>
    </div>

    {/* Right: Image */}
    <div>
      <img
        src="/Images/n5.jpg"
        alt="Free Solar Panels"
        className="w-full rounded shadow"
      />
    </div>
  </div>
</section>

    </div>
  );
};

export default FreeSolarPanels;
