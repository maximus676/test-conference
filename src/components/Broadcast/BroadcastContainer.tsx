import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Broadcast from "./Broadcast";
import {AppStateType} from "../../redux/redux-store";

type testProps = {
    match: {
        params:{
            src: string
        }
    }
}

class BroadcastContainer extends React.Component <testProps> {


    src = this.props.match.params.src

    render () {
        return(
            <div>
                <Broadcast src={this.src}/>
            </div>
        )
    }
}

let mapStateToProps = () => {
    return {

    }};

export default compose <React.ComponentType> (
    connect <{ }, { }, { }, AppStateType> (mapStateToProps, {
    }),
    withRouter,
     withAuthRedirect
)(BroadcastContainer);