const FormSection = () => {
    return (
      <section id="form" className="bg-white py-10 px-4">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Check Your Eligibility</h3>
          <form className="grid gap-4">
            <input type="text" placeholder="Full Name" className="border p-2 rounded" />
            <input type="email" placeholder="Email" className="border p-2 rounded" />
            <input type="tel" placeholder="Phone Number" className="border p-2 rounded" />
            <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default FormSection;
  