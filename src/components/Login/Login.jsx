import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import Redirect from "react-router-dom/es/Redirect";
import s from "../common/FormsControls/FormsControls.module.css";
import Logo from "../common/Logo/Logo";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div >
                <div>
                    <span className={s.form__span}>Введите адрес вашей электронной почты</span>
                    <Field className={s.form__input} placeholder={""} name={"email"}
                           component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <span className={s.form__span}>Введите пароль</span>
                    <Field className={s.form__input} placeholder={""} name={"password"}
                           type={"password"}
                           component={Input}
                           validate={[required]} />
                </div>
                <div className={s.block__exit}>
                    <button className={s.exit}>Войти</button>
                </div>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: "loginnn"})(LoginForm)     /*вокруг LoginForm создаем контейнерную компоненту reduxForm под названием LoginReduxForm  и каждой форме предаеи уникальное название как в пропсах form: "login"*/

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password)      /* formData.captcha - отправляеам капчу на сервер */
    }
    if(props.isAuth){                               /*если залогинены и нам приходит isAuth то редирект */
        debugger;
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <Logo/>
            <div className={s.container}>
                <div className={s.container__form}>
                    <h1 className={s.container__h}>Добро пожаловать!</h1>
                    <LoginReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
};

export default connect (mapStateToProps, {loginThunkCreator}) (Login); /* mapStateToProps в нем isAuth*/  /* а вторым параметром мы диспчим вызов санки*/