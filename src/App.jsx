import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import TaskListContainer from "./components/TaskListContainer";
import SubjectContainer from './components/SubjectContainer';
import { AppProvider } from './context/context';

function App() {
  return (
      <div className="main-panel">
          <Router>
            <AppProvider>
                <SideBar />
                <Header/>
                <Switch>
                  <Route path="/subject/:name">
                    <SubjectContainer />
                  </Route>
                  <Route path='/'>
                    <TaskListContainer />
                  </Route>
                </Switch>
            </AppProvider>
          </Router>
      </div>
  );
}

export default App;
