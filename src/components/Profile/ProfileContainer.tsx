import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    name: string
}

type PropsType = MapStatePropsType

class ProfileContainer extends React.Component <PropsType> {

    render () {
        return(
            <div>
                <Profile name={this.props.name}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        name: state.auth.name
    }};


export default compose <React.ComponentType> (
    connect <MapStatePropsType, { }, { }, AppStateType> (mapStateToProps, {
    }),
     withAuthRedirect
)(ProfileContainer);