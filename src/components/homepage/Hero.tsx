import Image from "next/image";

export function Hero() {
  const heroBg =
    "https://mlyhahhwafqm.i.optimole.com/cb:5ksX~4cf46/w:auto/h:auto/q:75/f:best/ig:avif/https://interacnetwork.com/the-content/cream/wp-content/uploads/2019/01/hiroyoshi-urushima-vfRkE_9wuPo-unsplash.jpg";
  return (
    <>
      <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden ">
        <div className="relative w-full h-screen bg-white shadow-lg -z-10">
          <Image
            src={heroBg}
            fill
            alt="heroBg"
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-55 text-white p-4 gap-10 ">
            <h1 className="text-5xl">Selamat datang di RBJ!</h1>
            <p className="text-3xl">RBJ 日本語教室へようこそ！</p>
            <p className="">
              Tempat belajar bahasa Jepang terbaik di online dengan standardisasi
              kurikulum di Jepang
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
