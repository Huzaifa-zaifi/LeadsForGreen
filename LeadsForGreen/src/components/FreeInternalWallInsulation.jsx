import Header from './Header';
import Footer from './Footer';

const FreeInternalWallInsulation = ({ setFormOpen }) => {
  return (
    <>
      <section className="bg-sky-100 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image on the left */}
          <div>
          <img
  src="/Images/n6.jpg"
  alt="Internal Wall Insulation"
  className="rounded shadow-md w-full h-[400px] md:h-[500px] object-cover"
/>


          </div>

          {/* Text on the right */}
          <div>
            <h1 className="text-3xl font-bold text-sky-700 mb-4">Free Internal Wall Insulation</h1>
            <p className="text-gray-700 text-lg mb-4">
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
  <p>
    If you’re a homeowner in the UK, you may be eligible for a free or heavily subsidised wall insulation installation under the Eco4 scheme. The scheme is designed to help lower-income households or those in fuel poverty make their homes more energy-efficient by providing funding for energy-saving measures, including wall insulation.
  </p>

  <p>
    At LeadsForGreen, we specialize in providing Eco4 funding to help eligible homeowners access the funding they need to install wall insulation. By improving your home’s insulation, you can reduce your energy bills and save money in the long term.
  </p>

  <p>
    Under the Eco4 scheme, wall insulation installation funding is available to homeowners who meet the ECO criteria as set by Ofgem, and whose property is suitable for wall insulation installation. The scheme provides funding to cover the cost of installation, as well as any necessary repairs or upgrades to your property.
  </p>

  <p>
    At LeadsForGreen, we work with fully qualified and certified installers who will be PAS2030 and Trustmark certified. This means that you can be confident that the installation will be of high quality and carried out to the highest standards.
  </p>

  <p>
    <strong>There are two types of wall insulation available under the Eco4 scheme:</strong>
  </p>

  <p>
    <strong>Cavity wall insulation</strong> – This is suitable for properties with unfilled cavity walls, and involves the injection of insulating material into the cavity to improve insulation.
  </p>

  <p>
    <strong>Solid wall insulation</strong> – This is suitable for properties with solid walls, and involves the application of insulating material to the external or internal walls.
  </p>

  <p>
    To get started with your wall insulation installation application under the ECO4 scheme, simply contact us and provide some basic information about your property. Our team of experts will guide you through the application process, providing advice and support every step of the way. We’ll help you determine which wall insulation option is right for your property, and provide funding to cover the cost of installation.
  </p>

  <p>
    So, if you’re looking to improve the energy efficiency of your home and save money on your energy bills, consider applying for wall insulation installation funding under the Eco4 scheme with LeadsForGreen. Contact us today to find out more and start your application.
  </p>
</div>

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

export default FreeInternalWallInsulation;
