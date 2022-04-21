import React, { useState, useEffect } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    const dataResult = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((responseJSON) => setState({ data: responseJSON.results }))
        .catch((error) => console.log('An error occured', error));
    };

    dataResult();
  }, []);

  return (
    <Context.Provider value={ state }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
