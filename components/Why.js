import React from 'react';

function Why() {
  return (
    <div className="mt-10" id="Whyweb">
      <div className="xl:-ml-[50px]">
        <h1 className="font-bold ubuntu ubuntu-bold text-3xl mb-6">
          Why Web Development?{' '}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5">
        <div>
          <img src="/whyhero.png" alt="" />
        </div>
        <div className="mt-5 sm:mt-0">
          <h2 className="ubuntu ubuntu-regular leading-[45px]">
            My programming jorney start off when I was in my last year of high
            school, I do not know what I will be expecting after high school.
            But there is one thing for sure that I will pursue it is computer
            programming. I am currently a College Student, major in Computer
            Science, it was not easy but not so hard. Have Fun!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Why;
