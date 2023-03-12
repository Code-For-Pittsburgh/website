import data from "../data/partnerData";

export default function PartnersDisplay() {
    return (
        <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
            <h2 className=" mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading font-heading tracking-px-n leading-none">Our Partners</h2>
            <p className="mb-16 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">Check out who we&apos;ve worked with, what we&apos;ve done, and what they&apos;ve done.</p>
            <div className="md:max-w-6xl mx-auto">
            <div className="flex flex-wrap -m-3.5 mb-10">
                {data.map((item, index) => (
                    <div key={index} className="w-full md:w-1/3 p-3.5">
                    <a href={item.url}>
                        <div className="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
                            <img className="absolute left-0 top-0" src="flaro-assets/images/career/gradient.svg" alt="" />
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className="mb-24 flex-1">
                                    <h3 className="mb-2 text-lg font-bold font-heading leading-snug">{item.name}</h3>
                                    <h3 className="mb-2 text-gray-500 text-md font-bold font-heading leading-snug">{item.date}</h3>
                                    <p className="text-sm text-gray-500 font-medium">
                                         {item.description}
                                        <span className="text-blue-500" href={item.url}> {'Check it out at ' + item.url2}</span>
                                    </p>
                                </div>
                                <div className="flex-1">
                                <img src="flaro-assets/logos/brands/brand-medium.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </a>
                    </div>
                ))}

            </div>
            {/* <a className="flex justify-center items-center text-center font-semibold text-indigo-600 hover:text-indigo-700 leading-normal" href="#">
                <span className="mr-2.5">See all 8,849 jobs</span>
                <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.83333 3.33337L14.5 8.00004M14.5 8.00004L9.83333 12.6667M14.5 8.00004L2.5 8.00004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a> */}
            </div>
        </div>
        </section>
    );
}