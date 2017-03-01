/**
 * Created by jibin on 17/2/19.
 */
import React from 'react';
import {render} from "react-dom";
import App from "./components/App.js";
import initReactFastClick from "react-fastclick";
import './main.css';

initReactFastClick();

render(<App />, document.querySelector("#app"));