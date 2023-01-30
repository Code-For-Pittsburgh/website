import { Disclosure } from "@headlessui/react";
import data from "./data/faqData";

export default function Faq() {
  return (
    <>
      <div className="py-5">
        <div className="text-center">
          <h2 className="font-semibold text-3xl">Our timeline</h2>
          <p className="max-w-md mx-auto mt-2 text-gray-500">Faq</p>
        </div>
        <div className="container p-0 mx-auto xl:px-0">
          <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
            <div>
              {data.map((item, index) => (
                <div className="mb-5" key={item.id}>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className="flex items-center justify-between w-full px-4 py-4 text-base text-left text-gray-800 rounded-lg lg:text-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75"
                          type="button">
                          <span>{item.question}</span>
                          <svg
                            className={`w-5 h-5 text-indigo-500 ${
                              !open ? "transform rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                              clipRule="evenodd"></path>
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
                          {item.answer}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
