import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Logos from "./components/Logos";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import FreeExternalWallInsulation from "./components/FreeExternalWallInsulation";
import ComplaintsPolicy from "./components/policies/ComplaintsPolicy";
import CustomerCharter from "./components/policies/CustomerCharter";
import PrivacyPolicy from './components/policies/PrivacyPolicy';
import FreeSolarPanels from "./components/FreeSolarPanels";
import FreeInternalWallInsulation from "./components/FreeInternalWallInsulation";
import FreeAirSourceHeatPump from "./components/FreeAirSourceHeatPump";
import FreeBackBoilerReplacement from "./components/FreeBackBoilerReplacement";
import FreeBoilerReplacement from "./components/FreeBoilerReplacement";
import Policies from "./components/Policies";
import Feedback from "./components/policies/Feedback";

function App() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ecoMeasure, setEcoMeasure] = useState('Heat Pump');
  const [ownership, setOwnership] = useState('');
  const [benefit, setBenefit] = useState('Universal Credit');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      data: {
        name,
        email,
        phone,
        ecoMeasure,
        ownership,
        benefit,
      },
    };

    try {
      await fetch("https://sheetdb.io/api/v1/no3zc7oxg7a5q", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      alert("Submitted successfully!");
      setFormOpen(false);
      setName('');
      setEmail('');
      setPhone('');
      setEcoMeasure('Heat Pump');
      setOwnership('');
      setBenefit('Universal Credit');
    } catch (error) {
      console.error("Submission failed", error);
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="font-sans text-gray-800 relative">
      <Header setFormOpen={setFormOpen} />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Home setFormOpen={setFormOpen} />
            <WhyUs />
            <Logos />
          </>
        } />
        <Route path="/about" element={<About setFormOpen={setFormOpen}/>} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/free-external-wall-insulation" element={<FreeExternalWallInsulation />} />
        <Route path="/free-solar-panels" element={<FreeSolarPanels setFormOpen={setFormOpen}/>} />
        <Route path="/free-internal-wall-insulation" element={<FreeInternalWallInsulation />} />
        <Route path="/free-air-source-heat-pump" element={<FreeAirSourceHeatPump />} />
        <Route path="/free-back-boiler-replacement" element={<FreeBackBoilerReplacement />} />
        <Route path="/free-boiler-replacement" element={<FreeBoilerReplacement />} />
        <Route path="/policies/ComplaintsPolicy" element={<ComplaintsPolicy />} />
        <Route path="/policies/CustomerCharter" element={<CustomerCharter />} />
        <Route path="/policies/Feedback" element={<Feedback />} />
        <Route path="/policies/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />

      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 bg-transparent bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative"
            >
              <button
                onClick={() => setFormOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">Apply for ECO 4 Funding</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 mt-1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full border rounded px-3 py-2 mt-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Telephone</label>
                  <input
                    type="tel"
                    className="w-full border rounded px-3 py-2 mt-1"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Select an ECO 4 measure you're most interested in</label>
                  <select
                    className="w-full border rounded px-3 py-2 mt-1"
                    value={ecoMeasure}
                    onChange={(e) => setEcoMeasure(e.target.value)}
                  >
                    <option>Air Source Heat Pump</option>
                    <option>Back Boiler Grant</option>
                    <option>Boiler Grant</option>
                    <option>Internal Wall Insulation</option>
                    <option>External Wall Insulation</option>
                    <option>Solar Panel Grant</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Are you a tenant or a homeowner?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="ownership"
                        value="Home Owner"
                        checked={ownership === "Home Owner"}
                        onChange={() => setOwnership("Home Owner")}
                      />
                      Home Owner
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="ownership"
                        value="Tenant"
                        checked={ownership === "Tenant"}
                        onChange={() => setOwnership("Tenant")}
                      />
                      Tenant
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">Are you on any of the following benefits?</label>
                  <select
                    className="w-full border rounded px-3 py-2 mt-1"
                    value={benefit}
                    onChange={(e) => setBenefit(e.target.value)}
                  >
                    <option>None</option>
                    <option>Income based Jobseeker's Allowance (JSA)</option>
                    <option>Income Related Employee and Support Allowance (ESA)</option>
                    <option>Pension Credit</option>
                    <option>Income Support</option>
                    <option>Tax Credits (Child Tax Credits and Working Tax Credits)e</option>
                    <option>Universal Credit.</option>
                    <option>Housing benefit</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-sky-700 text-white px-6 py-2 rounded hover:bg-sky-800 mt-4"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
