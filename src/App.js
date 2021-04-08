import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { CharacterList } from './components/CharacterList/CharacterList';
import store from './store';
import CharacterDetails from './components/Character/CharacterDetails';
import { Calendar } from './components/Calendar/Calendar';
import { TimeoutExample } from './components/TimeoutExample/TimeoutExample';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Calendar />
        <TimeoutExample />
        <CharacterDetails />
        <CharacterList />
      </div>
    </Provider>
  );
}

export default App;
