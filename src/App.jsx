import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TaskListContainer from "./components/TaskListContainer";
import RewardClassContainer from './components/RewardClassContainer/RewardClassContainer';
import { AppProvider } from './context/context';
import TaskContainer from "./components/TaskContainer";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import RewardClasses from "./components/RewardClassContainer/RewardClasses/RewardClasses";
import RewardExercise from "./components/RewardClassContainer/RewardExercise/RewardExercise";
import MainLayout from "./components/Layout/MainLayout";
import Login from "./components/Auth/Login";

function App() {
  return (
      <div className="main">
          <Router>
            <AppProvider>
                <Switch>

                  <Route exact path="/login">
                      <Login />
                  </Route>

                  <MainLayout>
                    <Route exact path='/'>
                      <Home />
                    </Route>
                    <Route exact path='/learning-path'>
                      <TaskListContainer />
                    </Route>

                    <Route exact path="/learning-path/subject/:name">
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

                    <Route exact path="/profile">
                      <Profile/>
                    </Route>
                  </MainLayout>

                </Switch>

            </AppProvider>
          </Router>
      </div>
  );
}

export default App;
