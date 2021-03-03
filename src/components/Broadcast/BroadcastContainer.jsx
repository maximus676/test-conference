import React from "react";
import {connect} from "react-redux";
/*import {
} from "../../redux/profile-reducer";*/
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Broadcast from "./Broadcast";



class BroadcastContainer extends React.Component {

    render () {
        return(
            <div>
                <Broadcast />
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
     withAuthRedirect
)(BroadcastContainer);