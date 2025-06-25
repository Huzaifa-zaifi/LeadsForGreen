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
import WhyFree from "./components/WhyFree";

function App() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ecoMeasure, setEcoMeasure] = useState('Heat Pump');
  const [ownership, setOwnership] = useState('');
  const [benefit, setBenefit] = useState('Universal Credit');
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [comments, setComments] = useState("");

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
        postcode,
        address,
        comments,
      },
    };

    try {
      await fetch("https://sheetdb.io/api/v1/7c9pkgor381wk", {
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
      setEcoMeasure('');
      setOwnership('');
      setBenefit('');
      setPostcode('');
      setAddress('');
      setComments('');
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
        <Route path="/why-is-it-free" element={<WhyFree />} />

      </Routes>

      <Footer />

      <AnimatePresence>
  {isFormOpen && (
    <div className="fixed inset-0 bg-transparent bg-opacity-40 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-4 sm:p-6 rounded-2xl shadow-2xl w-[95vw] sm:w-full max-w-2xl max-h-[95vh] overflow-y-auto relative"
        >
          <button
            onClick={() => setFormOpen(false)}
            className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
          >
            ✕
          </button>
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Apply for ECO4 and GBIS Funding
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Postcode</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Address</label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium">Interested ECO4 Measure</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                value={ecoMeasure}
                onChange={(e) => setEcoMeasure(e.target.value)}
              >
                <option>Air Source Heat Pump</option>
                <option>Back Boiler Upgrade Grant</option>
                <option>Boiler Upgrade Grant</option>
                <option>Internal Wall Insulation</option>
                <option>External Wall Insulation</option>
                <option>Solar Panel Grant</option>
                <option>Loft Insulation</option>
                <option>Heating Controls</option>
                <option>Full Gas Central Heating</option>
                <option>Cavity Wall Insulation</option>
              </select>
            </div>

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

            <div>
              <label className="block text-sm font-medium">Benefits</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                value={benefit}
                onChange={(e) => setBenefit(e.target.value)}
              >
                <option>None</option>
                <option>Income based Jobseeker's Allowance (JSA)</option>
                <option>Household income less than 31,000£</option>
                <option>Income Related Employee and Support Allowance (ESA)</option>
                <option>Pension Credit</option>
                <option>Income Support</option>
                <option>Tax Credits (Child Tax Credits and Working Tax Credits)</option>
                <option>Universal Credit</option>
                <option>NHS Referral</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Comments</label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-sky-700 text-white px-8 py-2 rounded-full hover:bg-sky-800 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )}
</AnimatePresence>


    </div>
  );
}

export default App;
