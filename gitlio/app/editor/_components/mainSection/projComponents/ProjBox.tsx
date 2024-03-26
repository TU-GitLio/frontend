"use client";
import React, { useState } from "react";

interface Data {
  url: string;
  title: string;
  intro: string;
  images: string[];
  sentences: string[];
}

function ProjBox({ data }: { data: Data }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex border border-gray-300 rounded-lg shadow p-4 m-8 w-[60%]">
      <div className="flex-none relative w-2/5 h-80 bg-gray-200">
        <img
          src={data.images[currentImageIndex]}
          alt={`Project Image ${currentImageIndex + 1}`}
          className="max-w-full max-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
        />
        <button
          onClick={goToPreviousImage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={goToNextImage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &gt;
        </button>
      </div>
      <div className="flex-3 pl-4 w-3/5">
        <h2 className="text-2xl font-bold mb-2">{data.title || "No Title"}</h2>
        <p className="text-lg mb-4">{data.intro || "No Introduction"}</p>

        <ul className="list-disc pl-5">
          {data.sentences.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </ul>
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
}

export default ProjBox;
