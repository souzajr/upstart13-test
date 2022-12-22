import { useState } from 'react';

import SearchForm from 'components/SearchForm';
import Periods from 'components/Periods';
import Loading from 'components/Loading';

import { getWeather } from 'utils/getWeather';
import { IPeriods } from 'utils/types';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [periods, setPeriods] = useState<IPeriods[]>([]);

  const handleSearch = async (
    address: string,
    city: string,
    state: string,
    day: number
  ) => {
    setLoading(true);

    const weather = await getWeather(address, city, state);

    setLoading(false);

    if (weather.error) {
      return alert(weather.data);
    }

    const fixedArray = weather.data.slice(0, day * 2);

    setPeriods(fixedArray as IPeriods[]);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />

      {loading && <Loading />}

      {!loading && periods.length > 1 && <Periods periods={periods} />}
    </>
  );
};

export default Home;
