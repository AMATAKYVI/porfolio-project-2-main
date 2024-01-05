import React, { useState } from 'react';
import { Swiper as X, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

function ProjectSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loopFive, setLoopFive] = useState([0, 1, 2, 3, 4]);

  const modifiedClass = `hidden`;
  const [hiddenStateOne, setHiddenStateOne] = useState(true);
  const [hiddenStateTwo, setHiddenStateTwo] = useState(false);
  const [hiddenStateThree, setHiddenStateThree] = useState(false);
  const [hiddenStateFour, setHiddenStateFour] = useState(false);
  const [hiddenStateFive, setHiddenStateFive] = useState(false);
  const slideRight = () => {
    setCurrentSlide(++currentSlide);
    console.log(currentSlide);
    if (currentSlide == 0) {
      setHiddenStateOne(false);
    }
    if (currentSlide == 1) {
      setHiddenStateTwo(true);
    }
    if (currentSlide == 2) {
      setHiddenStateThree(true);
    }
    if (currentSlide == 3) {
      setHiddenStateFour(true);
    }
    if (currentSlide == 4) {
      setHiddenStateFive(true);
    }
    if (currentSlide > 4) {
      setCurrentSlide(0);
    }
  };
  const slideLeft = () => {
    setCurrentSlide(--currentSlide);

    if (currentSlide == 4) {
      setHiddenStateOne(false);
    }
    if (currentSlide == 3) {
      setHiddenStateTwo(true);
    }
    if (currentSlide == 2) {
      setHiddenStateThree(true);
    }
    if (currentSlide == 1) {
      setHiddenStateFour(true);
    }
    if (currentSlide == 0) {
      setHiddenStateFive(true);
    }
    if (currentSlide < 0) {
      setCurrentSlide(4);
    }
  };
  return (
    <div className="mt-10" id="Certifications">
      <div className="xl:-ml-[50px]">
        <h1 className="font-bold ubuntu ubuntu-bold text-3xl mb-6">
          My Certifications
        </h1>
      </div>
      <div>
        <p className="ubuntu ubuntu-regular leading-[45px] mt-10">
          Here are my certifications of completion for all the courses and
          classes that I had taken from the past.
        </p>
      </div>
      <div className="grid grid-cols-1 mt-5">
        <div id="default-carousel" data-carousel="slide" className="relative">
          <div className="overflow-hidden relative h-[400px] rounded-lg sm:h-[500px] xl:h-[600px] 2xl:h-[650px]">
            <div
              className={`${
                currentSlide != 0
                  ? `${modifiedClass} -translate-x-{100%}`
                  : 'translate-x-0'
              }   duration-200 ease-in-out absolute inset-0 transition-all  transform scale-up-center`}
            >
              <img
                src="/angelaintro.jpg"
                className="block absolute object-contain h-full w-full top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            <div
              className={` ${
                currentSlide != 1
                  ? `${modifiedClass} -translate-x-{200%}`
                  : 'translate-x-0'
              } duration-200 ease-in-out absolute inset-0 transition-all transform scale-up-center`}
            >
              <img
                src="/stephenreact.jpg"
                className="block absolute object-contain h-full w-full top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            <div
              className={` ${
                currentSlide != 2
                  ? `${modifiedClass} -translate-x-{300%}`
                  : 'translate-x-0'
              }  duration-200 ease-in-out absolute inset-0 transition-all transform scale-up-center`}
            >
              <img
                src="/javascriptjonas.jpg"
                className="block absolute object-contain h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            <div
              className={` ${
                currentSlide != 3
                  ? `${modifiedClass} -translate-x-{400%}`
                  : 'translate-x-0'
              } duration-200 ease-in-out absolute inset-0 transition-all  transform scale-up-center`}
            >
              <img
                src="/maxinext.jpg"
                className="block absolute object-contain h-full top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            <div
              className={` ${
                currentSlide != 4
                  ? `${modifiedClass} -translate-x-{500%}`
                  : 'translate-x-0'
              } duration-200 ease-in-out absolute inset-0 transition-all transform scale-up-center`}
            >
              <img
                src="/jonasnodejs.jpg"
                className="block absolute object-contain h-full top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            <div
              className={` ${
                currentSlide != 4
                  ? `${modifiedClass} -translate-x-{500%}`
                  : 'translate-x-0'
              } duration-200 ease-in-out absolute inset-0 transition-all transform scale-up-center`}
            >
              <img
                src="/jonasscss.jpg"
                className="block absolute object-contain h-full top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>{' '}
            <div
              className={` ${
                currentSlide != 4
                  ? `${modifiedClass} -translate-x-{500%}`
                  : 'translate-x-0'
              } duration-200 ease-in-out absolute inset-0 transition-all transform scale-up-center`}
            >
              <img
                src="/maxireact.jpg"
                className="block absolute object-contain h-full top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
          </div>

          <div className="flex absolute bottom-5 left-1/2 space-x-3 -translate-x-1/2 bg-white/30 px-2 py-1 rounded-full">
            <button
              type="button"
              className={`w-3 h-3  rounded-full  ${
                currentSlide == 0
                  ? 'bg-white dark:bg-white'
                  : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
              }`}
              onClick={() => setCurrentSlide(0)}
            ></button>
            <button
              type="button"
              className={`w-3 h-3 rounded-full   ${
                currentSlide == 1
                  ? 'dark:bg-white'
                  : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
              }`}
              onClick={() => setCurrentSlide(1)}
            ></button>
            <button
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide == 2
                  ? 'dark:bg-white'
                  : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
              }`}
              onClick={() => setCurrentSlide(2)}
            ></button>
            <button
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide == 3
                  ? 'dark:bg-white'
                  : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
              }`}
              onClick={() => setCurrentSlide(3)}
            ></button>
            <button
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide == 4
                  ? 'dark:bg-white'
                  : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
              }`}
              onClick={() => setCurrentSlide(4)}
            ></button>
          </div>

          <button
            type="button"
            className="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={() => slideLeft()}
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-purple-900/30 dark:bg-black group-hover:bg-purple-200/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none  ">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white hover:text-purple-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={() => slideRight()}
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-purple-900/30 dark:bg-black group-hover:bg-purple-200/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-white group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white hover:text-purple-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectSwiper;
