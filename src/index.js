import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);





















/* destrucing pratice
import React from "react";
import ReactDOM from "react-dom";
import cars from "./animal";

const[honda,tesla]=cars;

const{speedStats:{topSpeed:teslaTopSpeed}}=tesla;
const{speedStats:{topSpeed:hondaTopSpeed}}=honda;

const{coloursByPopularity:[teslaTopColour]}=tesla;
const{coloursByPopularity:[hondaTopColour]}=honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
*/
/* Destrucing basic
import animals from "./data";

const [cat,dog]=animals; // we can give any name such as cat or c or anything but it should be unique in folder.
console.log(cat);
//const {name,sound}=cat; // we cant give any name in this. Eg: if we give anmialName instead of name it will not work it should be same name which is present inside the object.
//console.log(name);
//const {name:catName,sound:catSound}=cat; // we can change the name with catName like this. now we no longer have any acces to name word.
//console.log(catName);
const {name="fluffy",sound="meow"}=cat; // we can give the value to the name if name is undefined inside object 
console.log(name);
*/
