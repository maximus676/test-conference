import React from "react";
import {connect} from "react-redux";
/*import {
} from "../../redux/profile-reducer";*/
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
let mapStateToProps = (state) => {
    return {

    }};

export default compose(
    connect (mapStateToProps, {
    }),
     withAuthRedirect
)(ScheduleContainer);