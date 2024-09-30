import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Doe" age={28} hairColor="Brown" />
      <PersonCard firstName="Jane" lastName="Smith" age={34} hairColor="Blonde" />
      <PersonCard firstName="Alice" lastName="Johnson" age={45} hairColor="Black" />
      <PersonCard firstName="Bob" lastName="Williams" age={52} hairColor="Gray" />
    </div>
  );
}

export default App;
