import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Initial Meeting",
    description:
      "During our first meeting, we'll talk about what you do, what you need and how long you can expect things to take.",
    icon: CloudArrowUpIcon
  },
  {
    name: "Development",
    description:
      "It's time for you to take it easy. We'll be busy building your website, carefully designing every feature so it's perfect for you. ",
    icon: LockClosedIcon
  },
  {
    name: "Showcase",
    description:
      "We'll meet for a second time and show you what we've made. Here, we'll take feedback and do a round of revisions with any new features.",
    icon: ServerIcon
  }, 
  {
    name: "Production",
    description:
      "After we make everything to your liking, we'll push to production. Take a look at our partners for what we've done before, but we can make everything to your liking!",
    icon: ServerIcon
  }
];

export default function AboutUs() {
  return (
    <div id='' className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Build fast
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better setup
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Need a custom website, but don&apos;t know where to start? We&apos;re here to help. Take a look at our onboarding process. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map(feature => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src='img/taylorallderdiceLightTheme.png'
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
