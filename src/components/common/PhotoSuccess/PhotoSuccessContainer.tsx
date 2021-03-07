import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import PhotoSuccess from "./PhotoSuccess";
import {openLoadingPhotoActionCreator, openPreviewActionCreator} from "../../../redux/contest-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../../redux/redux-store";
import {PhotoType} from "../../../types/types";

type MapStatePropsType = {
    isLoadingPhoto: boolean
    isPreview:boolean
    photos: Array <PhotoType>
}
type MapDispatchPropsType = {
    openLoadingPhoto: (isLoadingPhoto: boolean) => void
    openPreview: (isPreview: boolean) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class PhotoSuccessContainer extends React.Component <PropsType> {

    render () {

        return(
            <div>
                <PhotoSuccess isPreview={this.props.isPreview}
                              photos={this.props.photos}
                              openPreview={this.props.openPreview}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isLoadingPhoto: state.contest.isLoadingPhoto,
        isPreview: state.contest.isPreview,
        photos: state.contest.photos,
    }};

export default compose <React.ComponentType>(
    connect <MapStatePropsType, MapDispatchPropsType, {  }, AppStateType> (mapStateToProps, {
        openLoadingPhoto: openLoadingPhotoActionCreator,
        openPreview: openPreviewActionCreator
    }),
    withAuthRedirect
)(PhotoSuccessContainer);

