import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = ['Spread', 'these', 'words', 'across', 'the', 'screen'];

const getRandomPosition = () => ({
  top: Math.random() * 90 + 'vh',
  left: Math.random() * 90 + 'vw',
});

const WordSpread = () => {
  const [positions, setPositions] = useState(
    words.map(() => ({
      initial: { top: '50vh', left: '50vw' },
      random: getRandomPosition(),
    })),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(
        words.map(() => ({
          initial: { top: '50vh', left: '50vw' },
          random: getRandomPosition(),
        })),
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {words.map((word, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 1 }}
          animate={{
            top: [
              positions[index].initial.top,
              positions[index].random.top,
              positions[index].initial.top,
            ],
            left: [
              positions[index].initial.left,
              positions[index].random.left,
              positions[index].initial.left,
            ],
            transition: {
              duration: 6,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatType: 'loop',
            },
          }}
          style={{ position: 'absolute', fontSize: '24px', fontWeight: 'bold' }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
};

export default WordSpread;
