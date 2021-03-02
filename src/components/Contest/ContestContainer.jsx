import React from "react";
import {connect} from "react-redux";
/*import {
} from "../../redux/profile-reducer";*/
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Contest from "./Contest";





class ContestContainer extends React.Component {

    render () {
        return(
            <div>
                <Contest />
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
)(ContestContainer);