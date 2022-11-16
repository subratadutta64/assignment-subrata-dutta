import React, { FC } from 'react';

interface LinkProps {
  text: string;
  link: string;
  onClick?: () => void;
}

const Link: FC<LinkProps> = ({ text, link, onClick }) => {
  return (
    <p className="my-4 text-center text-gray-500 dark:text-gray-400">
      {text}&nbsp;
      <a
        href="#"
        className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
        onClick={onClick}
      >
        {link}
        <svg
          aria-hidden="true"
          className="ml-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </p>
  );
};

export { Link, type LinkProps };
