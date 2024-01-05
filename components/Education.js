import React from 'react';

function Education() {
  return (
    <div className="mt-10" id="Education">
      <div className="xl:-ml-[50px]">
        <h1 className="font-bold ubuntu ubuntu-bold text-3xl">Education</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1  justify-center mt-10 ">
        <div className=" border border-gray-300/90 rounded-md p-6 h-fit ">
          <ol className="relative border-l border-gray-400 dark:border-gray-700 pt-5 pb-2">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                December 2020
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Learn HTML CSS and Javascript
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Learn Javascript such as the concepts of DOM and Event (Browser
                Object), Data Structure (Object and Array), understand
                Object-oriented Programming (OOP), Async/Await Promise Chain etc
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                June 2021
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Learn ReactJS + Redux
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Learn Reactjs such as Functional Component, JSX Syntax, React
                Component State and Props, Conditional Rendering, React Hooks
                (useState, useEffect, useRef etc), Redux State Management, Send
                Requests (axios) to APIs and Work on the Response Object, Use
                Router to build Sigle Page Application
              </p>
            </li>
            <li className="ml-4 mb-10">
              <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                September 2021
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Learn NextJS + TailwindCSS
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Expand Knowledge onto Nextjs, which is the Reactjs Framework.
                Benefits of using Nextjs: Pre-rendering pages, File-based
                Routing, and able to build backend (api) within one application
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                September 2021 - Current
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Lifelong Learner
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                The jorney does not stop here currently learning design, explore
                the open source packages, Nodejs and Mongoose, Security and
                Privacy etc...
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div className="xl:-ml-[50px] mt-10">
        <h1 className="font-bold ubuntu ubuntu-bold text-3xl">Project</h1>
      </div>
      <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
        <div className="mx-auto mt-5">
          <a
            href="https://netflix-fun-clone.vercel.app/"
            className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/netflix.png" alt="" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
              Netflix App
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Using firebase for storing users information. And implementing
              stripe for payment process.
            </p>
          </a>
        </div>
        <div className="mx-auto mt-5  ">
          <a
            href="https://airnb-fun-project.vercel.app/"
            className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  transition-all duration-200 hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/airbnb.png" alt="" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Airbnb App
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Learn TailwindCSS, Data Fetching, implement the data picker range,
              fast loading the page.
            </p>
          </a>
        </div>
        <div className="mx-auto mt-5 ">
          <a
            href="https://buggy-chat-app.vercel.app/"
            className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  transition-all duration-200 transform hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/chatapp.png" alt="" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Chat App
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Learn firebase by storing users and chat information, Tailwind CSS
              for styling, realtime implementation.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
