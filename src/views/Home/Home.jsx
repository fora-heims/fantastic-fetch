import React from 'react';
import Controls from '../../components/Controls/Controls';
import { useEffect, useState } from 'react';
import Details from '../../components/Details/Details';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(10);

  useEffect(() => {
    const fextchData = async () => {
      const response = await fetch(
        `https://zoo-animal-api.herokuapp.com/animals/rand/${number}`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
      await console.log(data);
    };
    fextchData();
  }, [number]);

  if (loading) {
    return <div>...Loading</div>;
  }
  return (
    <div>
      <Controls setData={setData} number={number} setNumber={setNumber} />
      <Details data={data} />
    </div>
  );
}
