import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, wildLife } from "./parks/RockyMountain";

console.log(trees);
wildLife();

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
