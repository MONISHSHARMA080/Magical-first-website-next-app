// app/page.jsx
'use client';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import React from 'react';

const App = () => {
  const [componentString, setComponentString] = useState('');
  const [component, setComponent] = useState(null);

  useEffect(() => {
    const componentString = `import React from 'react';
      const MyComponent = () => {
        return <div>Hello World!</div>;
      };
      export default MyComponent;`;

    setComponentString(componentString);
  }, []);

  useEffect(() => {
    if (componentString) {
      const component = eval(`() => {${componentString}}`);
      setComponent(component);
    }
  }, [componentString]);

  return (
    <div>
      {component && <component />}
    </div>
  );
};

export default App;