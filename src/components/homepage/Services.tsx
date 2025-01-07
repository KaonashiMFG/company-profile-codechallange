import Image from "next/image";

export function Services() {
  return (
    <>
      <section className="flex flex-col justify-center gap-10 bg-accent text-center text-primary">
        <div className="p-20">
          <h1 className="w-full bg-secondary p-5 text-5xl text-primary">
            Our Services
          </h1>
          <div className="grid grid-cols-2 justify-center">
            <div className="relative h-72 w-full transform overflow-hidden bg-white shadow-lg transition-transform">
              <Image
                className="h-full w-full object-cover"
                src={"/usaha/JLPT.png"}
                alt="jlpt"
                width={500}
                height={300}
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-4 text-white transition-opacity duration-300">
                <h3 className="text-center text-3xl font-bold">JLPT: N5-N2</h3>
                <p className="mt-2 text-center text-sm md:text-base">
                  Persiapan untuk pembelajaran tes JLPT
                </p>
              </div>
            </div>
            <div className="relative h-72 w-full transform overflow-hidden bg-white shadow-lg transition-transform">
              <Image
                className="h-full w-full object-cover"
                src={"/usaha/umur.webp"}
                alt="umur"
                width={500}
                height={300}
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-4 text-white transition-opacity duration-300">
                <h3 className="text-center text-3xl font-bold">Regular</h3>
                <p className="mt-2 text-center text-sm md:text-base">
                  Berbagai macam prgram kami dari yang untuk anak sampai untuk
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
