import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/image/pic3.png"
                  width={300}
                  height={300}
                  alt="project-image"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Creating projects
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Creating
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    One resource mentions front-end developer resume examples...
                  </p>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://simple-digital-clock-kappa.vercel.app/"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/image/pic2 - Copy.png"
                  width={300}
                  height={300}
                  alt="project-image"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    SMS Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    SMS
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is the project which I&apos;ve created for those who own a catering business...
                  </p>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://vercel.com/ambreen140187s-projects/hackathon-mailston-5/4FbFaEQwByHsRofwTZhmEeJYtReh/"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/image/pic1.png"
                  width={300}
                  height={300}
                  alt="project-image"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    SMS Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    SMS
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is the project which I&apos;ve created for those who own a catering business...
                  </p>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://vercel.com/ambreen140187s-projects/milseton-editable/FwFnXr8ATUvFeDctz9MUfVUAEBpQ/"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
