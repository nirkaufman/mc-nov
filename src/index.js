import  'milligram';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import routes from "./components/routes";
import Auth from "./providers/Auth";

ReactDOM.render(
    <BrowserRouter>
        <Auth>{routes}</Auth>
    </BrowserRouter>,
    document.getElementById('root'));
