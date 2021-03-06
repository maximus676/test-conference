import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Photo from "./Photo";
import {
    activeLinkActionCreator, activePhotoActionCreator,
} from "../../../redux/contest-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class PhotoContainer extends React.Component {

    render () {
        return(
            <div>
                <Photo activeLink={this.props.activeLink}
                       src={this.props.src}
                       isToggleLike={this.props.isToggleLike}
                       LikeCount={this.props.LikeCount}
                       activePhoto={this.props.activePhoto}
                       id={this.props.id}

                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }};

export default compose(
    connect (mapStateToProps, {
        activeLink: activeLinkActionCreator,
        activePhoto: activePhotoActionCreator
    }),
    withAuthRedirect
)(PhotoContainer);