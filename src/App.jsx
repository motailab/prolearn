import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SideBar from "./components/SideBar";
import TaskListContainer from "./components/TaskListContainer";
import RewardClassContainer from './components/RewardClassContainer/RewardClassContainer';
import { AppProvider } from './context/context';
import TaskContainer from "./components/TaskContainer";
import Home from "./components/Home/Home";
import RewardClasses from "./components/RewardClassContainer/RewardClasses/RewardClasses";
import RewardExercise from "./components/RewardClassContainer/RewardExercise/RewardExercise";
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

                  <Route  exact path="/rewards">
                    <RewardClassContainer />
                  </Route>

                  <Route exact path="/rewards/:id">
                      <RewardClasses />
                  </Route>

                  <Route exact path="/rewards/:subjectId/:classId">
                      <RewardExercise />
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
