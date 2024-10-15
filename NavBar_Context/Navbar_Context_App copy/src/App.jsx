import React, { useState } from 'react';
import { UserContext } from './UserContext';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';


function App() {
  const [name, setName] = useState('User');

  return (
    <UserContext.Provider value={{ name, setName }}>
      <Navbar />
      <FormWrapper />
    </UserContext.Provider>
  );
}

export default App;
