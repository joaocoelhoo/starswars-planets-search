import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const {
    setData,
    setFilterByName,
    setFilterByNumericValues,
    setColumn,
    setComparison,
    setValue,
  } = useContext(Context);

  function tablePlanets({ data }) {
    const planetRow = data.map((planetData, index) => (
      <tr key={ index }>
        <td>
          { planetData.name }
        </td>
        <td>
          { planetData.rotation_period }
        </td>
        <td>
          { planetData.orbital_period }
        </td>
        <td>
          { planetData.diameter }
        </td>
        <td>
          { planetData.climate }
        </td>
        <td>
          { planetData.gravity }
        </td>
        <td>
          { planetData.terrain }
        </td>
        <td>
          { planetData.surface_water }
        </td>
        <td>
          { planetData.population }
        </td>
        <td>
          { planetData.films }
        </td>
        <td>
          { planetData.created }
        </td>
        <td>
          { planetData.edited }
        </td>
        <td>
          { planetData.url }
        </td>
      </tr>
    ));

    return planetRow;
  }

  function onInputChange({ target }, { data, originalData }) {
    const inputValue = target.value;
    if (inputValue === '') {
      setData(originalData);
      setFilterByName({ name: inputValue });
    } else {
      const planetsFilter = data.filter((planet) => {
        const planetName = planet.name.toLowerCase();
        return planetName.includes(inputValue.toLowerCase());
      });

      setData(planetsFilter);
      setFilterByName({ name: inputValue });
    }
  }

  function onColumnChange({ target }) {
    setColumn(target.value);
  }

  function onComparisonChange({ target }) {
    setComparison(target.value);
  }

  function onValueChange({ target }) {
    setValue(target.value);
  }

  function clickFilter({ column, comparison, value, data }) {
    setFilterByNumericValues([
      {
        column,
        comparison,
        value,
      },
    ]);
    const planetsFiltered = data.filter((planetData) => {
      if (comparison === 'maior que') {
        return parseInt(planetData[column], 10) > parseInt(value, 10);
      }
      if (comparison === 'menor que') {
        return parseInt(planetData[column], 10) < parseInt(value, 10);
      }

      return parseInt(planetData[column], 10) === parseInt(value, 10);
    });

    setData(planetsFiltered);
  }

  return (
    <Context.Consumer>
      {(value) => (
        <div>
          <input
            data-testid="name-filter"
            type="text"
            onChange={ (event) => { onInputChange(event, value); } }
          />
          <select data-testid="column-filter" onChange={ onColumnChange }>
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
          <select data-testid="comparison-filter" onChange={ onComparisonChange }>
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
          <input
            data-testid="value-filter"
            type="number"
            value={ value.value }
            onChange={ onValueChange }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ () => { clickFilter(value); } }
          >
            Filtrar
          </button>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>rotation_period</th>
                <th>orbital_period</th>
                <th>diameter</th>
                <th>climate</th>
                <th>gravity</th>
                <th>terrain</th>
                <th>surface_water</th>
                <th>population</th>
                <th>films</th>
                <th>created</th>
                <th>edited</th>
                <th>url</th>
              </tr>
            </thead>
            <tbody>
              { tablePlanets(value) }
            </tbody>
          </table>
        </div>
      )}
    </Context.Consumer>
  );
}

export default Table;
