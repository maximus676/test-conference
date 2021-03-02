import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import "antd/dist/antd.css";
import Login from "./components/Login/Login";
import Redirect from "react-router-dom/es/Redirect";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Navbar from "./components/Navbar/Navbar";
import ScheduleContainer from "./components/Schedule/ScheduleContainer";
import ScheduleFirstContainer from "./components/Schedule/ScheduleFull/ScheduleFirst/ScheduleFirstContainer";
import ContestContainer from "./components/Contest/ContestContainer";



class App extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                { this.props.isSidebarVisible ? <Navbar /> : null}
                <Switch>
                    <Route exact path='/'
                           render={() => <Redirect to={"/login"} /> } />
                    <Route path='/login' render={() => <Login />}/>

                    <Route path='/profile' render={() => <ProfileContainer/>}/>
                    <Route exact path='/schedule' render={() => <ScheduleContainer />}/>
                    <Route path='/contest' render={() => <ContestContainer />}/>

                    <Route path='/schedule/first' render={() => <ScheduleFirstContainer />}/>
                    <Route path='/schedule/second' render={() => <ScheduleFirstContainer />}/>
                    <Route path='/schedule/third' render={() => <ScheduleFirstContainer />}/>

                    <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isSidebarVisible: state.auth.isSidebarVisible
})

export default compose(
   /* withRouter,*/
    connect(mapStateToProps, {
         })) (App);