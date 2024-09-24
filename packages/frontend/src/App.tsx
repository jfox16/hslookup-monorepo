import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { Lookup } from 'pages/Lookup/Lookup'

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Lookup} />
      </Routes>
    </Router>
  )
}

export default App
