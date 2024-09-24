import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function App() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      <h1 className="sofadi-one-regular">Hello, world</h1>
      <h1 className="eve-condom">Hello, world</h1>
      <button
        className={twMerge(
          "p-2 border border-gray-500 rounded-md bg-black text-white",
          active && "bg-blue-500 border-blue-500"
        )}
        onClick={() => setActive(!active)}
      >
        클릭
      </button>
    </>
  );
}
