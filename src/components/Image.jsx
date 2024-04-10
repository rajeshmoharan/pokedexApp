/* eslint-disable react/prop-types */

function Image({ pokItem }) {
  // console.log(pokItem.sprites);
  return (
    <div className="size-40 m-4">
      <img src={pokItem.sprites?.other?.dream_world.
front_default} alt="ImagePhoto"  />
    </div>
  );
}
export default Image;
