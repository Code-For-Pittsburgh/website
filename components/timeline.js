export default function VerticalTimeline() {
  const data = [
    {
      date: "March 1st, 1692",
      title:
        "Tituba, Sarah Osborne and Sarah Good are taken for questioning",
      description:
        "Simon Bradstreet becomes governor of Massachusetts Bay Colony. Bridget Bishop of Salem Village is accused of witchcraft, but the Rev. John Hale testifies for her and the charges are dropped."
    },
    {
      date: "March 2nd, 1692",
      title: "Sarah Good is jailed at the Ipswich jail",
      description:
        "Sarah Osborne and Tituba are questioned further. Tituba adds more details to her confession, and Sarah Osborne maintains her innocence."
    },
    {
      date: "March 10th, 1692",
      title:
        "Mary Warren, a servant in the home of Elizabeth and John Proctor, begins having fits like the other girls. ",
      description:
        " She tells John Proctor she had seen the specter of Giles Corey, a local and prosperous farmer, but he dismisses her report."
    }
  ];

  return (
    <>
      <div className="px-5 mt-28">
        <div className="text-center">
          <h2 className="font-semibold text-3xl">Our timeline</h2>
          <p className="max-w-md mx-auto mt-2 text-gray-500">
            Salem Witch trails fr😈
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
