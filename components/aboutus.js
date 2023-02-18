import img from "../public/img/BetterLogo.png";

export default function AboutUs() {
    return (
        <section className="bg-white dark:bg-gray-900">
             <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0"> 
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    What we do
                    </h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                    We help those when it comes to anything requiring code. Whether that&apos;s a new website, 
                    event automation, data analysis, or something even more niche. But we&apos;re not for profit. 
                    Instead, we choose to work with those in the community who give back to the community. Think teacher, 
                    fire fighter, law enforcement, doctor, nurse, charity or similar. We don&apos;t want to simply give, 
                    but give back to those who give. 
                    </p>

                    <a
                    href="#"
                    className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    role="alert">
                    <span className="text-md bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                        Looking to partner up? 
                    </span>
                    <span className="text-sm font-medium">
                        Let us know!
                    </span>
                    <svg
                        className="ml-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"></path>
                    </svg>
                    </a>
                </div>
                <div>
                    <img
                    className="w-full"
                    // src={/* current issue with importing images */}
                    alt="dashboard image"
                    />
                </div>
            </div>
        </section>
        
    );
  }
  