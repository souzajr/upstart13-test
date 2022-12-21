import { BrowserRouter } from 'react-router-dom';
import Paths from 'routes/index';

import './assets/css/global.css';

function App() {
  return (
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  );
}

export default App;
