import { useCount } from "../context/CountContext";
import { useEffect } from "react";

function Counter() {
  // const [count, setCount] = useState(0);
  const { count, setCount } = useCount();

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
    <section className="my-52">
      <h1 className="flex justify-center fw-extrabold text-2xl">{count}</h1>
      <div className="flex justify-center gap-7 my-7">
        <button
          id="add-btn"
          onClick={() => saveToHistory(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          + 1
        </button>
        <button
          id="sub-btn"
          onClick={() => saveToHistory(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          - 1
        </button>
      </div>
    </section>
  );
}

export default Counter;
