import { useEffect, useState } from 'react';
import { getHealthTips } from '../api/healthApi';

function HealthTips() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const data = await getHealthTips();
        setTips(data);
      } catch (error) {
        console.error('Error fetching health tips:', error);
      }
    };

    fetchTips();
  }, []);

  return (
    <div>
      <h2>Health Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default HealthTips;
