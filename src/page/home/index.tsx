import Periods from 'components/Periods';
import { useState } from 'react';
import { getWeather } from 'utils/getWeather';
import { IPeriods } from 'utils/types';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [periods, setPeriods] = useState<IPeriods[]>([]);

  const handleSearch = async () => {
    if (!city || !address || !state) {
      return;
    }

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
      <div>
        <label>Address</label>
        <br />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Type your address"
          required
        />
      </div>
      <div>
        <label>City</label>
        <br />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Type your city"
          required
        />
      </div>
      <div>
        <label>State</label>
        <br />
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Type your state"
          required
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading && <h1>Loading...</h1>}

      {periods.length > 1 && (
        <>
          <br />
          <br />
          <Periods periods={periods} />
        </>
      )}
    </>
  );
};

export default Home;
