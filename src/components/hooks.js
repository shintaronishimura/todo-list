import { useState } from "react";

export const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const CountAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const CountSub = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const CountReset = () => {
    setCount(initialCount);
  };

  return { count, CountAdd, CountSub, CountReset };
};
