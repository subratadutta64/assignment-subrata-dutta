import React, { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-blue-600 text-9xl">404</h1>

      <h6 className="mb-2 text-2xl font-bold text-center text-gray-400 md:text-3xl">
        <span className="text-red-500">Oops!</span> Not found
      </h6>

      <p className="mb-8 text-center text-gray-500 md:text-lg">
        The pokemon you’re looking for doesn’t exist.
      </p>
    </div>
  );
};

export { NotFound };
