import { useEffect, useState } from "react";

const Visas = () => {
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    const getVisas = async () => {
      const url = "https://desolate-sands-70745.herokuapp.com/visa-types";

      const response = await fetch(url);
      const result = await response.json();

      setVisas(result);
    };
    getVisas();
  }, []);

  return (
    <>
      <h1 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
        Visa types
      </h1>
      <p className="text-center text-lg text-gray-700 mt-2 px-6">
        Argo has experience with these visa types.
      </p>
      <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>
      <div className="p-20 flex flex-wrap gap-2 justify-center ">
        {visas.map((visa) => (
          <div
            className="bg-white p-6 rounded-lg shadow-lg sm:w-auto md:w-4/5 lg:w-2/5 xl:w-2/5"
            key={visa.id}
          >
            <h2 className="text-2xl font-bold mb-2 text-yellow-600">
              {visa.type}
            </h2>
            <p className="text-gray-700">{visa.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Visas;
