import { useEffect, useState } from "react";
import PokemonItem from "./PokemonItem";
import Loading from "./Loading";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  useEffect(() => {
    async function poke() {
      setLoading(true);
      const res = await fetch(`${url}`);
      const data = await res.json();
      setPokemonList(data.results);
      setLoading(false);
      // console.log(data)
    }
    poke();
  }, [url]);

  const handleNext = () => {
    async function getData() {
      const res = await fetch(`${url}`);
      const data = await res.json();
      const NextUrl = data.next;
      setUrl(NextUrl);
    }
    getData();
  };

  const handlePrevious = () => {
    async function preData() {
      const res = await fetch(`${url}`);
      const data = await res.json();
      const Pre = data.previous ? data.previous: url;
      setUrl(Pre);
    }
    preData();
  };

  return (
    <div>
      {loading && <Loading />}
      {!loading && (
        <div className="flex flex-wrap justify-evenly">
          {pokemonList.map((item, i) => (
            <PokemonItem key={i} item={item} />
          ))}
        </div>
      )}
      <div className="text-center mt-4">
        <button
          className="mx-2 border border-black mb-2 font-mono text-lg p-2"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="border border-black mb-2 font-mono text-lg p-2"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default PokemonList;
