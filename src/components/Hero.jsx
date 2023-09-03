import React from 'react';
import MyImage from '../../src/images/pp2.jpg';

const Hero = () => {
    return (
        <div className="mx-20 pt-40">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-20 justify-between">
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-yellow-400 uppercase md:text-4xl sm:text-2xl font-bold md:py-6">
                        Hello! This is
                    </h3>
                    <h1 className="text-blue-900 uppercase md:text-6xl sm:text-3xl font-bold py-4">
                        PRASHMASA RIJAL
                    </h1>
                    <p className="text-justify md:text-xl sm:text-l font-normal py-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis minus unde debitis,
                        quidem aliquam dolore vitae facere exercitationem consequuntur praesentium eaque amet aliquid
                        consectetur laborum. Placeat facilis minima eveniet.
                    </p>
                    <button className="bg-blue-900  hover:bg-blue-600  w-[200px] rounded-md font-medium my-10 py-2 text-white">
                        Hire Me
                    </button>
                </div>
                <div className="md:w-1/2">
                    <img src={MyImage} alt="My Picture" className="max-w-full" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
