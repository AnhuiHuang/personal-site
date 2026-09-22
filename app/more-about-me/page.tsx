export default function MoreAboutMe() {
  return (
    <main className="max-w-5xl mx-auto px-5 sm:px-8 pt-8 pb-8 text-[#FEFBEF] text-base sm:text-lg leading-normal text-justify">

      <p className="text-justify">
        When I am not doing philosophy, I am probably climbing, knitting,
        hanging out with Tofu, watching movies, playing games with my friends,
        or trying out a new restaurant.
      </p>

<section className="mt-14">
  <div className="flex flex-col sm:flex-row gap-8">

    <div className="w-full sm:w-1/2">
      <img
        src="/tofu.jpg"
        alt="Tofu"
        className="w-full border border-[#E3DBC8]"
      />

      <p className="mt-4 text-justify">
        This is Tofu in the arms of Mona Lisa.
      </p>
    </div>

    <div className="w-full sm:w-1/2">
      <div className="sm:h-[523.5px] sm:overflow-hidden border border-[#E3DBC8]">
        <img
          src="/sweater.jpg"
          alt="Sweater"
          className="w-full sm:h-full sm:object-cover sm:object-top"
        />
      </div>

      <p className="mt-4 text-justify">
        This is the first sweater I knitted.
      </p>
    </div>

  </div>
</section>

    </main>
  );
}