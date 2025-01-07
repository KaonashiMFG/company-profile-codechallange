import Image from "next/image";
import Link from "next/link";
import socials from "../data/sns.json";

export function Footer() {
  const hrefLoc =
    "https://www.google.com/maps?ll=-6.289997,106.705713&z=15&t=m&hl=ja&gl=US&mapclient=embed&cid=13953820244704740429";

  return (
    <div className="grid grid-cols-1 gap-10 bg-accent text-primary md:grid-cols-3 md:gap-0">
      {/* LOCATION */}
      <div className="flex flex-col gap-3 p-5 md:p-10">
        <p className="mb-3 border-b-2 pb-2 text-center text-2xl">Location</p>
        <p className="text-center">Jl. Krakatau III No.12 Blok A4</p>
        <Link href={hrefLoc}>
          <div className="relative h-40 w-full md:h-52">
            <Image
              src="/location.png"
              fill
              alt="RBJ location"
              className="object-cover"
            />
          </div>
        </Link>
      </div>

      {/* SNS */}
      <div className="flex flex-col gap-3 p-5 md:p-10">
        <p className="mb-3 border-b-2 pb-2 text-center text-2xl">SNS</p>
        <div className="flex flex-col items-center gap-5">
          {socials.map((items, index) => (
            <Link key={index} href={items.link} className="w-full">
              <div className="flex items-center justify-center gap-5">
                <div className="relative h-8 w-8">
                  <Image src={items.logo} fill alt="SNS Logo" />
                </div>
                <p>{items.socials}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* LINKS */}
      <div className="flex flex-col gap-3 bg-secondary p-5 md:p-10">
        <p className="mb-3 border-b-2 pb-2 text-center text-2xl">Page Links</p>
        <div className="flex flex-col items-center gap-5">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contacts">Contacts</Link>
        </div>
      </div>
    </div>
  );
}
