

let  initialState =  {
    photos: [] as Array <string>
};

type InitialStateType = typeof initialState;

const contestReducer = (state = initialState, action: any): InitialStateType  => {

    switch (action.type) {


        default:
            return state;
    }
}



export const initializedSuccessActionCreator = () => ({type: "INITIALIZED-SUCCESS"});



export default contestReducer;