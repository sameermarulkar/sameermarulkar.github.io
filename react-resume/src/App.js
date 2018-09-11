import React, { Component } from 'react';
import './App.css';

import { Layout, Header, Drawer, Content, Navigation} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from "./components/main";

class App extends Component {
  render() {
    return (
<div className="demo-big-content">
    <Layout>
        <Header title="Sameer Marulkar Resume" scroll>
            <Navigation>
                <Link to="/">Landing</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/">Landing</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
