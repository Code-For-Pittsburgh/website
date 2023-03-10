import data from "../data/timelinedata";

export default function VerticalTimeline() {
  return (
    <div id='timeline' className="bg-white py-24 dark:bg-gray-900">
      <div className="px-5">
        <div className="text-center">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our timeline
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            How we started and where we&apos;re going
          </p>
        </div>
        <div className="relative max-w-xl mx-auto my-16 lg:max-w-3xl before:absolute before:top-0 before:w-0.5 before:h-full before:left-2 before:bg-gray-800 lg:before:left-1/2">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 mb-12 lg:flex even:flex-row-reverse">
              <div className="absolute left-0 w-1 h-1 bg-white border-black dark:bg-slate-900 lg:left-1/2 lg:-translate-x-px translate-x-2"></div>
              <p
                className={`text-sm font-medium text-primary-500 uppercase lg:w-1/2 lg:mt-px  lg:pr-8 ${
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
                <h4 className="mt-4 text-l text-gray-700 dark:text-white lg:mt-0">
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
    </div>
  );
}
