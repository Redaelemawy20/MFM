import React from "react";
import Section from "../section/Section";

export default function MainContent() {
  return (
    <main className="pt-24 px-6 lg:px-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Edit Your Website
          </h2>
          <div className="border-dashed border-4 border-indigo-200 p-10 text-center text-gray-500 rounded-lg bg-indigo-50">
            <p>Drag and drop elements here to build your website</p>
          </div>
        </div>
        <Section title="Section 1" content="Content for Section 1" />
        <Section title="Section 1" content="Content for Section 1" />
        <Section title="Section 1" content="Content for Section 1" />
        <Section title="Section 1" content="Content for Section 1" />
        <Section title="Section 1" content="Content for Section 1" />
        <Section title="Section 1" content="Content for Section 1" />
        <Section title="Section 1" content="Content for Section 1" />
      </div>
    </main>
  );
}
