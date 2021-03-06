import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

import { Toolbar } from "../components/toolbar";

export default function Home() {
  return (
    <>
      <Toolbar />
      <Head>
        <title>Lit-News</title>
        <meta name="description" content="Your daily dose of NEWS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-white body-font bg-gradient-to-r from-cyan-500 to-blue-900">
        <div className="container px-5 py-10 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center w-full"
                src="/art.png"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-yellow-400 text-lg">
                    Piyush Mahajan
                  </h2>
                  <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    <ul> Web-Devloper,</ul>
                    <ul>Graphic Designer,</ul>
                    <ul>Programmer</ul>
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  is an Indian English-language daily news app and digital news
                  media owned and managed by The Piyush Mahajan.To provide high
                  quality yet value for services to enable our clients to reach
                  their full potential online by reading News.
                  <br />
                  <br />
                  <i>Self-reliance is the motto - Lit-news</i>
                </p>
                <a className="text-yellow-500 inline-flex items-center">
                  Thanks For Reading
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
