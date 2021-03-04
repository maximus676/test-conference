import React from "react";
import {connect} from "react-redux";
/*import {
} from "../../redux/profile-reducer";*/
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Broadcast from "./Broadcast";



class BroadcastContainer extends React.Component {

    src = this.props.match.params.src

    render () {
        return(
            <div>
                <Broadcast src={this.src}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }};

export default compose(
    connect (mapStateToProps, {
    }),
    withRouter,
     withAuthRedirect
)(BroadcastContainer);