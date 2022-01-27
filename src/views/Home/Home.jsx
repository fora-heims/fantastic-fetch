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
      setLoading(true);
      const response = await fetch(
        `https://zoo-animal-api.herokuapp.com/animals/rand/${number}`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fextchData();
  }, [number]);

  const handleClick = async () => {
    setLoading(true);
    const response = await fetch(
      `https://zoo-animal-api.herokuapp.com/animals/rand/${number}`
    );
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  if (loading) {
    return <div>...Loading</div>;
  }
  return (
    <>
      <h1>Fantastic Fetch</h1>
      <Controls
        number={number}
        setNumber={setNumber}
        handleClick={handleClick}
        setLoading={setLoading}
      />
      <Details data={data} />
    </>
  );
}
