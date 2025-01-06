import Image from "next/image";
import testimonials from "../../data/testimonials.json";

export default function Testimonials() {
  return (
    <>
      <div className="my-20 flex flex-col justify-center text-center">
        {/* Responsive header */}
        <h1 className="text-3xl text-header sm:text-4xl lg:text-5xl">Testimoni</h1>

        {/* Flex container for testimonials */}
        <div className="mt-10 flex flex-wrap justify-center gap-10">
          {testimonials.map((el, index) => (
            <div
              key={index}
              className="flex max-w-64 flex-col items-center gap-7 rounded-lg border-2 border-secondary p-10 shadow-2xl sm:w-[90%] md:w-[70%] lg:w-1/3"
            >
              {/* Profile Picture */}
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-[3px] border-black">
                <Image src={el.img} fill alt={el.people} />
              </div>
              {/* Person and Title */}
              <div>
                <h1 className="text-2xl text-accent">{el.people}</h1>
                <h1 className="mt-1 text-[13px]">{el.title}</h1>
              </div>
              {/* Comments */}
              <p className="text-sm text-center">{el.comments}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
