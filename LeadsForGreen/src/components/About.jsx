const About = ({ setFormOpen }) => {
    return (
      <div className="bg-white text-gray-800">
         <section className="bg-cyan-100 py-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                {/* Image Left */}
                <div>
                <img
                    src="/Images/boiler-installation.jpg" // Replace with your actual image path
                    alt="Why Choose Us"
                    className="rounded shadow-md w-full h-auto"
                />
                </div>

                {/* Text Right */}
                <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                <p className="text-lg text-gray-700">
                    We’re proud to be the all UK leading energy-saving expert, helping homeowners to use less, spend less, and save more.
                    Our mission is to provide access to funding and expert advice to help homeowners make their homes more energy-efficient and save money on their energy bills.
                </p>
                </div>
            </div>
           </section>

  
        {/* Mission Section */}
        <section className="bg-gray-100 py-20">
  <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

            <div>
              <h2 className="text-3xl text-center font-bold text-sky-700 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
              We specialize in providing funding through the ECO4 scheme to help lower-income households or those in fuel poverty access the funding they need to install a range of energy-saving measures, including air source heat pumps, solar PV systems, wall insulation, loft insulation, room in roof insulation, and more. We work with fully qualified and certified installers who will be PAS2035 and Trustmark certified, ensuring that all work is carried out to the highest standards.

At Borthwick Group, we’re committed to providing the best possible service to our customers. We pride ourselves on our expertise and our dedication to helping homeowners make their homes more energy-efficient. That’s why we’ve won awards at both the regional and national Energy Efficiency Awards year on year for a long period of time.

Our tagline is “Helping Homeowners Use Less, Spend Less, and Save More,” and we strive to live up to that tagline in everything we do. We’re passionate about helping homeowners to save money on their energy bills, reduce their carbon footprint, and create a more sustainable future.

If you’re a homeowner in the whole UK and you’re looking to make your home more energy-efficient, consider working with Borthwick Group. We’ll provide expert advice, access to funding, and high-quality installation services, all aimed at helping you to use less, spend less, and save more. Contact us today to find out more and start your energy-saving journey.
              </p>
            </div>

          </div>
        </section>
  
        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-sky-700 mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-left">
              <div className="bg-white p-6 rounded shadow">
                <h4 className="font-bold text-lg mb-2">Government Approved</h4>
                <p className="text-sm text-gray-600">
                  We only work with registered ECO4 Scheme providers and trusted UK installers.
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h4 className="font-bold text-lg mb-2">Hassle-Free Process</h4>
                <p className="text-sm text-gray-600">
                  We handle everything from eligibility checks to final installation and approval.
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h4 className="font-bold text-lg mb-2">No Upfront Cost</h4>
                <p className="text-sm text-gray-600">
                  Eligible customers can receive upgrades for free or at a greatly reduced cost.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="bg-gray-100 py-16 text-center">
  <div className="container mx-auto px-6 max-w-3xl">
    <h2 className="text-3xl font-bold text-sky-800 mb-4">From Start to Finish</h2>
    <p className="text-gray-700 mb-6">
      Use our simple form below to apply for ECO4 funding. Once you have completed the form,
      a member of our team will review your application and be in touch to discuss what help is available to you.
    </p>
    <p className="text-gray-700 mb-6">
      If you have any questions, please feel free to contact us on:
    </p>
    <ul className="text-gray-700 mb-6 space-y-2 text-left inline-block">
      <li>• FREE Air Source Heat Pump</li>
      <li>• Free Storage Heater Replacement</li>
      <li>• Free Back Boiler Replacement</li>
      <li>• Free Whole Home Insulation</li>
      <li>• Solar Panels PVs</li>
      <li>• Free Boiler Replacement</li>
    </ul>
    <div>
      <btn
        onClick={() => setFormOpen(true)}
        className="inline-block bg-sky-700 text-white px-6 py-2 rounded hover:bg-sky-800 mt-4 cursor-pointer"
      >
        Click Here
      </btn>
    </div>
  </div>
</section>

      </div>
    );
  };
  
  export default About;
  