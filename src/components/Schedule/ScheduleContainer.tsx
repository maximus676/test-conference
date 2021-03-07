import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Schedule from "./Schedule";


class ScheduleContainer extends React.Component {
    render () {
        return(
            <div>
                <Schedule />
            </div>
        )
    }
}
let mapStateToProps = () => {
    return {

    }};

export default compose <React.ComponentType>(
    connect  (mapStateToProps, {
    }),
     withAuthRedirect
)(ScheduleContainer);