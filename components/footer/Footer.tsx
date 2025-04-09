'use client';
import { useTheme } from "next-themes"
import Link from "next/link"
import MaxWidthWrapper from "../MaxWidthWrapper"
const Footer: React.FC = () => {
      const { theme } = useTheme()
      return (
            <>

                  {/* <footer className="bg-[#f2f2f2] py-8 text-[#616161] dark:border-t dark:border-t-gray-500 dark:bg-transparent">
                        <MaxWidthWrapper className="z-50 divide-y">
                              <div className="container mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0">
                                    <div className="lg:w-1/3">
                                          <Link
                                                rel="noopener noreferrer"
                                                href="#"
                                                className="flex justify-center space-x-3 lg:justify-start"
                                          >
                                                <div>
                                                      <img className="h-auto w-48"
                                                            src={theme === "dark" ? "/logo_dark.png" : "/icons/logo.svg"}
                                                            alt="logo" />
                                                </div>
                                          </Link>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 lg:w-2/3">
                                          <div className="space-y-3">
                                                <h3 className="uppercase">Useful Links</h3>
                                                <ul className="space-y-1">
                                                      <li>
                                                            <Link rel="noopener noreferrer" href="#">
                                                                  Features
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link rel="noopener noreferrer" href="#">
                                                                  Integrations
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link rel="noopener noreferrer" href="#">
                                                                  Pricing
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link rel="noopener noreferrer" href="#">
                                                                  FAQ
                                                            </Link>
                                                      </li>
                                                </ul>
                                          </div>
                                          <div className="space-y-3">
                                                <h3 className="uppercase">More Links</h3>
                                                <ul className="space-y-1">
                                                      <li>
                                                            <Link rel="noopener noreferrer" href="#">
                                                                  Privacy
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link rel="noopener noreferrer" href="#">
                                                                  Terms of Service
                                                            </Link>
                                                      </li>
                                                </ul>
                                          </div>
                                          <div className="space-y-3">
                                                <h3>API Resources</h3>
                                                <ul className="space-y-1">
                                                      <li>
                                                            <Link rel="noopener noreferrer" href="#">
                                                                  Public API
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link rel="noopener noreferrer" href="#">
                                                                  Documentation
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link rel="noopener noreferrer" href="#">
                                                                  Guides
                                                            </Link>
                                                      </li>
                                                </ul>
                                          </div>
                                          <div className="space-y-3">
                                                <div className="uppercase">Follow us on:</div>
                                                <div className="flex justify-start space-x-3">
                                                      <Link
                                                            rel="noopener noreferrer"
                                                            href="https://www.facebook.com/kalbelajobs/"
                                                            title="Facebook"
                                                            className="flex items-center p-1"
                                                      >
                                                            <img
                                                                  className="size-5"
                                                                  src="/icons/facebook.svg"
                                                                  alt="facebook icon"
                                                            />
                                                      </Link>
                                                      <Link
                                                            rel="noopener noreferrer"
                                                            href="#"
                                                            title="Twitter"
                                                            className="flex items-center p-1"
                                                      >
                                                            <img
                                                                  className="size-5"
                                                                  src="/icons/twitter.svg"
                                                                  alt="twitter icon"
                                                            />
                                                      </Link>
                                                      <Link
                                                            rel="noopener noreferrer"
                                                            href="https://www.instagram.com/kalbelajobs/"
                                                            title="Instagram"
                                                            className="flex items-center p-1"
                                                      >
                                                            <img
                                                                  className="size-5"
                                                                  src="/icons/instagram.svg"
                                                                  alt="instagram icon"
                                                            />
                                                      </Link>
                                                      <Link
                                                            rel="noopener noreferrer"
                                                            href="https://www.linkedin.com/company/kalbelajobs/"
                                                            title="Linkedin"
                                                            className="flex items-center p-1"
                                                      >
                                                            <img
                                                                  className="size-5"
                                                                  src="/icons/linkedin.svg"
                                                                  alt="linkedin icon"
                                                            />
                                                      </Link>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </MaxWidthWrapper>
                  </footer> */}

                  <section
                        style={{
                              backgroundImage: `linear-gradient(190deg, #191e30e8, #010102),url("https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
                        }}
                        className="py-10 sm:pt-16 lg:pt-24">
                        <MaxWidthWrapper>
                              <div className="">
                                    <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
                                          <div>
                                                <p className="text-base text-gray-500">ABOUT KALBELA JOBS</p>
                                                <ul className="mt-8 space-y-4">
                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  About{" "}
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Features{" "}
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  FAQ{" "}
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <Link
                                                                  href="/privacy"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Privacy{" "}
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link
                                                                  href="/terms_of_service"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Terms of Service{" "}
                                                            </Link>
                                                      </li>
                                                </ul>
                                          </div>

                                          <div>
                                                <p className="text-base text-gray-500">SERVICES</p>
                                                <ul className="mt-8 space-y-4">
                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Job Posting{" "}
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Resume Delivery{" "}
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  HR Consultancy{" "}
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  HR Process Outsourcing{" "}
                                                            </a>
                                                      </li>

                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Training & Workshop{" "}
                                                            </a>
                                                      </li>

                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Articles{" "}
                                                            </a>
                                                      </li>
                                                </ul>
                                          </div>
                                          <div>
                                                <p className="text-base text-gray-500">JOBS BY SECTION</p>
                                                <ul className="mt-8 space-y-4">
                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Local Jobs{" "}
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Govt Jobs{" "}
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Newspaper Jobs{" "}
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Internship{" "}
                                                            </a>
                                                      </li>

                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Skilled Worker Jobs{" "}
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Semi/Unskilled worker jobs{" "}
                                                            </a>
                                                      </li>
                                                </ul>
                                          </div>


                                          <div>
                                                <p className="text-base text-gray-500">EMPLOYER</p>

                                                <ul className="mt-8 space-y-4">
                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Post Jobs{" "}
                                                            </a>
                                                      </li>

                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Resume Delivery{" "}
                                                            </a>
                                                      </li>

                                                      <li>
                                                            <a
                                                                  href="#"
                                                                  title=""
                                                                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                                            >
                                                                  {" "}
                                                                  Advance with us{" "}
                                                            </a>
                                                      </li>
                                                </ul>

                                          </div>
                                    </div>
                                    <hr className="md:mt-16 mt-10 md:mb-10 mb-4 border-gray-800" />
                                    <div className="flex flex-wrap items-center justify-between">
                                          <img className="h-auto md:w-32 w-20"
                                                src={"/logo_dark.png"}
                                                alt="logo" />
                                          <ul className="flex items-center space-x-3 md:order-3">
                                                <li>
                                                      <a
                                                            href="#"
                                                            title=""
                                                            className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-primary_blue hover:bg-primary_blue hover:border-primary_blue focus:border-primary_blue"
                                                      >
                                                            <svg
                                                                  className="w-4 h-4"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  viewBox="0 0 24 24"
                                                                  fill="currentColor"
                                                            >
                                                                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                                                            </svg>
                                                      </a>
                                                </li>
                                                <li>
                                                      <a
                                                            href="#"
                                                            title=""
                                                            className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-primary_blue hover:bg-primary_blue hover:border-primary_blue focus:border-primary_blue"
                                                      >
                                                            <svg
                                                                  className="w-4 h-4"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  viewBox="0 0 24 24"
                                                                  fill="currentColor"
                                                            >
                                                                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                                                            </svg>
                                                      </a>
                                                </li>

                                                <li>
                                                      <a
                                                            href="#"
                                                            title=""
                                                            className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-primary_blue hover:bg-primary_blue hover:border-primary_blue focus:border-primary_blue"
                                                      >
                                                            <svg
                                                                  className="w-4 h-4"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  viewBox="0 0 24 24"
                                                                  fill="currentColor"
                                                            >
                                                                  <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                                                  />
                                                            </svg>
                                                      </a>
                                                </li>
                                          </ul>
                                          <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
                                                © Copyright {new Date().getFullYear()}, All Rights Reserved by Kalbela
                                          </p>
                                    </div>
                              </div>
                        </MaxWidthWrapper>
                  </section>

            </>
      )
}

export default Footer
