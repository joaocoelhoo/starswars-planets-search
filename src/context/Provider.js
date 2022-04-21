import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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

Provider.propTypes = {
  children: PropTypes.node.isRequired, // https://forhjy.medium.com/react-solution-for-children-is-missing-in-props-validation-eslint-react-prop-types-2e11bc6043c7
};

export default Provider;
