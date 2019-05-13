import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Training, Seminar } from 'pages';

const Content = () => (
    <div id="content">
        <Route exact path="/" component={Home} />
        <Switch>
            <Route path="/training/:name" component={Training} />
            <Route path="/training" component={Training} />
        </Switch>
        <Switch>
            <Route path="/seminar/:name" component={Seminar} />
            <Route path="/seminar" component={Seminar} />
        </Switch>
    </div>
)

export default Content;