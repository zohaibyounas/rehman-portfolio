import React, { useState } from "react";
import { Card } from "../components/ui/Card";

export function Experience() {
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/imge3.jpg", // fixed typo
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
    "/img11.jpg",
  ];

  return (
    <>
      <section
        id="experience"
        className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              My Experience
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* WORK EXPERIENCE TEXT */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I have managed wholesale and private label Amazon accounts across
              multiple marketplaces, including{" "}
              <strong>UAE, KSA, and the USA</strong>. I have worked with many
              clients and different agencies, gaining hands-on experience in
              account management, optimization, and growth strategies. Recently,
              I have been working independently with my own clients, where I
              handle and manage both wholesale and private label accounts
              end-to-end to ensure consistent performance and scalability.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <Card
                key={index}
                onClick={() => setActiveImage(img)}
                className="cursor-pointer p-4 bg-slate-50 dark:bg-slate-700 flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-56 flex items-center justify-center">
                  <img
                    src={img}
                    alt={`Experience ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FULL IMAGE MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-red-400"
            >
              &times;
            </button>

            <img
              src={activeImage}
              alt="Full Experience"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
