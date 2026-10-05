import { useParams } from "react-router-dom";
import {useData} from './Request'
import PokeImage from './PokeImage'
import React from 'react';
import { useNavigate } from 'react-router-dom';

function PokeTitle({ pokemon }) {

  const navigate = useNavigate();
  const navNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = pokemon.id + 1;
    if (id > 50)
        id = 50;
    navigate(`/detail/${id}`);
  };
  const navPrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = pokemon.id - 1;
    if (id < 1)
        id = 1;
    navigate(`/detail/${id}`);
  };

    return (<div className="poke-title">
      <button type="button" onClick={navPrev}>
        Prev
      </button>
      <h1> {pokemon.name} </h1>
      <button type="button" onClick={navNext}>
        Next
      </button>
    </div>)
}

function PokeDetails({ pokemon }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Height</th>
          <td>{pokemon.height}</td>
        </tr>

        <tr>
          <th>Weight</th>
          <td>{pokemon.weight}</td>
        </tr>

        <tr>
          <th>Moves</th>
          <td>
            <ul>
              {pokemon.moves.map((move) => (
                <li key={move.move.name}>
                  {move.move.name}
                </li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default function DetailView() {
  const { id } = useParams();
  const data = useData();
  const item = data.find(item => item.id == id)

  console.log("DetailView", typeof item, item)
  if (!item) {
      return (
          <h1>ID Unavailable</h1>
      )
  }

  return (
    <div className="detail">
        <PokeTitle pokemon={item} />
        <PokeImage id={item.id} />
        <PokeDetails pokemon={item} />
    </div>
  );
}
