import Logo from "../Nav/Logo"
import Link from "next/link"
function Footer() {
  return (
    <footer className="h-1/5 w-full mx-auto mb-0">
      <div className="flex lg:flex-col flex-row bg-emerald-400 lg:justify-between justify-center">
        <div className="sb_footer section_padding p-10">
          <div className="flex justify-between items-start flex-row flex-wrap w-full text-left mb-8">
            <div className="w-40 m-4 flex justify-start flex-col text-white">
              <Link href="/">
                <button className="font-bold text-4xl tracking-wide md:hover:tracking-widest transform-all ease-in-out duration-500 font-mono text-black z-50">
                  <span className="text-white mb-5">Dz</span>Express
                  <span className="text-white mb-5">.</span>
                </button>
              </Link>
              <p className="mt-10"></p>
            </div>

            {/* Created by */}

            <div className="w-30 m-1 flex justify-start flex-col text-white">
              <p className="font-semibold tracking-wider py-1 my-1">
                CONTACT US
              </p>

              <Link
                href="https://github.com/Emybel"
                className="flex flex-row items-center mt-3  text-gray-50 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4 mx-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="sr-only">GitHub account</span>
                <p>Imane BELAID</p>
              </Link>

              <Link
                href="https://github.com/merzoukfatima"
                className="flex flex-row items-center  text-gray-50 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4 mx-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="sr-only">GitHub account</span>
                <p className="py-1">Fatima MERZOUK</p>
              </Link>

              <Link
                href="https://github.com/DigitalDeveloperAM"
                className="flex flex-row items-center  text-gray-50 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4 mx-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="sr-only">GitHub account</span>
                <p className="py-1">Achraf MEHANNECHE</p>
              </Link>

              <Link
                href="https://github.com/HamidAhmidat"
                className="flex flex-row items-center  text-gray-50 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4 mx-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="sr-only">GitHub account</span>
                <p className="py-1">Abdelhamid AHMIDAT</p>
              </Link>

              <Link
                href="https://github.com/samiraTbl"
                className="flex flex-row items-center  text-gray-50 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4 mx-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="sr-only">GitHub account</span>
                <p>Samira TOUBAL SEGHIR</p>
              </Link>
            </div>

            {/* Our Products */}

            <div className="w-40 m-2 flex justify-start flex-col text-white uppercase">
              <p className="font-semibold tracking-wider py-1">OUR PRODUCTS</p>

              <Link href="#" className="py-2 mt-3 text-gray-50 no-underline">
                <p>Men Clothing</p>
              </Link>
              <Link href="#" className="py-2 text-gray-50 no-underline">
                <p>Women Clothing</p>
              </Link>
              <Link href="#" className="py-2 text-gray-50 no-underline">
                <p>Jewelry</p>
              </Link>
              <Link href="#" className="py-2 text-gray-50 no-underline">
                <p>Electronics</p>
              </Link>
            </div>
            <div className="w-40 m-4 flex justify-start flex-col text-white">
              <p className="font-semibold">Re:Coded Bootcamp</p>
            </div>
          </div>

          <hr className="!text-[white] w-full py-2"></hr>

          <div className="block text-sm text-gray-500 sm:text-center">
            <div className="sb_footer-copyright text-lg tracking-wider font- text-[13px] leading-[15px] text-[rgb(255,_255,_255)] font-semibold">
              <p>@{new Date().getFullYear()} Dz-Express. All right reserved.</p>
            </div>
            <div className="sb_footer-below-links flex flex-row justify-between mx-4 text-[13px] leading-[15px] ml-8 text-[white] font-semibold"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
