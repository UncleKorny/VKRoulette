import { motion } from "framer-motion";
import { useState } from "react";

export const RouletteWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);

    const newRotation = rotation + 360 * 5 + Math.floor(Math.random() * 360);
    setRotation(newRotation);

    setTimeout(() => {
      setSpinning(false);
      alert("🎉 Вы выиграли приз!");
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <motion.div
        className="w-64 h-64 rounded-full border-8 border-blue-500 flex items-center justify-center"
        animate={{ rotate: rotation }}
        transition={{ duration: 5, ease: "easeOut" }}
      >
        🎯
      </motion.div>
      <button
        onClick={spin}
        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Крутить
      </button>
    </div>
  );
};