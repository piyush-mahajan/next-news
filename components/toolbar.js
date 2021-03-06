import React from "react";
import Link from "next/link";

export const Toolbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7 10h-3v-1h3v1zm6 2h3v-1h-3v1zm3-5h-12v1h12v-1zm0 6h-12v1h12v-1zm0 2h-12v1h12v-1zm0-6h-3v1h3v-1zm-4 3v-3h-4v3h4zm-1.055-7.312l.238 1.284h.5l.501-1.941h-.482l-.249 1.32-.238-1.32h-.492l-.27 1.345-.24-1.345h-.505l.46 1.941h.506l.271-1.284zm-6.945 7.312h3v-1h-3v1zm18.44 4.277c.183-2.314-.433-2.54-3.288-5.322.171 1.223.528 3.397.911 5.001.089.382-.416.621-.586.215-.204-.495-.535-2.602-.82-4.72-.154-1.134-1.661-.995-1.657.177.005 1.822.003 3.341 0 6.041-.003 2.303 1.046 2.348 1.819 4.931.132.444.246.927.339 1.399l3.842-1.339c-1.339-2.621-.693-4.689-.56-6.383zm-6.428 1.723h-13.012v-16h14v7.894c.646-.342 1.348-.274 1.877.101l.123-.018v-8.477c0-.828-.672-1.5-1.5-1.5h-15c-.828 0-1.5.671-1.5 1.5v17c0 .829.672 1.5 1.5 1.5h13.974c-.245-.515-.425-1.124-.462-2zm-3.166-12.396c-.149 0-.324-.043-.466-.116l-.024-.013-.098.398.015.008c.102.058.318.119.547.119.581 0 .788-.328.788-.61 0-.272-.161-.458-.507-.586-.254-.096-.338-.145-.338-.247 0-.098.1-.161.254-.161.136 0 .266.03.388.088l.023.011.107-.39-.015-.007c-.145-.065-.311-.098-.495-.098-.442 0-.739.239-.739.593 0 .262.181.458.535.581.227.081.304.144.304.247 0 .117-.102.183-.279.183zm-5.325.368h.485v-1.941h-.438v1.189l-.64-1.189h-.536v1.941h.438v-1.327l.691 1.327zm2.028-1.545v-.396h-1.215v1.941h1.255v-.396h-.78v-.406h.698v-.393h-.698v-.35h.74z" />
            </svg>
            <span className="ml-3 text-xl">Lit-News</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 cursor-pointer hover:text-gray-900">Home</a>
            </Link>
            <Link href="/feed/1">
              <a className="mr-5 cursor-pointer hover:text-gray-900">Feed</a>
            </Link>
            <Link href="/about">
              <a className="mr-5 cursor-pointer hover:text-gray-900">About</a>
            </Link>
            <Link href="https://www.linkedin.com/in/piyush-mahajan-146860229/">
              <a className="mr-5 cursor-pointer hover:text-gray-900">
                Linkedin
              </a>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};
