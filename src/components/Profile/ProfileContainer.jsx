import React from "react";
import {connect} from "react-redux";
/*import {
} from "../../redux/profile-reducer";*/
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Profile from "./Profile";




class ProfileContainer extends React.Component {

    render () {
        return(
            <div>
                <Profile level={this.props.level} name={this.props.name}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        level: state.auth.level,
        name: state.auth.name
        /*name: */
    }};

export default compose(
    connect (mapStateToProps, {
    }),
     withAuthRedirect
)(ProfileContainer);