import { attach } from "./store.js";
import app from "./component/app.js";

attach(app, document.getElementById('root'))

















// import html from './core.js';

// const cars =['BMW', 'Porche', 'Mercedes']

// const isSuccess =true;

// const output = html`
//     <h1> ${isSuccess} </h1>
//     <ul>
//         ${cars.map(car =>`<li>${car}</li>`)}
//     </ul>
// `