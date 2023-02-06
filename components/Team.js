export default function Teams() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container xl:w-full w-11/12 mx-auto pt-16 overflow-y-hidden">
        <div className="xl:flex lg:flex md:flex sm:flex flex-wrap justify-around pt-20">
          <div className="xl:w-4/12 lg:w-2/4 md:w-2/5 sm:w-2/5 max-w-sm mb-8 border-b border-gray-300 dark:border-gray-700 pb-6">
            <div className="w-full rounded h-96">
              <img
                src="https://media.licdn.com/dms/image/D5603AQGSTpmMGJhOEQ/profile-displayphoto-shrink_400_400/0/1672102549279?e=1681344000&v=beta&t=BHumS0u5TlFm2IfSYedpQn2eGKroJlmmvz-OTvHbMbU"
                alt="Display picture of bek"
                role="img"
                className="object-cover h-full w-full overflow-hidden rounded shadow"
              />
            </div>
            <div className="flex w-full items-center justify-between pt-6 pb-1">
              <p className="text-xl font-normal text-gray-800 dark:text-white ">
                Bek Omonkulov
              </p>
              <div className="flex justify-center">
                <a
                  aria-label="Open github"
                  role="link"
                  href="javascript:void(0)"
                  className="mx-2">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/white-bg-with-description-svg1.svg"
                    alt="github"
                  />
                </a>
                <a
                  aria-label="Open twitter"
                  role="link"
                  href="javascript:void(0)"
                  className="mx-2">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/white-bg-with-description-svg2.svg"
                    alt="twiter"
                  />
                </a>
                <a
                  aria-label="Open instagram"
                  role="link"
                  href="javascript:void(0)"
                  className="mx-2">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/white-bg-with-description-svg3.svg"
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
            <p className="text-base text-gray-600 dark:text-gray-200 pb-3">
              Developer
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">
              Developer
            </p>
          </div>
          <div className="xl:w-4/12 lg:w-2/4 md:w-2/5 sm:w-2/5 mx-4 max-w-sm mb-8 border-b border-gray-300 dark:border-gray-700 pb-6">
            <div className="w-full rounded h-96">
              <img
                src="https://media.licdn.com/dms/image/D4E03AQGwmmXiMjiTEw/profile-displayphoto-shrink_400_400/0/1674488452051?e=1681344000&v=beta&t=Qgz112zXhMMBLuYQhnj81C31P4bixsxKu5LkRj0Qmvw"
                alt="Display picture of Derek"
                role="img"
                className="object-cover h-full w-full overflow-hidden rounded shadow"
              />
            </div>
            <div className="flex w-full items-center justify-between pt-6 pb-1">
              <p className="text-xl font-normal text-gray-800 dark:text-white ">
                Derek Armfield
              </p>
              <div className="flex justify-center">
                <a
                  aria-label="Open github"
                  role="link"
                  href="javascript:void(0)"
                  className="mx-2">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/white-bg-with-description-svg1.svg"
                    alt="github"
                  />
                </a>
                <a
                  aria-label="Open twitter"
                  role="link"
                  href="javascript:void(0)"
                  className="mx-2">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/white-bg-with-description-svg2.svg"
                    alt="twitter"
                  />
                </a>
                <a
                  aria-label="Open instagram"
                  role="link"
                  href="javascript:void(0)"
                  className="mx-2">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/white-bg-with-description-svg3.svg"
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
            <p className="text-base text-gray-600 dark:text-gray-200 pb-3">
              developer
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">
              developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
