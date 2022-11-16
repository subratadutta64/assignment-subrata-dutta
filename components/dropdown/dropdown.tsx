import React, { FC, useState } from 'react';
import { v4 as uuid } from 'uuid';

interface DropdownProps {
  menuTitle: string;
  dropdownList: string[];
  onClick: (newText: string) => void;
}

const Dropdown: FC<DropdownProps> = ({
  menuTitle,
  dropdownList = [],
  onClick,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const expandedContent = (
    <div className="relative mt-3 w-full bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
      <ul
        className="absolute text-sm text-gray-700 dark:text-gray-200 bg-gray-700 space-y-0"
        aria-labelledby="dropdownDefault"
        onClick={(e) => {
          onClick((e.target as HTMLElement).innerText);
          setIsExpanded(!isExpanded);
        }}
      >
        {dropdownList.map((listItem) => {
          return (
            <li key={uuid()}>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {listItem}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
  return (
    <div className="relative max-w-lg">
      <button
        className="mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-6 mr-2 bg-blue-900"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        {menuTitle}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isExpanded ? 'M4.5 15.75l7.5-7.5 7.5 7.5' : 'M19 9l-7 7-7-7'}
          ></path>
        </svg>
      </button>
      {isExpanded && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(55 65 81)"
            viewBox="0 6 24 24"
            strokeWidth="0"
            stroke="bg-gray-700"
            className="absolute w-8 h-8 my-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
          {expandedContent}
        </>
      )}
    </div>
  );
};

export { Dropdown, type DropdownProps };
