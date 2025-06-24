import { useNavigate } from "react-router-dom";

const Home = ({ setFormOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">
      {/* ECO4 Grants Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-800 mb-4">
            ECO4 and GBIS Grants Available Now!
          </h2>
          <p className="mb-6 text-gray-700 text-base sm:text-lg">
            If you own your home and you or someone in your household is in receipt of government credits,
            you could qualify for funding to improve your home's energy efficiency and receive an Air Source
            Heat Pump, Back Boiler Replacement, Replacement Electric Storage Heaters, Free Boiler (Gas A rated),
            Wall Insulation and Loft Insulation completely free or at least heavily subsidised.
          </p>
          <button className="bg-cyan-700 text-white px-6 py-2 rounded hover:bg-cyan-800 text-sm sm:text-base" onClick={() => setFormOpen(true)}>
            Check Eligibility
          </button>
        </div>
        <div>
          <img
            src="/Images/n1.jpg"
            alt="Boiler Installation"
            className="rounded shadow-md w-full h-auto"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl font-bold mb-4">OUR SERVICES</h3>
          <h2 className="text-center text-3xl font-semibold mb-10">
            ECO4 Energy Solutions and GBIS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Reusable Card Component */}
            {[
              {
                img: "/Images/n4.jpg",
                title: "FREE External Wall Insulation",
                desc:
                  "If you’re a homeowner in the UK, you may be eligible for a free or heavily subsidised wall insulation installation under the ECO 4 scheme.",
                path: "/free-external-wall-insulation",
              },
              {
                img: "/Images/n5.jpg",
                title: "FREE Solar Panels Grants",
                desc:
                  "Eligible homeowners may receive a free or subsidised solar PV system installation under the ECO 4 scheme...",
                path: "/free-solar-panels",
              },
              {
                img: "/Images/n6(1).jpg",
                title: "FREE Internal Wall Insulation",
                desc:
                  "Lower-income households in the UK may qualify for free or subsidised internal wall insulation...",
                path: "/free-internal-wall-insulation",
              },
       
              {
                img: "/Images/n2.jpg",
                title: "FREE Back Boiler upgrade Grants",
                desc:
                  "If you have a back boiler, you may be eligible for a free or subsidised conversion to a more energy-efficient system.",
                path: "/free-back-boiler-replacement",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded shadow p-6 flex flex-col justify-between">
                <div>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="rounded shadow-md w-full h-auto mb-4"
                  />
                  <h4 className="font-bold text-lg mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
                <button
                  onClick={() => navigate(card.path)}
                  className="text-green-700 mt-3 inline-block text-sm hover:underline text-left"
                >
                  READ MORE »
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Process Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold mb-6">
            The ECO4 Funding Process…
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            It couldn’t be easier to get started and apply for ECO4 funding with our easy 3 step process!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: "✏️", title: "Check Your Eligibility", desc: "Complete our form to learn what measures are available." },
              { icon: "📅", title: "Book Your FREE Survey", desc: "We'll confirm what energy-saving measures are available." },
              { icon: "🏠", title: "We Complete Your Work", desc: "Our engineers install the approved upgrades with guarantees." },
            ].map((step, idx) => (
              <div key={idx}>
                <div className="text-4xl text-green-700 mb-4">{step.icon}</div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-sky-100 py-16 text-center">
  <div className="max-w-2xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl font-bold text-cyan-900 mb-4">Why Is It Free?</h2>
    <p className="text-gray-700 mb-6">
      Thanks to the UK Government's ECO4 scheme, eligible households can receive heating and insulation upgrades at no cost. We’ll help you access it — simply and quickly.
    </p>
    <button
      className="bg-cyan-700 text-white px-6 py-2 rounded hover:bg-cyan-800"
      onClick={() => window.location.href = '/why-is-it-free'}
    >
      Learn More
    </button>
  </div>
</section>

    </div>
  );
};

export default Home;
