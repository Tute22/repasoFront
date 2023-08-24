import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then(
      ({ data }) => {
        Promise.all(
          data.results.map((res) => {
            return axios(res.url).then((e) => {
              return {
                url: e.data.sprites.other["official-artwork"].front_default,
                name: res.name,
                id: e.data.id,
              };
            });
          })
        ).then((data) => setList(data));
      }
    );
  }, []);

  console.log(list);
  return (
    <div
      style={{
        backgroundColor: "aliceblue",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {list.map((element, idx) => {
        return (
          <div key={idx} className="card">
            <Link to={`/pokemon/${element.id}`}>
              <img src={element.url} alt="Img" />
            </Link>
            <span>{element.name}</span>
          </div>
        );
      })}
    </div>
  );
};
