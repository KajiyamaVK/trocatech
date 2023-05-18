import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";

interface IProps {
  title: string;
  number: number;
  numberComplement?: string;
  link: string;
  className?: string;
  rounded?: boolean;
}

export default function InfoCard({
  title,
  number,
  numberComplement,
  link,
  className,
  rounded,
}: IProps) {
  const [displayedNumber, setDisplayedNumber] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const stepTime = 25;
    const steps = Math.ceil(duration / stepTime);
    const increment = number / steps;

    let currentNumber = 0;
    const interval = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= number) {
        clearInterval(interval);
        setDisplayedNumber(number);
      } else {
        setDisplayedNumber(Math.floor(currentNumber));
      }
    }, stepTime);
    return () => clearInterval(interval);
  }, [number]);

  return (
    <div
      className={`flex flex-col w-full h-fit py-4 px-5 ${
        rounded && "rounded-lg"
      } ${className}`}
    >
      <h4 className="mb-3 text-white">{title}</h4>
      <div className="flex justify-start items-end">
        <h1 className="text-5xl text-white">{displayedNumber}</h1>{" "}
        <p className="text-end text-white">{numberComplement}</p>
      </div>
    </div>
  );
}
