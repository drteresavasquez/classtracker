import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import connection from '../helpers/data/connection';
import studentRequests from '../helpers/data/studentRequests';

import MyNavbar from '../components/components/MyNavbar/MyNavbar';
import Students from '../components/pages/Students/Students';
import Tracker from '../components/pages/Tracker/Tracker';
import Assignments from '../components/pages/Assignments/Assignments';
import ClassCalendar from '../components/pages/ClassCalendar/ClassCalendar';
import SingleStudent from '../components/pages/SingleStudent/SingleStudent';
import Submit from '../components/pages/Submit/Submit';
import ClassSelector from '../components/pages/ClassSelector/ClassSelector';

import './App.scss';


const PrivateAdminRoute = ({ component: Component, admin, ...rest }) => {
  const routeChecker = props => (admin === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/assignments', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
    admin: false,
    loading: false,
    student: {},
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        studentRequests.getSingleStudentByUid(user.uid)
          .then((fbStudent) => {
            this.setState({
              authed: true,
              loading: false,
              admin: !fbStudent.isStudent,
              student: fbStudent,
            });
          })
          .catch(err => console.error('error with user', err));
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  runAway = () => {
    this.setState({
      authed: false,
      admin: false,
      loading: false,
      student: {},
    });
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  }

  render() {
    return this.state.loading === true ? (
      <h1>Loading</h1>
    ) : (
      <BrowserRouter>
        <div className="App">
          <MyNavbar
            authed={this.state.authed}
            admin={this.state.admin}
            runAway={this.runAway}
          />
          <div className="body-container">
            <Switch>
              <PrivateAdminRoute
                authed={this.state.authed}
                admin={this.state.admin}
                path="/student/:id"
                component={SingleStudent}
              />
              <PrivateRoute authed={this.state.authed} path="/students" exact component={Students} />
              <PrivateRoute authed={this.state.authed} path="/assignments" exact component={Assignments} />
              <PrivateRoute authed={this.state.authed} path="/calendar" exact component={ClassCalendar} />
              <PrivateRoute
                authed={this.state.authed}
                path="/submit"
                component={Submit}
              />
              <PrivateAdminRoute
                authed={this.state.authed}
                admin={this.state.admin}
                path="/tracker"
                component={Tracker}
              />
              <Route path="/" component={ClassSelector}/>
              <Redirect from="*" to="/"/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
