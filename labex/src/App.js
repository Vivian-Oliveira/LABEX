import React from 'react'
import { AppBar } from './components/AppBar/AppBar';
import Router  from './routes/Router'

const App = () => {
  return (
    <div >
        <AppBar/>
        <Router />
    </div>
  );
}

export default App;
