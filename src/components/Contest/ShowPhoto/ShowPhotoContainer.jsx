import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    activePhotoActionCreator
} from "../../../redux/contest-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import ShowPhoto from "./ShowPhoto";
import s from "./ShowPhoto.module.css";


class ShowPhotoContainer extends React.Component {

    render () {
        return(
            <div className={s.container}>
                <ShowPhoto isShowPhoto={this.props.isShowPhoto}
                           bigPhoto={this.props.bigPhoto}
                           activePhoto={this.props.activePhoto}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isShowPhoto: state.contest.isShowPhoto,
        bigPhoto: state.contest.bigPhoto
    }};

export default compose(
    connect (mapStateToProps, {
        activePhoto: activePhotoActionCreator
    }),
    withAuthRedirect
)(ShowPhotoContainer);