import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landing';
import Resume from './resume';
import Contact from './contact'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;
