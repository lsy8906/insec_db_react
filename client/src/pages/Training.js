import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TableList, Edit, New } from 'components';

export default class Training extends Component {
   
    render() {
        return (
            <div className="inner">
                <Switch>
                    <Route path="/training/new" component={New} />
                    <Route path="/training/edit" component={Edit} />
                    <Route path="/training" component={TableList} />
                </Switch>
            </div>
        )
    }
}