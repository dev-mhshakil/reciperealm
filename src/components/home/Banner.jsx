const Banner = () => {
  return (
    <section className="flex w-3/4 mx-auto">
      <div className="container justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between w-1/2">
        <div className=" justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Unleash Your
            <span className="dark:text-violet-600">
              {" "}
              Inner <span className="text-red-500">Chef</span>, <br />
            </span>
            one recipe at a time.
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Where Every Bite Tells a Story.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded text-red-500"
            >
              Recipes
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded"
            >
              See More
            </a>
          </div>
        </div>
        {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="assets/svg/Business_SVG.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div> */}
      </div>
      <div>
        <img
          className="h-5/6 w-full sm:h-full sm:w-auto sm:mx-auto"
          src="https://i.ibb.co/sm7cdN8/Fresh-beef-burger-isolated-6-removebg-preview.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;
