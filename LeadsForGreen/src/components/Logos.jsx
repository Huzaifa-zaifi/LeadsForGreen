const Logos = () => {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">

            <div className="bg-white p-4 rounded shadow text-center">
              <img src="/Images/l1.png" alt="Partner 1" className="h-16 mx-auto" />
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <img src="/Images/l2.png" alt="Partner 2" className="h-16 mx-auto" />
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <img src="/Images/l3.png" alt="Partner 3" className="h-16 mx-auto" />
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <img src="/Images/l4.jpg" alt="Partner 4" className="h-32 mx-auto" />
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <img src="/Images/l5.png" alt="Partner 4" className="h-16 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Logos;
  