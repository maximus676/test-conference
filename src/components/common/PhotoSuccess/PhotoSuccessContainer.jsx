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
                {console.log(this.props.photos)}
                <PhotoSuccess isLoadingPhoto={this.props.isLoadingPhoto}
                             openLoadingPhoto={this.props.openLoadingPhoto}
                              isPreview={this.props.isPreview}
                              photos={this.props.photos}
                              openPreview={this.props.openPreview}/>
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
    }),
    withAuthRedirect
)(PhotoSuccessContainer);