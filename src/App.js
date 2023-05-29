import './App.css';
import Button from '@mui/material/Button';

import Component from "./Component";
function App() {
  return (
    <>
      <Component name="Sally" age={15} />
      <Button variant="contained">{"First Button"}</Button>
    </>
  );
}

export default App;
