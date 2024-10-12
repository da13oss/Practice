import React, { useState } from 'react';
import Tabs from './components/Tabs.jsx';

const App = () => {
  const [tabItems, setTabItems] = useState([
    { label: 'Tab 1', content: 'Tab 1 content is showing here.' },
    { label: 'Tab 2', content: 'Tab 2 content is showing here.' },
    { label: 'Tab 3', content: 'Tab 3 content is showing here.' },
  ]);

  const addTab = (label, content) => {
    setTabItems([...tabItems, { label, content }]);
  };

  const updateTabContent = (index, content) => {
    const newTabItems = tabItems.map((item, i) =>
      i === index ? { ...item, content } : item
    );
    setTabItems(newTabItems);
  };

  return (
    <div>
      <h1>Tabs</h1>
      <Tabs items={tabItems} addTab={addTab} updateTabContent={updateTabContent} />
    </div>
  );
};

export default App;
