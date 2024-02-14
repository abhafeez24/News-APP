
import './App.css';

import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  pageSize = 9;
  api_key = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }
  setProgress= (progress) => {
     this.setState({progress: progress})
  }

  render() {
    return (
      <div>
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/" element={<News   key='general' pageSize={this.pageSize} apiKey={this.api_key} country='in' category='general' setProgress={this.setProgress} />}/>
          <Route exact path="/business" element={<News   key='business' pageSize={this.pageSize} apiKey={this.api_key} country='in' category='business' setProgress={this.setProgress} />}/>
          <Route exact path="/entertainment" element={<News   key='entertainment' pageSize={this.pageSize} apiKey={this.api_key} country='in' category='entertainment' setProgress={this.setProgress} />}/>
          <Route exact path="/general" element={<News   key='general' pageSize={this.pageSize} apiKey={this.api_key} country='in' category='general' setProgress={this.setProgress} />}/>
          <Route exact path="/health" element={<News   key='health' pageSize={this.pageSize} apiKey={this.api_key} country='in' category='health' setProgress={this.setProgress} />}/>
          <Route exact path="/science" element={<News   key='science' pageSize={this.pageSize} apiKey={this.api_key} country='in' category='science' setProgress={this.setProgress} />}/>
          <Route exact path="/sports" element={<News   key='sports' pageSize={this.pageSize} apiKey={this.api_key} country='in' category='sports' setProgress={this.setProgress} />}/>
          <Route exact path="/technology" element={<News   key='technology' pageSize={this.pageSize} apiKey={this.api_key} country='in' category='technology' setProgress={this.setProgress} />}/>
        </Routes>
      </Router>
      </div>
    )
  }
}

