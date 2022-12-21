import { Routes, Route } from 'react-router-dom';
import Home from 'page/home';

function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Paths;
