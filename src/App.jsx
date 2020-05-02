import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SideBar from "./components/SideBar";
import TaskListContainer from "./components/TaskListContainer";
import SuplimentaryClasses from './components/SuplimentaryClasses/SuplimentaryClasses';
import { AppProvider } from './context/context';
import TaskContainer from "./components/TaskContainer";
import Home from "./components/Home/Home";

function App() {
  return (
      <div className="main-panel">
          <Router>
            <AppProvider>
                <SideBar />
                <Switch>

                  <Route exact path='/'>
                    <TaskListContainer />
                  </Route>

                  <Route exact path="/subject/:name">
                    <TaskContainer />
                  </Route>

                  <Route  exact path="/suplimentary">
                    <SuplimentaryClasses />
                  </Route>

                  <Route exact path="/prolearn">
                      {/* <Home /> */}
                      <TaskListContainer />
                  </Route>

                </Switch>
            </AppProvider>
          </Router>
      </div>
  );
}

export default App;
