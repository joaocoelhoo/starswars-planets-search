import React from 'react';
import Context from '../context/Context';

function Table() {
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

  return (
    <Context.Consumer>
      {(value) => (
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
      )}
    </Context.Consumer>
  );
}

export default Table;
