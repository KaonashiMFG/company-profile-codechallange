import Image from "next/image";

export function ServicesHomePage() {
  return (
    <>
      <section className="flex flex-col justify-center gap-10 bg-accent text-center text-primary">
        <div className="px-5 py-10 md:p-20">
          {/* Section Title */}
          <h1 className="w-full bg-secondary p-3 text-2xl md:p-5 md:text-5xl text-primary">
            Our Services
          </h1>

          {/* Services Grid */}
          <div className="grid gap-5 md:grid-cols-2 md:gap-10 justify-center mt-6">
            {/* JLPT Service Card */}
            <div className="relative h-64 w-full transform overflow-hidden bg-white shadow-lg transition-transform md:h-72">
              <Image
                className="h-full w-full object-cover"
                src={"/usaha/JLPT.png"}
                alt="jlpt"
                width={500}
                height={300}
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-4 text-white transition-opacity duration-300">
                <h3 className="text-center text-lg font-bold md:text-3xl">
                  JLPT: N5-N2
                </h3>
                <p className="mt-2 text-center text-xs md:text-base">
                  Persiapan untuk pembelajaran tes JLPT
                </p>
              </div>
            </div>

            {/* Regular Service Card */}
            <div className="relative h-64 w-full transform overflow-hidden bg-white shadow-lg transition-transform md:h-72">
              <Image
                className="h-full w-full object-cover"
                src={"/usaha/umur.webp"}
                alt="umur"
                width={500}
                height={300}
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-4 text-white transition-opacity duration-300">
                <h3 className="text-center text-lg font-bold md:text-3xl">
                  Regular
                </h3>
                <p className="mt-2 text-center text-xs md:text-base">
                  Berbagai macam program kami dari yang untuk anak sampai untuk
                  dewasa/bisnis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
