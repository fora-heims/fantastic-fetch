import React from 'react';
import Controls from '../../components/Controls/Controls';
import { useEffect, useState } from 'react';
import { getNameInfo } from '../../services/stuff';
import Details from '../../components/Details/Details';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getNameInfo();
  }, []);

  return (
    <div>
      <Controls setFilms={setFilms} />
      <Details films={films} />
    </div>
  );
}
