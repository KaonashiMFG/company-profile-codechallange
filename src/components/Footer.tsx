import Image from "next/image";
import Link from "next/link";
import socials from "../data/sns.json";

export function Footer() {
  const hrefLoc =
    "https://www.google.com/maps?ll=-6.289997,106.705713&z=15&t=m&hl=ja&gl=US&mapclient=embed&cid=13953820244704740429";

  return (
    <>
      <div className="grid grid-cols-3 justify-center gap-10 bg-accent text-center text-primary">
        {/* LOCATION */}
        <div className="flex flex-col gap-3 p-10">
          <p className="mb-3 text-2xl border-b-4 p-2">Location</p>
          <p>Jl. Krakatau III No.12 Blok A4</p>
          <Link href={`${hrefLoc}`}>
            <div className="relative h-52 w-full">
              <Image src={"/location.png"} fill alt="RBJ location" className="object-cover"/>
            </div>
          </Link>
        </div>
        {/* SNS */}
        <div className="flex flex-col gap-3 p-10">
          <p className="mb-3 text-2xl border-b-4 p-2">SNS</p>
          {socials.map((items, index) => (
            <Link key={index} href={items.link}>
              <div className="grid grid-cols-2 items-center justify-center gap-5">
                <div className="flex justify-end">
                  <div className="relative h-10 w-10">
                    <Image src={items.logo} fill alt="SNS Logo" />
                  </div>
                </div>
                <p className="flex justify-start">{items.socials}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* LINKS */}
        <div className="flex flex-col gap-3 bg-secondary p-10">
          <p className="mb-3  text-2xl border-b-4 p-2">Page Links</p>
          <Link href={"/about"}>About</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/gallery"}>Gallery</Link>
          <Link href={"/contacts"}>Contacts</Link>
        </div>
      </div>
    </>
  );
}
