import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import ScheduleFullFirst from "./ScheduleFullFirst/ScheduleFullFirst";
import ScheduleFullExTimsFirst from "./ScheduleFullExTimsFirst/ScheduleFullExTims";
import ScheduleIndFirst from "./ScheduleIndFirst/ScheduleIndFirst";
import {AppStateType} from "../../../../redux/redux-store";


type MapStatePropsType = {
    level:number | null
    name: string
}
type PropsType = MapStatePropsType

class ScheduleFirstContainer extends React.Component <PropsType> {

     AccessLevel = () => {
        let level = this.props.level
        if(level === 1){
             return <ScheduleFullFirst name={this.props.name} />
        }else if (level === 2) {
            return <ScheduleFullExTimsFirst name={this.props.name} />
        }else if (level === 3) {
            return <ScheduleIndFirst name={this.props.name} />
        }
    }

    render () {
        return(
            <div>
                {
                    this.AccessLevel()
                }
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        level: state.auth.level,
        name: state.auth.name
    }};

export default compose <React.ComponentType> (
    connect  <MapStatePropsType, { }, { }, AppStateType> (mapStateToProps, {
    }),
     withAuthRedirect
)(ScheduleFirstContainer);