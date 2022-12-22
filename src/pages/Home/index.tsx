import { useState } from 'react';

import Periods from 'components/Periods';
import Loading from 'components/Loading';

import { getWeather } from 'utils/getWeather';
import { IPeriods } from 'utils/types';
import SearchForm from 'components/SearchForm';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [periods, setPeriods] = useState<IPeriods[]>([]);

  const handleSearch = async (address: string, city: string, state: string) => {
    setLoading(true);

    const weather = await getWeather(address, city, state);

    setLoading(false);

    if (weather.error) {
      return alert(weather.data);
    }

    setPeriods(weather.data as IPeriods[]);
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
