import Image from "next/image";
import test from "../public/img/isotest.png";

export default function SideView() {
  return (
    <div
      className={`grid min-h-300 md:grid-cols-2 max-w-screen-lg mx-auto mt-10 px-5 gap-5`}>
      <div className="flex items-center flex-wrap">
        <div className="max-w-sm">
          <span className="text-violet-500 bg-violet-500/10 px-3 py-1 rounded-full text-xs uppercase font-medium tracking-wider">
            Why us?
          </span>
          <h2 className="font-semibold text-2xl mt-3">
            Leave your web problems to us.
          </h2>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a
            className={`inline-flex items-center gap-2 border-b text-violet-500 text-sm mt-3 hover:border-violet-500`}
            href="/">
            <span>Learn more</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="min-w-100 min-h-200">
        <Image src={test}></Image>
      </div>
    </div>
  );
}
