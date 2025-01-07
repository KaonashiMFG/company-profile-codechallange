"use client";

import jlpt from "@/data/forServicePage/jlpt.json"
import regular from "@/data/forServicePage/regular.json"

export default function ServicesPage() {
  return (
    <>
      <section className="mx-4 my-10 md:m-20">
        <h1 className="text-4xl md:text-5xl text-center text-primary bg-secondary rounded-lg p-5 mb-10">
          Our Programs
        </h1>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl text-center bg-accent text-white rounded-lg p-4 mb-10">
            Persiapan JLPT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jlpt.map((program, index) => (
              <div key={index} className="bg-secondary rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-2">{program.level}</h3>
                <h4 className="text-xl text-accent mb-4">{program.title}</h4>
                <p className="text-lg font-semibold mb-4">{program.price}</p>
                <p className="mb-4 text-primary">{program.description}</p>
                <div className="mb-4">
                  <h5 className="font-bold text-primary mb-2">Curriculum Highlights:</h5>
                  <ul className="list-disc list-inside text-primary">
                    {program.curriculum.map((item, idx) => (
                      <li key={idx} className="mb-1">{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-accent font-semibold">{program.duration}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl text-center bg-accent text-white rounded-lg p-4 mb-10">
            Regular
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regular.map((program, index) => (
              <div key={index} className="bg-secondary rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-2">{program.title}</h3>
                <p className="text-lg font-semibold mb-4">{program.price}</p>
                <p className="mb-4 text-primary">{program.description}</p>
                <div className="mb-4">
                  <h5 className="font-bold text-primary mb-2">Program Features:</h5>
                  <ul className="list-disc list-inside text-primary">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-accent font-semibold">{program.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
