import React from "react";

export type CounterProps = {
  label?: string;
  count?: number;
  onCounterIncrease: (isShift: boolean) => void;
};

const Counter = ({
  label = "Count",
  count,
  onCounterIncrease,
}: CounterProps) => {

  const handleIncrementCounter = (event: React.MouseEvent<HTMLElement>) => {
    onCounterIncrease(event.shiftKey);
  };

  return (
    <>
      <label htmlFor="counter">{label}</label> <br />
      <span id="counter" role={`counter`} onClick={handleIncrementCounter}>
        {count}
      </span>
    </>
  );
};

export default Counter;
