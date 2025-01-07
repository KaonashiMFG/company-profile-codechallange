export function Kelebihan() {
  return (
    <>
      <section className="m-4 md:m-10 lg:m-20 flex flex-col gap-5 md:gap-10 text-center">
        <h1 className="rounded-lg bg-secondary p-3 md:p-5 text-3xl md:text-4xl lg:text-5xl text-primary">
          Keunggulan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
          <div className="rounded-xl bg-secondary p-4 md:p-5 text-primary">
            <p className="mb-3 rounded-full bg-accent text-xl md:text-2xl text-primary">
              1
            </p>
            <p className="text-sm md:text-base">
              Guru-guru berpengalaman dan profesional, termasuk guru native
              Jepang, yang akan membimbing Anda dengan penuh dedikasi dan
              keramahan.
            </p>
          </div>

          <div className="rounded-xl bg-secondary p-4 md:p-5 text-primary">
            <p className="mb-3 rounded-full bg-accent text-xl md:text-2xl text-primary">
              2
            </p>
            <p className="text-sm md:text-base">
              Suasana belajar yang nyaman dan interaktif, layaknya di rumah
              sendiri, sehingga Anda dapat belajar dengan lebih efektif dan
              menyenangkan.
            </p>
          </div>

          <div className="rounded-xl bg-secondary p-4 md:p-5 text-primary">
            <p className="mb-3 rounded-full bg-accent text-xl md:text-2xl text-primary">
              3
            </p>
            <p className="text-sm md:text-base">
              Kurikulum yang fleksibel dan disesuaikan dengan kebutuhan Anda,
              memungkinkan Anda untuk belajar sesuai dengan kecepatan dan tujuan
              Anda.
            </p>
          </div>
          
          <div className="rounded-xl bg-secondary p-4 md:p-5 text-primary">
            <p className="mb-3 rounded-full bg-accent text-xl md:text-2xl text-primary">
              4
            </p>
            <p className="text-sm md:text-base">
              Metode pembelajaran yang modern dan inovatif, menggunakan berbagai
              media dan teknologi untuk membantu Anda memahami bahasa Jepang
              dengan lebih mudah.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}