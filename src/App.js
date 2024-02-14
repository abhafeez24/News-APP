
import './App.css';

import React, {useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';

const App = () => {
  let pageSize = 9;
  const api_key = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)

    return (
      <div>
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News   key='general' pageSize={pageSize} apiKey={api_key} country='in' category='general' setProgress={setProgress} />}/>
          <Route exact path="/business" element={<News   key='business' pageSize={pageSize} apiKey={api_key} country='in' category='business' setProgress={setProgress} />}/>
          <Route exact path="/entertainment" element={<News   key='entertainment' pageSize={pageSize} apiKey={api_key} country='in' category='entertainment' setProgress={setProgress} />}/>
          <Route exact path="/general" element={<News   key='general' pageSize={pageSize} apiKey={api_key} country='in' category='general' setProgress={setProgress} />}/>
          <Route exact path="/health" element={<News   key='health' pageSize={pageSize} apiKey={api_key} country='in' category='health' setProgress={setProgress} />}/>
          <Route exact path="/science" element={<News   key='science' pageSize={pageSize} apiKey={api_key} country='in' category='science' setProgress={setProgress} />}/>
          <Route exact path="/sports" element={<News   key='sports' pageSize={pageSize} apiKey={api_key} country='in' category='sports' setProgress={setProgress} />}/>
          <Route exact path="/technology" element={<News   key='technology' pageSize={pageSize} apiKey={api_key} country='in' category='technology' setProgress={setProgress} />}/>
        </Routes>
        <Footer />
      </Router>
      </div>
    )

}

export default App
