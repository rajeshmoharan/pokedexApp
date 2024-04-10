/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Image from "./Image";

// eslint-disable-next-line react/prop-types
function PokemonItem({ item }) {
  const [pokItem, setPokItem] = useState({});

  useEffect(() => {
    async function PokeMon() {
      const res = await fetch(item.url);
      const data = await res.json();
      setPokItem(data);
    }
    PokeMon();
  }, [item.url]);

  // console.log(pokItem);
  return (
    <ul>
      <li>
        <Image pokItem={pokItem} />
      </li>
      <li className="text-2xl mt-10 font-mono font-bold">{item.name}</li>
    </ul>
  );
}
export default PokemonItem;
