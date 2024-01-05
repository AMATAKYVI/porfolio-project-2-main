import React from 'react';
import { SiDiscord, SiLinkedin, SiGithub } from 'react-icons/si';
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 items-center ">
        <div className="flex justify-center  flex-col text-left ubuntu items-center">
          <div>
            <div className="font-medium text-2xl flex flex-col gap-5">
              <h1 className="animate__animated animate__fadeInLeftBig">
                Hi, My name is Amatak
              </h1>
              <h1 className="ubuntu-medium flex gap-2 items-center">
                <span> I am</span>
                <span className="primarycolor">
                  <Typewriter
                    options={{
                      strings: ['Web Dev', 'Web Developer'],
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter.pauseFor(2000).deleteAll().start();
                    }}
                  />
                </span>

                {/* <Typing>
                  {' '}
                  <span className="primarycolor"> Web Developer</span>
                </Typing> */}
              </h1>
            </div>

            <div className="mt-9 flex gap-5">
              <SiLinkedin className="w-6 h-6 cursor-pointer hover:text-blue-900 transition-all duration-100 hover:p-[1px] " />
              <SiGithub className="w-6 h-6 cursor-pointer hover:text-blue-900 transition-all duration-100 hover:p-[1px]" />
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-0 animate__animated animate__fadeInRight">
          <img src="/hero2.png" alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
