export function History() {
  return (
    <>
      <section className="px-5 py-10 md:px-20 md:py-20">
        <h1 className="flex justify-center bg-secondary p-5 text-2xl text-primary md:text-3xl">
          Sejarah Kami
        </h1>

        <div className="mt-5 flex flex-col gap-5">
          {/* Awal */}
          <div className="historyCard">
            <h2 className="text-center text-xl md:text-2xl">Awal Berdiri: 2015</h2>
            <div className="mx-auto h-1 w-16 bg-primary"></div>
            <p className="text-justify">
              RBJ (Rumah Bahasa Jepang) didirikan di Bintaro, Indonesia, oleh
              NURAINI W. ISHIBASHI, seorang pendidik bahasa yang memiliki visi untuk
              mempermudah masyarakat Indonesia dalam mempelajari bahasa Jepang.
              Akademi ini dimulai sebagai bisnis keluarga kecil dengan dua ruang
              kelas dan lima staf yang berdedikasi.
            </p>
            <p className="text-justify">
              Mulai menawarkan kursus persiapan JLPT (N5 hingga N3) untuk
              membantu siswa mendapatkan sertifikasi resmi bahasa Jepang. Dengan
              pendekatan yang personal dan ukuran kelas kecil, RBJ dengan cepat
              menarik minat masyarakat sekitar.
            </p>
          </div>

          {/* Tengah */}
          <div className="historyCard">
            <h2 className="text-center text-xl md:text-2xl">
              Perkembangan dan Pertumbuhan: 2020
            </h2>
            <div className="mx-auto h-1 w-16 bg-primary"></div>
            <p className="text-justify">
              Memperluas kurikulum hingga mencakup persiapan JLPT level lanjutan
              (N2 dan N1), menjadikan RBJ salah satu akademi di Bintaro yang
              menawarkan pembelajaran bahasa Jepang secara lengkap.
            </p>
            <p className="text-justify">
              Meluncurkan kelas bahasa Jepang bisnis yang dirancang untuk
              profesional lokal dan ekspatriat, dengan fokus pada komunikasi
              profesional, etiket, dan pemahaman budaya kerja Jepang.
            </p>
          </div>

          {/* Akhir */}
          <div className="historyCard">
            <h2 className="text-center text-xl md:text-2xl">Saat Ini: 2024</h2>
            <div className="mx-auto h-1 w-16 bg-primary"></div>
            <p className="text-justify">
              RBJ (Rumah Bahasa Jepang) beroperasi dengan tim kecil yang terdiri
              dari lima orang staf yang berdedikasi, menawarkan kursus bahasa
              Jepang untuk semua tingkat: mulai dari pemula hingga lanjutan
              (JLPT N5 hingga N1), kelas bisnis, dan program untuk anak-anak.
            </p>
            <p className="text-justify">
              Dengan pendekatan pembelajaran yang personal dan fokus pada
              kebutuhan siswa, RBJ telah membantu ratusan siswa mencapai tujuan
              belajar bahasa Jepang mereka. Meski sederhana, RBJ terus berupaya
              menjadi pilihan utama bagi masyarakat Bintaro yang ingin belajar
              bahasa Jepang.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}