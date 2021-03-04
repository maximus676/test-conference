import React from "react";
import {connect} from "react-redux";
/*import {
} from "../../redux/profile-reducer";*/
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Profile from "./Profile";




class ProfileContainer extends React.Component  {

    render () {
        return(
            <div>
                <Profile name={this.props.name}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        name: state.auth.name
    }};


export default compose(
    connect (mapStateToProps, {
    }),
     withAuthRedirect
)(ProfileContainer);