export default function Cta() {
  return (
    <div>
      <div class="container p-2 mx-auto xl:px-0">
        <div class="relative flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto overflow-hidden text-white bg-indigo-600 bg-gradient-to-r from-black to-black px-7 py-7 lg:px-12 lg:py-5 lg:flex-nowrap rounded-xl">
          <div class="relative z-0 flex-grow text-center lg:text-left">
            <h2 class="text-3xl font-medium lg:text-2xl">
              Ready to try-out our product?
            </h2>
            <p class="mt-2 text-white text-opacity-80 lg:text-xl">
              100% Satisfaction guaranteed.
            </p>
          </div>
          <div class="relative flex-shrink-0 w-full text-center lg:w-auto">
            <a
              href="https://www.linkedin.com/company/code-for-pittsburgh/"
              target="_blank"
              rel="noopener"
              class="inline-block py-3 mx-auto font-medium text-center text-black bg-white rounded-md sm:text-lg px-7 lg:px-10 lg:py-5">
              Contact us today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
