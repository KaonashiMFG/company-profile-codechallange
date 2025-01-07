import { getEntries } from "@/helpers/contentful-data";
import Image from "next/image";

interface AllTeamsTypes {
  fields: {
    name: string;
    role: string;
    description: string;
    contact: string;
    avatar: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

export async function AllTeams() {
  const coreTeams = (await getEntries({
    content_type: "teams",
  })) as unknown as AllTeamsTypes[];

  console.log(coreTeams);

  return (
    <>
      <section className="px-5 py-20 md:px-20">
        <h1 className="flex items-center justify-center bg-secondary p-5 text-2xl text-primary md:text-3xl">
          Our Core Teams
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {coreTeams?.map((teams, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 rounded-md border-2 border-secondary p-5 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative mx-auto h-20 w-20">
                <Image
                  src={`https:${teams?.fields?.avatar?.fields.file.url}`}
                  fill
                  alt="c-suites"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="text-center">
                <h1 className="text-xl font-semibold md:text-2xl">
                  {teams.fields.name}
                </h1>
                <span className="block text-sm text-secondary md:text-lg">
                  {teams.fields.role}
                </span>
              </div>
              <p className="text-justify text-sm md:text-base">
                {teams.fields.description}
              </p>
              <p>Kontak: {teams.fields.contact}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
