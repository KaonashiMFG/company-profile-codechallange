import Image from "next/image";

export function Partners() {
  return (
    <>
      <section className="m-20 flex flex-col gap-16 text-center items-center ">
        <h1 className=" bg-secondary p-5 text-5xl text-primary w-full">Partner Kami</h1>
        <div className=" flex gap-40 max-xl:flex-col max-xl:gap-10">
            <div className="relative w-32 h-32">
            <Image src="/partners/aiwa.jpeg" fill alt="Aiwa Language Institute"/>
            </div>
            <div className="relative w-32 h-32">
            <Image src="/partners/oja.jpg" fill alt="Osaka Japanese Language Academy"/>
            </div>
            <div className="relative w-32 h-32">
            <Image src="/partners/akamokai.jpg" fill alt="Akmamokai Japanese Language School"/>
            </div>
        </div>
      </section>
    </>
  );
}
