/**
 * Created by DT274 on 2016/10/14.
 */

import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { Router,  browserHistory } from 'react-router';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';

//console.log(React);
//console.log(ReactDOM)

let root = document.getElementById("app");

render(<Router routes={routes} history={browserHistory} />, root)

