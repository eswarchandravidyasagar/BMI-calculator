'use client'

import Image from 'next/image';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [name, setName] = useState('');

  function reset() {
    setHeight(0);
    setWeight(0);
    setBmi(0);
  }

  function calculateBmi() {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
  }

  useEffect(() => {
    if (isNaN(bmi)) {
      setBmi(0);
    }
  }, [bmi]);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-lime-100 w-screen">
        <div className="bg-lime-200 border rounded-md w-1/2 h-3/4 p-10">
          <h2 className="text-center text-3xl font-bold mb-6">BMI Calculator</h2>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <label className="flex flex-col">
              <span className="mb-2 font-bold">Enter Your Name:</span>
              <input
                className="rounded-md border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-2 font-bold">Enter Your Height (cm):</span>
              <input
                className="rounded-md border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-2 font-bold">Enter Your Weight (kg):</span>
              <input
                className="rounded-md border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
          </div>
          <p className="text-center font-bold text-2xl mb-6">
            {name} BMI: {bmi}
          </p>
          <div className="flex justify-center">
            <button
              className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-md mr-4"
              onClick={calculateBmi}
            >
              Calculate
            </button>
            <button
              className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-md"
              onClick={reset}
            >
              Reset
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}