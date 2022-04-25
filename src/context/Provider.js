import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const contextValues = {
    data,
    setData,
    originalData,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  };

  useEffect(() => {
    const dataResult = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((responseJSON) => {
          setData(responseJSON.results);
          setOriginalData(responseJSON.results);
        })
        .catch((error) => console.log('An error occured', error));
    };

    dataResult();
  }, []);

  return (
    <Context.Provider value={ contextValues }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired, // https://forhjy.medium.com/react-solution-for-children-is-missing-in-props-validation-eslint-react-prop-types-2e11bc6043c7
};

export default Provider;
