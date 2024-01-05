import React from 'react';

function Contact() {
  return (
    <div className="mt-10" id="Contact">
      <div className="xl:-ml-[50px]">
        <h1 className="font-bold ubuntu ubuntu-bold text-3xl">Contact</h1>
      </div>
      <div className=" p-5 rounded-md grid grid-cols-1 sm:grid-cols-2 items-center justify-center">
        <div>
          <img src="/contacthero.png" alt="" />
        </div>
        <div className="text-md p-10 border h-full flex flex-col gap-5">
          <h1 className="font-semibold">
            {' '}
            <span className="font-bold ubuntu ubuntu-bold text-lg">
              Email:
            </span>{' '}
            yviamatak123@gmail.com
          </h1>
          <h1>
            <span className="font-bold ubuntu ubuntu-bold text-lg">
              Resume:
            </span>
            <a
              href="https://resume.io/r/GJQH0lUuf"
              target="_blank"
              rel="noreferrer"
              className="ml-5 text-blue-800 underline font-bold"
            >
              Here
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
