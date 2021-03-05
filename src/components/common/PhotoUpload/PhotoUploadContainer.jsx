import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import PhotoUpload from "./PhotoUpload";
import {
    openLoadingPhotoActionCreator,
    openPreviewActionCreator,
    savePhotoActionCreator
} from "../../../redux/contest-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class PhotoUploadContainer extends React.Component {

    render () {
        return(
            <div>
                <PhotoUpload isLoadingPhoto={this.props.isLoadingPhoto}
                             openLoadingPhoto={this.props.openLoadingPhoto}
                             savePhoto={this.props.savePhoto}
                             openPreview={this.props.openPreview}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isLoadingPhoto: state.contest.isLoadingPhoto
    }};

export default compose(
    connect (mapStateToProps, {
        openLoadingPhoto: openLoadingPhotoActionCreator,
        savePhoto: savePhotoActionCreator,
        openPreview: openPreviewActionCreator
    }),
    withAuthRedirect
)(PhotoUploadContainer);