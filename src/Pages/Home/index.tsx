import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Home = () => {
  const [color, setColor] = useState<string>('#964949');

  const ColorData = [
    { name: 'Red', color: '#F44336' },
    { name: 'Yellow', color: '#FFF176' },
    { name: 'White', color: '#FFFFFF' },
    { name: 'Gray', color: '#263238' },
    { name: 'Orange', color: '#E64A19' },
    { name: 'Blue', color: '#1E88E5' },
    { name: 'Green', color: '#2E7D32' },
    { name: 'Black', color: '#000000' },
  ];


  return (
    <div
      className={`flex h-[100vh] w-full items-start justify-center  p-16 `}
      style={{ backgroundColor: color }}
    >
      <div className="flex gap-2 rounded-md bg-white p-4">
        {ColorData.map((color, index) => (
          <div key={index} className={``}>
            <Button
              className={`w-28 text-purple-700 shadow-lg`}
              style={{ backgroundColor: color.color }}
              onClick={() => setColor(color.color)}
            >
              {color.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
