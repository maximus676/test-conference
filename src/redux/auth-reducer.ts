import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";
import {AppStateType} from "./redux-store";

const SET_USER_DATA = "/auth/SET-USER-DATA";

let  initialState =  {
    isAuth: false,   /*true,*/
    isSidebarVisible : false,  /* true,*/
    level: null as number | null, /*1,*/
    name: ""  /* "Max"*/,
};
export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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


type SetAuthUserDataActionPayloadType = {
    isAuth: boolean
    isSidebarVisible : boolean
    level:  number
    name: string
}

type ActionsTypes = SetAuthUserDataActionType

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType,
}
export const setAuthUserDataActionCreator = (level: number, name: string , isAuth: boolean,
                                             isSidebarVisible: boolean ): SetAuthUserDataActionType =>
                                    ({type: "/auth/SET-USER-DATA", payload: {level, name, isAuth, isSidebarVisible }});



type ThunkType = ThunkAction <Promise<void>, AppStateType, unknown, ActionsTypes>

export const loginThunkCreator = (email: string, password: string):ThunkType => async (dispatch,getState) => {
    if (email === "admin" &&  password === "admin"){
        dispatch(setAuthUserDataActionCreator(1, "Max" ,true ,true))
    }else if(email === "user" &&  password === "user") {
        dispatch(setAuthUserDataActionCreator(2, "Andrei" ,true ,true))
    }else if(email === "robot" &&  password === "robot") {
        dispatch(setAuthUserDataActionCreator(3, "Pauline" ,true ,true))
    }
}


export default authReducer;