import Image from "next/image";
import culture from "@/data/culture.json";

export function Culture() {
  return (
    <section>
      <h1 className="mx-4 text-center flex justify-center bg-secondary p-5 text-xl text-primary mb-5 md:mx-20 md:text-3xl">
        Nilai-Nilai Kami
      </h1>
      <div className="mx-4 mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mx-20 md:mb-20">
        {culture.map((item, index) => (
          <div key={index} className="relative h-40 w-full sm:h-48 md:h-60">
            <Image
              src={item.image}
              fill
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black bg-opacity-70 p-2 text-center text-white md:gap-5 md:p-5">
              <h1 className="rounded-2xl bg-accent px-4 py-1 text-sm md:text-base lg:text-lg">
                {item.title}
              </h1>
              <p className="text-xs md:text-sm lg:text-base">{item.jargon}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
