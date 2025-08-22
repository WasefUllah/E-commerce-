export default function Hero() {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 py-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
              SuperProduct 3000
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Experience smooth rides and ultimate comfort with our latest cycle. Engineered with a lightweight frame, durable tires, and ergonomic design, this bicycle is perfect for daily commutes, weekend adventures, or fitness rides. Enjoy reliable performance, sleek style, and a ride that adapts to your pace.
            </p>

            {/* <div className="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a
                href="#buy"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Buy Now
              </a>
              <a
                href="#learn"
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
              >
                Learn More
              </a>
            </div> */}
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="/img.jpg"
              alt="Product"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
