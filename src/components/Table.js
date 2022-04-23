import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { setState } = useContext(Context);

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
      setState({ data: originalData });
    } else {
      const planetsFilter = data.filter((planet) => {
        const planetName = planet.name.toLowerCase();
        return planetName.includes(inputValue.toLowerCase());
      });

      setState((prevState) => ({
        ...prevState,
        data: planetsFilter,
      }));
    }
  }

  return (
    <Context.Consumer>
      {(value) => (
        <div>
          <input
            data-testid="name-filter"
            type="text"
            onChange={ (event) => { onInputChange(event, value.state); } }
          />
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
              { tablePlanets(value.state) }
            </tbody>
          </table>
        </div>
      )}
    </Context.Consumer>
  );
}

export default Table;
