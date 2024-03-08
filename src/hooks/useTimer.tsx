import { useState, useEffect } from 'react';
import { useFormatTime } from 'src/hooks';

export const useTimer = ({
  timerMode,
  timeValue,
}: {
  timerMode: 'STOP' | 'TIMER';
  timeValue: number | undefined;
}) => {
  const [countTime, setCountTime] = useState<undefined | number>(
    timeValue ?? 0,
  );
  const [isActive, setIsActive] = useState(false);
  const { formattedTime: time } = useFormatTime(countTime);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;

    if (isActive && timerMode === 'TIMER' && (countTime ?? 0) > 0) {
      interval = setInterval(() => {
        setCountTime(countTime => (countTime ?? 0) - 1000);
      }, 1000);
    } else if (isActive && timerMode === 'STOP') {
      interval = setInterval(() => {
        setCountTime(countTime => (countTime ?? 0) + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, countTime, timerMode]);

  const timerHandler = timeState => {
    setIsActive(timeState);
  };

  return { time, timerHandler };
};
