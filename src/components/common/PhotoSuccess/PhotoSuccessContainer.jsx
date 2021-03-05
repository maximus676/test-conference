import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import PhotoSuccess from "./PhotoSuccess";
import {openLoadingPhotoActionCreator, openPreviewActionCreator} from "../../../redux/contest-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class PhotoSuccessContainer extends React.Component {

    render () {
        return(
            <div>
                <PhotoSuccess isLoadingPhoto={this.props.isLoadingPhoto}
                             openLoadingPhoto={this.props.openLoadingPhoto}
                              isPreview={this.props.isPreview}
                              photos={this.props.photos}
                              openPreview={this.props.openPreview}
                             /*savePhoto={this.props.savePhoto}*//>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isLoadingPhoto: state.contest.isLoadingPhoto,
        isPreview: state.contest.isPreview,
        photos: state.contest.photos
    }};

export default compose(
    connect (mapStateToProps, {
        openLoadingPhoto: openLoadingPhotoActionCreator,
        openPreview: openPreviewActionCreator
        /*savePhoto: savePhotoActionCreator*/
    }),
    withAuthRedirect
)(PhotoSuccessContainer);