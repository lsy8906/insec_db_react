import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TableList, Edit, New } from 'components';

const Seminar = () => (
    <div className="inner">
        <Switch>
            <Route path="/seminar/new" component={New} />
            <Route path="/seminar/edit" component={Edit} />
            <Route path="/seminar" component={TableList} />
        </Switch>
    </div>
)

export default Seminar;