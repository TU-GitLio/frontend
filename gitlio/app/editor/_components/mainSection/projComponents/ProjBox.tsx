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
    <div className="border border-gray-700 rounded-lg shadow p-4 m-4">
      <h2 className="text-2xl font-bold mb-2">{data.title || "No Title"}</h2>
      <p className="mb-4">{data.intro || "No Introduction"}</p>
      <div className="flex flex-wrap justify-center gap-4">
        {data.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project Image ${index + 1}`}
            style={{ maxWidth: "200px", margin: "10px" }}
          />
        ))}
      </div>
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
  );
}

export default ProjBox;
