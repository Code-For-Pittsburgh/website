import data from "../data/partnerData";

export default function Hero() {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                    Meet our Partners
                </h1>
            </div>

            <div className="relative max-w-xl mx-auto my-16 lg:max-w-3xl lg:before:left-1/2">
                {data.map((item, index) => (
                    <div
                    key={index}
                    className="relative pl-8 mb-12 lg:flex even:flex-row-reverse">
                        <div className="absolute left-0 w-1 h-1 bg-white border-black lg:left-1/2 lg:-translate-x-px translate-x-2"></div>
                            
                            <h4 className="mt-4 text-l text-white lg:mt-0">
                                {item.name}
                            </h4>

                            <p
                                className={`text-sm font-medium text-primary-500 uppercase lg:w-1/2 lg:mt-px  lg:pr-8 ${
                                index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                                }`}>
                                {item.date}
                            </p>

                            <img
                            className="w-3/12"
                            src={item.src}
                            alt="dashboard image"
                            />
                            <div
                            className={`lg:w-1/2 lg:-mt-1  ${
                            index % 2 === 0
                                ? "lg:text-left lg:ml-5 "
                                : "lg:text-right lg:pr-10"
                            }`}>

                                {item.description && (
                                    <p className="mt-2 leading-7 text-gray-400">
                                        {item.description}
                                    </p>
                                )}
                        
                            </div>
                        </div>
                ))}
            </div>
        </section> 
    )
}