export default function Teaching() {
  return (
    <main className="max-w-[720px] mx-auto px-4 pt-8 pb-28 text-[#FEFBE3] leading-relaxed">
      <h1 className="text-3xl font-medium tracking-tight mb-12">
        Teaching Experience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 items-start">

        {/* LEFT COLUMN */}
        <div>
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4">UC Berkeley</h2>

            <h3 className="italic mb-2">Primary Instructor</h3>

            <div className="mb-5 leading-tight">
              <p>Nature of Mind</p>
              <p className="text-[#BFC5B9]">Summer 2024</p>
            </div>

            <h3 className="italic mb-2">Associate Instructor</h3>

            <div className="space-y-2 leading-tight">
              <div>
                <p>Existentialism in Film and Literature</p>
                <p className="text-[#BFC5B9]">Fall 2026</p>
              </div>

              <div>
                <p>Probability and Induction</p>
                <p className="text-[#BFC5B9]">Spring 2026</p>
              </div>

              <div>
                <p>Philosophical Methods</p>
                <p className="text-[#BFC5B9]">Spring 2025</p>
              </div>

              <div>
                <p>Philosophical Methods</p>
                <p className="text-[#BFC5B9]">Spring 2024</p>
              </div>

              <div>
                <p>Philosophy of Language</p>
                <p className="text-[#BFC5B9]">Fall 2023</p>
              </div>

              <div>
                <p>Introduction to Logic</p>
                <p className="text-[#BFC5B9]">Fall 2022</p>
              </div>

              <div>
                <p>Introduction to Logic</p>
                <p className="text-[#BFC5B9]">Summer 2022</p>
              </div>

              <div>
                <p>Philosophical Methods</p>
                <p className="text-[#BFC5B9]">Spring 2022</p>
              </div>

              <div>
                <p>Nature of Mind</p>
                <p className="text-[#BFC5B9]">Fall 2021</p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="pt-1">
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4">Williams College</h2>

            <h3 className="italic mb-2">Teaching Assistant</h3>

            <div className="space-y-2 leading-tight">
              <div>
                <p>Personal Identity</p>
                <p className="text-[#BFC5B9]">Fall 2019</p>
              </div>

              <div>
                <p>History of Modern Philosophy</p>
                <p className="text-[#BFC5B9]">Spring 2018</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">
              Sinoway International Summer School, Shanghai
            </h2>

            <h3 className="italic mb-2">Teaching Assistant</h3>

            <div className="space-y-2 leading-tight">
              <div>
                <p>Introduction to Philosophy</p>
                <p className="text-[#BFC5B9]">Summer 2017</p>
              </div>

              <div>
                <p>Classical Western Philosophy</p>
                <p className="text-[#BFC5B9]">Summer 2017</p>
              </div>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}