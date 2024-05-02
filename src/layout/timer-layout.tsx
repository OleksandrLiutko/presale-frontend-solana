import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import usePresale from "@/hooks/usePresale";

export default function TimerLayout() {
  const { startTime, endTime } = usePresale();
  const [startFormattedDate, setStartFormattedDate] = useState("");
  const [endFormattedDate, setEndFormattedDate] = useState("");

  useEffect(() => {
    setStartFormattedDate(changeTimeStyle(startTime));
    setEndFormattedDate(changeTimeStyle(endTime));
  }, [startTime, endTime]);

  const changeTimeStyle = (time: number) => {
    let date = new Date(time * 1000);

    let optionsForDate: any = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    let optionsForTime: any = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    var formattedDate = date.toLocaleDateString("en-US", optionsForDate);
    var formattedTime = date.toLocaleTimeString("en-US", optionsForTime);

    return formattedDate + ", " + formattedTime;
  };

  return (
    <div className="w-full h-72 sm:h-96 max-w-[700px] rounded-3xl bg-[#dae3eaa0] px-8 sm:px-12 py-8 flex flex-col gap-3 sm:gap-5">
      <span className="font-inter font-bold text-[#000000] text-sm sm:text-lg">
        {Date.now() < startTime * 1000 && "Presale will start in"}
        {Date.now() >= startTime * 1000 &&
          Date.now() < endTime * 1000 &&
          "Presale will end in"}
        {Date.now() > endTime * 1000 && "Successfully presale has ended!"}
      </span>
      <div className="w-full rounded-[20px] bg-[#e6f1fa] py-8 shadow-[0_0_50px_0_#00000010] flex flex-row justify-center">
        {Date.now() < endTime * 1000 ? (
          <Countdown
            date={
              Date.now() < startTime * 1000 ? startTime * 1000 : endTime * 1000
            }
            renderer={renderer}
          />
        ) : (
          <span className="text-3xl font-bold text-[#d00711]">
            Presale Completed.
          </span>
        )}
      </div>
      <div className="flex flex-row items-start justify-between my-5 sm:my-8">
        <div className="font-inter font-normal text-[#000000] flex flex-col items-start">
          <span className="text-xs sm:text-sm">Start Time:</span>
          <span className="text-xs sm:text-base">{startFormattedDate}</span>
        </div>
        <div className="font-inter font-normal text-[#000000] flex flex-col items-start">
          <span className="text-xs sm:text-sm">End Time:</span>
          <span className="text-xs sm:text-base">{endFormattedDate}</span>
        </div>
      </div>
    </div>
  );
}

const Completionist = () => (
  <span className="text-3xl font-bold text-[#d00711]">You are good to go!</span>
);

interface renderProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const renderer: React.FC<renderProps> = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="flex flex-row items-center justify-between w-full">
        <div />
        <CounterItem label="Days" value={days} />
        <CounterItem label="Hours" value={hours} />
        <CounterItem label="Minutes" value={minutes} />
        <CounterItem label="Seconds" value={seconds} />
        <div />
      </div>
    );
  }
};

interface CounterItemProps {
  label: string;
  value: number;
}

const CounterItem: React.FC<CounterItemProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center w-16 gap-1 font-bold sm:gap-2 font-inter">
      <span className="text-[#d00711] text-2xl sm:text-4xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[#000000] text-xs sm:text-base">{label}</span>
    </div>
  );
};
