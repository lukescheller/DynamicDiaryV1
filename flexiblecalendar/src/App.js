import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './redux/store'
import AllEntries from './components/AllEntries'
import DataForm from './components/DataForm'
import EntryForm from './components/EntryForm'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/allentries' component={AllEntries} />
            <Route exact path='/dataform' component={DataForm} />
            <Route exact path='/entryform' component={EntryForm} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;