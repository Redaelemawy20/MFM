import React from "react";
import styles from "./Section.module.css";

export default function Section({ title, content }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex space-x-2">
          <button
            className={`${styles.iconButton} bg-indigo-500 hover:bg-indigo-600`}
          >
            <i className="fas fa-arrow-up"></i>
          </button>
          <button
            className={`${styles.iconButton} bg-indigo-500 hover:bg-indigo-600`}
          >
            <i className="fas fa-arrow-down"></i>
          </button>
          <button
            className={`${styles.iconButton} bg-red-500 hover:bg-red-600`}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <div className="border-dashed border-2 border-gray-300 p-6 text-center text-gray-500 rounded-lg">
        <p>{content}</p>
      </div>
    </div>
  );
}
