"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Data } from "@/app/editor/(interface)/ProjectData";

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
    <div className="flex border border-gray-300 shadow-lg rounded-lg p-4 m-8 w-[90%] relative">
      <div className="flex-none relative w-2/5 h-80 bg-gray-200 rounded-lg">
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
      <div className="flex-1 pl-4 w-3/5 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold">{data.title || "No Title"}</h2>
          <p className="mb-4">{data.intro || "No Introduction"}</p>
          <div className="border-2 border-gray-300 rounded-lg p-3 mb-4">
            <p className="font-semibold">주요 개발 내용</p>
            <ul className="list-disc pl-5">
              {data.sentences.map((sentence, index) => (
                <li key={index} className="text-sm mb-1">
                  {sentence}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link href={data.url}>
          <div className="btn self-end inline-flex items-center">
            <FaGithub className="w-6 h-6" />
            <p className="text-sm ml-2">자세히 보러가기</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjBox;
