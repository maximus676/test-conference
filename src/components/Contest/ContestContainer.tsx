import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Contest from "./Contest";
import {openLoadingPhotoActionCreator} from "../../redux/contest-reducer";
import {AppStateType} from "../../redux/redux-store";
import {PhotoType} from "../../types/types";

type MapStatePropsType = {
    photos: Array <PhotoType>
}
type MapDispatchPropsType = {
    openLoadingPhoto: (isLoadingPhoto: boolean) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class ContestContainer extends React.Component <PropsType> {

    render () {

        return(
            <div>
                <Contest openLoadingPhoto={this.props.openLoadingPhoto}
                         photos={this.props.photos}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        photos: state.contest.photos
    }};

export default compose <React.ComponentType>(
    connect <MapStatePropsType, MapDispatchPropsType, { }, AppStateType> (mapStateToProps, {
        openLoadingPhoto: openLoadingPhotoActionCreator
    }),
     withAuthRedirect
)(ContestContainer);