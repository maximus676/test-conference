import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Contest from "./Contest";
import {openLoadingPhotoActionCreator} from "../../redux/contest-reducer";



class ContestContainer extends React.Component {

    render () {

        return(
            <div>
                <Contest openLoadingPhoto={this.props.openLoadingPhoto}
                         photos={this.props.photos}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        photos: state.contest.photos
    }};

export default compose(
    connect (mapStateToProps, {
        openLoadingPhoto: openLoadingPhotoActionCreator
    }),
     withAuthRedirect
)(ContestContainer);