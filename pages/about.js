import React from "react";
import { Toolbar } from "../components/toolbar";

const About = () => {
  return (
    <>
      <Toolbar />
      <div className="bg-gradient-to-r from-blue-900 to-cyan-500  text-white w-full h-full">
        <section className="body-font">
          <div className="container px-5 py-10 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 px-4 mb-6">
                <h1 className="title-font font-medium text-xl mb-2 text-yellow-400">
                  HI....
                </h1>
                <div className="leading-relaxed">
                  My name is Piyush,this project is made by next.js which is
                  javaScript framework and tailwind css and this web application
                  use api functionalities, for more you can connect me on
                  Linkedin.
                  <br />I am a
                </div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-yellow-400">
                  1
                </h2>
                <p className="leading-relaxed">Web Devlpoer</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-yellow-400">
                  2
                </h2>
                <p className="leading-relaxed">Graphic Designer</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-yellow-400">
                  3
                </h2>
                <p className="leading-relaxed">Blogger</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-yellow-400">
                  4
                </h2>
                <p className="leading-relaxed">Programmer</p>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img
                className="object-cover object-center w-full h-full rounded-full"
                src="/piyush.png"
                alt="stats"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
