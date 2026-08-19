export default function Home() {
  return (
    <main className="max-w-[1000px] mx-auto px-8 pt-8 pb-28 text-[#FEFBE3] leading-relaxed">

      {/* Image and Body */}
      <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 items-start">

        {/* Profile Picture */}
        <div>
         <img
  src="/profile.jpg"
  alt="Anhui Huang"
  className="w-[90%] h-auto md:h-[440px] md:object-cover md:object-top border-2"
/>
        </div>

        {/* Body */}
        <div className="text-[17px] leading-7 text-justify">

          <div className="space-y-6">

            <p>
              I am a PhD candidate in Philosophy at UC Berkeley, advised by John
              MacFarlane and Seth Yalcin. I work on epistemology and philosophy of
              language, focusing on psychological certainty, assertion, and inquiry.
              I am also interested in fiction, imagination, lying, and explanation.
            </p>

            <p>
              I did my undergraduate in Philosophy at Williams College. My thesis
              was advised by Bojana Mladenovic.
            </p>

            <p className="mt-10">
              Here is my{" "}
              <a
                href="/cv.pdf"
                download
                className="underline text-[#BFC5B9]"
              >
                CV
              </a>
              .
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}