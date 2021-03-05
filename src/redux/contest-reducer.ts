
const OPEN_LOADING_PHOTO = "OPEN-LOADING-PHOTO";
const SAVE_PHOTO = "SAVE-PHOTO"
const OPEN_PREVIEW = "OPEN-PREVIEW"

let  initialState =  {
    photos: [] as Array <any>,
    isLoadingPhoto : false,
    isPreview: false
};

type InitialStateType = typeof initialState;

const contestReducer = (state = initialState, action: ActionsTypes): InitialStateType  => {

    switch (action.type) {
        case "OPEN-LOADING-PHOTO":
            return {
                ...state,
                isLoadingPhoto: action.isLoadingPhoto,
            };
        case "SAVE-PHOTO":
            return {
                ...state,
                photos: [...state.photos, action.Photo]
            };
        case "OPEN-PREVIEW":
            return {
                ...state,
                isPreview: action.isPreview
            };
        default:
            return state;
    }
}

type ActionsTypes = OpenLoadingPhotoActionType | savePhotoActionType | openPreviewActionType

type OpenLoadingPhotoActionType = {
    type: typeof OPEN_LOADING_PHOTO,
    isLoadingPhoto: boolean
}
export const openLoadingPhotoActionCreator = (isLoadingPhoto: boolean): OpenLoadingPhotoActionType =>
                                            ({type: "OPEN-LOADING-PHOTO", isLoadingPhoto});

type savePhotoActionType = {
    type: typeof SAVE_PHOTO,
    Photo: any
}
export const savePhotoActionCreator = (Photo: any): savePhotoActionType =>
    ({type: "SAVE-PHOTO", Photo});


type openPreviewActionType = {
    type: typeof OPEN_PREVIEW,
   isPreview: boolean
}
export const openPreviewActionCreator = (isPreview: boolean): openPreviewActionType =>
    ({type: "OPEN-PREVIEW", isPreview});

export default contestReducer;