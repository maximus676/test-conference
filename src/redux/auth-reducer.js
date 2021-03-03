
import {stopSubmit} from "redux-form";

let  initialState =  {  /* инициалтзационный стейт который будет инициализировать подветку sidebar*/
    isAuth: /*false,*/   true,    /*булевое значение отоброжения логина в хедере показывает твою регистрацию на сайте*/
    isSidebarVisible : /*false,*/   true,
    level: /*null,*/ 1,
    name: /*null */  "Max",
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "/auth/SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
}

export const setAuthUserDataActionCreator = (level, name, isAuth, isSidebarVisible ) => ({type: "/auth/SET-USER-DATA",
                                            payload: {level, name, isAuth, isSidebarVisible }});


export const loginThunkCreator = (email, password) => async (dispatch) => {
    if (email === "admin" &&  password === "admin"){
        dispatch(setAuthUserDataActionCreator(1, "Max" ,true ,true))
    }else if(email === "user" &&  password === "user") {
        dispatch(setAuthUserDataActionCreator(2, "Andrei" ,true ,true))
    }else if(email === "robot" &&  password === "robot") {
        dispatch(setAuthUserDataActionCreator(3, "Pauline" ,true ,true))
    }
}


export default authReducer;