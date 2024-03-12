"use client";
import React, { useState } from "react";

interface GitInputModalProps {
  onClose: () => void;
}

const GitInputModal: React.FC<GitInputModalProps> = ({ onClose }) => {
  const [inputs, setInputs] = useState<string[]>([""]);

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const removeInput = (index: number) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  const handleSubmit = () => {
    const allFilled = inputs.every((input) => input.trim() !== "");
    if (allFilled) {
      localStorage.setItem("repositoryUrls", JSON.stringify(inputs));
      window.location.href = "/new/editproject";
    } else {
      alert("모든 레포지토리 URL을 입력해주세요.");
    }
  };

  return (
    <dialog open className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div>
          <div className="text-2xl font-bold ">
            깃허브 레포지토리 url 입력
            <button onClick={addInput} className="btn btn-sm btn-ghost ml-2">
              +
            </button>
          </div>

          {inputs.map((input, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Your Repository"
                className="input input-bordered w-full max-w-xs mt-2"
                value={input}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
              {inputs.length > 1 && (
                <button
                  onClick={() => removeInput(index)}
                  className="btn btn-sm btn-circle btn-ghost"
                >
                  x
                </button>
              )}
            </div>
          ))}
          <button onClick={handleSubmit} className="btn btn-success mt-3">
            프로젝트 요약 생성
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default GitInputModal;
