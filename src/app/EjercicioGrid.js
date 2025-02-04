"use client"
import React from 'react';

export default function EjercicioGrid() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="grid grid-cols-3 grid-rows-4 gap-4 p-4 bg-white rounded-lg shadow-lg 
                      place-items-center justify-items-center items-center max-w-4xl w-full">

        <div className="bg-blue-200 p-6 rounded col-span-2 flex items-center justify-center w-full">
          1
        </div>
        <div className="bg-blue-200 p-6 rounded flex items-center justify-center w-full">2</div>
        <div className="bg-blue-200 p-6 rounded flex items-center justify-center w-full">3</div>
        <div className="bg-blue-200 p-6 rounded flex items-center justify-center w-full">4</div>
        <div className="bg-blue-200 p-6 rounded flex items-center justify-center w-full">5</div>
        <div className="bg-blue-200 p-6 rounded flex items-center justify-center w-full">6</div>
        <div className="bg-blue-200 p-6 rounded flex items-center justify-center w-full">7</div>
        <div className="bg-blue-200 p-6 rounded flex items-center justify-center w-full">8</div>
        <div className="bg-blue-200 p-6 rounded flex items-center justify-center w-full">9</div>
        <div className="bg-blue-200 p-6 rounded flex items-center justify-center w-full">10</div>
        <div className="bg-blue-200 p-6 rounded flex items-center justify-center w-full">11</div>
        <div className="bg-blue-200 p-6 rounded flex items-center justify-center w-full row-span-2">
          12
        </div>
      </div>
      <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Reiniciar diseño
      </button>
    </div>
  );
}