import React from "react";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { Toolbar } from "../../components/toolbar";

export const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  return (
    <>
      <Toolbar />
      <section className="text-white body-font bg-gradient-to-r from-cyan-500 to-blue-900">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-yellow-400">
                What's Going On India!!!
              </h1>
              <div className="h-1 w-20 bg-yellow-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed ">
              provide a great sense of educational value. It carries information
              about politics, economy, entertainment, sports, business,
              industry, trade and commerce. With this habit, it will not only
              enhance your knowledge about general information but it will
              likewise improve your language skills and vocabulary. Many people
              have habits of reading daily news from <strong>Lit-News</strong>{" "}
              that their days seem incomplete without taking hold of early
              morning Visit.
            </p>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
            <div className="bg-gray-100 p-6 rounded-lg divide-y divide-dashed">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="tracking-widest text-gray-500 text-xs font-medium title-font font-sans"
                >
                  <Link className="cursor-pointer" href={article.url}>
                    <h1 className="text-lg text-blue-900 text-2xl hover:bg-blue-900 hover:text-white font-medium title-font mb-4 cursor-pointer hover:underline">
                      {article.title}
                    </h1>
                  </Link>
                  {/* <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/723x403"
                alt="content"
              /> */}
                  {/* <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                San Francisco
              </h2> */}
                  <p className="leading-relaxed text-base mb-4">
                    {article.description}
                  </p>
                  {!!article.urlToImage && (
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={article.urlToImage}
                      alt="content"
                    />
                  )}
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <div className="w-96 m-auto text-center">
        {articles.map((article, index) => (
          <div key={index} className="">
            <Link className="cursor-pointer" href={article.url}>
              <h1 className="text-2xl cursor-pointer mb-3">{article.title}</h1>
            </Link>
            <p className=" mb-3">{article.description}</p>
            {!!article.urlToImage && <img src={article.urlToImage} />}
          </div>
        ))}
      </div> */}
      <div className="grid grid-flow-col auto-cols-max items-center justify-center">
        <div className="p-2 w-full">
          <button
            onClick={() => {
              if (pageNumber > 1) {
                router
                  .push(`/feed/${pageNumber - 1}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
            className={
              pageNumber === 1
                ? "hidden"
                : "flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            }
          >
            Previous Page
          </button>
        </div>
        <div>#{pageNumber}</div>
        <div className="p-2 w-full">
          <button
            onClick={() => {
              if (pageNumber < 5) {
                router
                  .push(`/feed/${pageNumber + 1}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
            className={
              pageNumber === 5
                ? "hidden"
                : "flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            }
          >
            Next Page
          </button>
        </div>
        {/* <div
          onClick={() => {
            if (pageNumber > 1) {
              router
                .push(`/feed/${pageNumber - 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 1 ? "hidden" : "text-2xl "}
        >
          Previous Page
        </div>
        <div>#{pageNumber}</div>
        <div
          onClick={() => {
            if (pageNumber < 5) {
              router
                .push(`/feed/${pageNumber + 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 5 ? "hidden" : "text-2xl"}
        >
          Next Page
        </div> */}
      </div>
    </>
  );
};
export const getServerSideProps = async (paegContext) => {
  const pageNumber = paegContext.query.slug;
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
  const apijson = await apiResponse.json();
  const { articles } = apijson;
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
