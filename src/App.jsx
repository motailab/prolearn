import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SideBar from "./components/SideBar";
import TaskListContainer from "./components/TaskListContainer";
import SuplimentaryClassContainer from './components/SuplimentaryClassContainer/SuplimentaryClassContainer';
import { AppProvider } from './context/context';
import TaskContainer from "./components/TaskContainer";
import Home from "./components/Home/Home";
import SuplimentaryClasses from "./components/SuplimentaryClassContainer/SuplimentaryClasses/SuplimentaryClasses";
import SuplimentaryExercise from "./components/SuplimentaryClassContainer/SuplimentaryExercise/SuplimentaryExercise";
import FullScreenConfetti from "./components/FullScreenConfetti/FullScreenConfetti";

function App() {
  return (
      <div className="main-panel">
          <Router>
            <AppProvider>
              {/* sidebar */}
                <SideBar />
                {/* main content  */}
                <FullScreenConfetti />
                <Switch>
                  <Route exact path='/'>
                    <TaskListContainer />
                  </Route>

                  <Route exact path="/subject/:name">
                    <TaskContainer />
                  </Route>

                  <Route  exact path="/suplimentary">
                    <SuplimentaryClassContainer />
                  </Route>

                  <Route exact path="/suplimentary/:id">
                      <SuplimentaryClasses />
                  </Route>

                  <Route exact path="/suplimentary/:subjectId/:classId">
                      <SuplimentaryExercise />
                  </Route>

                  <Route exact path="/prolearn">
                      <Home />
                  </Route>

                </Switch>
            </AppProvider>
          </Router>
      </div>
  );
}

export default App;
