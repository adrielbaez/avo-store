import React, { useEffect, useState } from "react";

export const useAvocadoAnimated = () => {
  const [isAlive, setisAlive] = useState(true);
  const [count, setCount] = useState(0);
  const [classCurrent, setClassCurrent] = useState("");

  useEffect(() => {
    if (count < 4) {
    }
    if (count === 4) {
      setisAlive(false);
    }
  }, [count]);
  const addClassName = (counter: number) => {
    if (counter < 4) {
      return setClassCurrent("jello-vertical");
    }
    return setClassCurrent("wobble-horizontal-bottom");
  };
  useEffect(() => {
    addClassName(count);
  }, [count]);

  return {
    isAlive,
    count,
    classCurrent,
    setCount,
    setClassCurrent,
    setisAlive,
  };
};
