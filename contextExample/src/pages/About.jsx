import React from 'react'
import { useCount } from '../context/CountContext'
import { useEffect } from "react";

const About = () => {
  const {count, setCount} = useCount()

  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount !== null) {
      setCount(Number(storedCount));
    }
  }, [setCount]);

  const saveToHistory = (newCount) => {
    setCount(newCount);
    localStorage.setItem("count", newCount);
  };

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia laboriosam dignissimos et quibusdam eius, temporibus, libero aperiam reiciendis ex obcaecati, rem voluptatem ut odio corrupti praesentium iste fugit esse?

      <br />
      {count}
    </div>
  )
}

export default About
