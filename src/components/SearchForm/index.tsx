import { useState } from 'react';

import Input from 'components/Input';
import Button from 'components/Button';

import { Container, Form } from './styles';

interface SearchFormProps {
  onSubmit: (address: string, city: string, state: string, day: number) => void;
}

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [day, setDay] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!city || !address || !state) {
      return;
    }

    onSubmit(address, city, state, +day);
  };

  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <Input
          name="Address"
          value={address}
          onChange={(e) => setAddress(e)}
          placeholder="Type your address"
          required
        />
        <Input
          name="City"
          value={city}
          onChange={(e) => setCity(e)}
          placeholder="Type your city"
          required
        />
        <Input
          name="State"
          value={state}
          onChange={(e) => setState(e)}
          placeholder="Type your state"
          required
        />
        <Input
          name="Days"
          type="number"
          value={day}
          onChange={(e) => setDay(e)}
          placeholder="Type days"
          required
        />
        <Button>Search</Button>
      </Form>
    </Container>
  );
};

export default SearchForm;
