import Link from "next/link";

export function Overview() {
  return (
    <>
      <section className="m-20 flex flex-col gap-10">
        <p className="text-3xl font-bold">RBJ(Rumah Bahasa Jepang) adalah</p>
        <p className="text-2xl">
           Lembaga kursus bahasa Jepang dengan kurikulum standarisasi Jepang oleh
          Kazuaki Ishibashi dan tim guru lainnya. Kami menyediakan kelas yang
          beragam mulai dari kelas anak dengan cara belajar yang menyenangkan
          sampai dengan kelas intensif untuk karyawan dan kelas khusus untuk
          persiapan mengikuti ujian JLPT.
        </p>
        <Link href={"/about"} className="text-2xl rounded-full p-1 border-blue-700 border-2 w-40 flex items-center justify-center bg-blue-300">Read More</Link>
      </section>
    </>
  );
}
