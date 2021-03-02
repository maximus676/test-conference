import React from "react";
import {connect} from "react-redux";
/*import {
} from "../../redux/profile-reducer";*/
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import ScheduleFullFirst from "./ScheduleFullFirst/ScheduleFullFirst";
import ScheduleFullExTimsFirst from "./ScheduleFullExTimsFirst/ScheduleFullExTims";



class ScheduleFirstContainer extends React.Component {
    render () {
        return(
            <div>
                {/*<ScheduleFullFirst />*/}
                <ScheduleFullExTimsFirst />
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
)(ScheduleFirstContainer);