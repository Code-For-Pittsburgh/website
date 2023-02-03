import data from "./data/timelinedata";

export default function VerticalTimeline() {
  return (
    <>
      <div className="px-5 mt-28">
        <div className="text-center">
          <h2 className="font-semibold text-3xl">Our Story</h2>
          <p className="max-w-md mx-auto mt-2 text-gray-500">
            How we started and where we&apos;re going
          </p>
        </div>
        <div className="relative max-w-xl mx-auto my-16 lg:max-w-3xl before:absolute before:top-0 before:w-0.5 before:h-full before:left-2 before:bg-gray-400 lg:before:left-1/2">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 mb-12 lg:flex even:flex-row-reverse">
              <div className="absolute left-0 w-1 h-1 bg-white border-black dark:bg-slate-900 lg:left-1/2 lg:-translate-x-px translate-x-2"></div>
              <p
                className={`text-sm tracking-wide text-indigo-400 uppercase lg:w-1/2 lg:mt-px  lg:pr-8 ${
                  index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                }`}>
                {item.date}
              </p>
              <div
                className={`lg:w-1/2 lg:-mt-1  ${
                  index % 2 === 0
                    ? "lg:text-left lg:ml-5 "
                    : "lg:text-right lg:pr-10"
                }`}>
                <h4 className="mt-4 text-l text-black lg:mt-0">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="mt-2 leading-7 text-gray-400">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
