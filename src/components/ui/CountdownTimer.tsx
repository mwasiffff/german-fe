import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  days = 7,
  hours = 23, 
  minutes = 59, 
  seconds = 59 
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days,
    hours,
    minutes,
    seconds
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        
        if (newSeconds >= 0) {
          return { ...prevTime, seconds: newSeconds };
        }
        
        const newMinutes = prevTime.minutes - 1;
        
        if (newMinutes >= 0) {
          return { ...prevTime, minutes: newMinutes, seconds: 59 };
        }
        
        const newHours = prevTime.hours - 1;
        
        if (newHours >= 0) {
          return { ...prevTime, hours: newHours, minutes: 59, seconds: 59 };
        }

        const newDays = prevTime.days - 1;

        if (newDays >= 0) {
          return { days: newDays, hours: 23, minutes: 59, seconds: 59 };
        }
        
        // Reset timer when it reaches zero
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [days, hours, minutes, seconds]);
  
  return (
    <div className="glass-panel p-4 inline-flex items-center space-x-6 rounded-lg">
      <div className="flex items-center text-accent-500">
        <Clock size={20} className="mr-2" />
        <span className="font-orbitron text-sm">Next Batch Starts In:</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <TimeUnit value={timeLeft.days} label="DAYS" />
        <span className="text-white font-orbitron">:</span>
        <TimeUnit value={timeLeft.hours} label="HR" />
        <span className="text-white font-orbitron">:</span>
        <TimeUnit value={timeLeft.minutes} label="MIN" />
        <span className="text-white font-orbitron">:</span>
        <TimeUnit value={timeLeft.seconds} label="SEC" />
      </div>
    </div>
  );
};

interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-dark-300 rounded px-2 py-1 font-orbitron text-xl text-white min-w-[48px] text-center">
      {value.toString().padStart(2, '0')}
    </div>
    <span className="text-gray-400 text-[10px] mt-1">{label}</span>
  </div>
);

export default CountdownTimer;