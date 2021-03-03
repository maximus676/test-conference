import React from "react";
import {connect} from "react-redux";
/*import {
} from "../../redux/profile-reducer";*/
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import ScheduleFullFirst from "./ScheduleFullFirst/ScheduleFullFirst";
import ScheduleFullExTimsFirst from "./ScheduleFullExTimsFirst/ScheduleFullExTims";
import ScheduleIndFirst from "./ScheduleIndFirst/ScheduleIndFirst";




class ScheduleFirstContainer extends React.Component {


     AccessLevel = () => {
         console.log(this.props)
        let level = this.props.level
        if(level === 1){
            console.log(1)
             return <ScheduleFullFirst name={this.props.name} />
        }else if (level === 2) {
            console.log(2)
            return <ScheduleFullExTimsFirst name={this.props.name} />
        }else if (level === 3) {
            console.log(3)
            return <ScheduleIndFirst name={this.props.name} />
        }
    }


    render () {
        return(
            <div>
                {/*<ScheduleIndFirst />*/}
                {
                    this.AccessLevel()
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        level: state.auth.level,
        name: state.auth.name
    }};

export default compose(
    connect (mapStateToProps, {
    }),
     withAuthRedirect
)(ScheduleFirstContainer);