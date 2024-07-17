import { motion } from 'framer-motion';

const words = ["Spread", "these", "words", "across", "the", "screen"];

const getRandomPosition = () => ({
  top: Math.random() * 100 + 'vh',
  left: Math.random() * 100 + 'vw',
});

const WordSpread = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {words.map((word, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 1 }}
          animate={{
            ...getRandomPosition(),
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
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
