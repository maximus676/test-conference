
const OPEN_LOADING_PHOTO = "OPEN-LOADING-PHOTO";
const SAVE_PHOTO = "SAVE-PHOTO"
const OPEN_PREVIEW = "OPEN-PREVIEW"
const ACTIVE_LIKE = "ACTIVE-LIKE"
const ACTIVE_PHOTO = "ACTIVE-PHOTO"

let  initialState =  {
    photos: [] as Array <any>,
    isLoadingPhoto : false,
    isPreview: false,
    isShowPhoto: false,
    bigPhoto: ""
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
                photos: [...state.photos, action.payload]
            };
        case "OPEN-PREVIEW":
            return {
                ...state,
                isPreview: action.isPreview
            };

        case "ACTIVE-LIKE":
            let tempArray = [...state.photos]
            tempArray [action.id].isToggleLike = action.isToggleLike
            tempArray [action.id].LikeCount = action.LikeCount + 1
            tempArray.sort( (a, b) => {
                if (a.LikeCount < b.LikeCount) {
                    return 1;
                }
                if (a.LikeCount > b.LikeCount) {
                    return -1;
                }
                return 0
            });
            return {
                ...state,
                photos: [...tempArray]
            };

        case "ACTIVE-PHOTO":
            return {
                ...state,
                isShowPhoto: action.isShowPhoto,
                bigPhoto: state.photos[action.id].Photo
            };

        default:
            return state;
    }
}


type SavePhotoActionPayloadType = {
    Photo: any
    LikeCount: number | null
    isToggleLike: boolean
}

type ActionsTypes = OpenLoadingPhotoActionType | savePhotoActionType | openPreviewActionType | activeLinkActionType | activePhotoActionType

type OpenLoadingPhotoActionType = {
    type: typeof OPEN_LOADING_PHOTO,
    isLoadingPhoto: boolean
}
export const openLoadingPhotoActionCreator = (isLoadingPhoto: boolean): OpenLoadingPhotoActionType =>
                                            ({type: "OPEN-LOADING-PHOTO", isLoadingPhoto});
type activePhotoActionType = {
    type: typeof ACTIVE_PHOTO,
    isShowPhoto: boolean
    id: number
}
export const activePhotoActionCreator = (isShowPhoto: boolean, id: number): activePhotoActionType =>
    ({type: "ACTIVE-PHOTO", isShowPhoto, id});

type savePhotoActionType = {
    type: typeof SAVE_PHOTO,
    payload: SavePhotoActionPayloadType
}
export const savePhotoActionCreator = (Photo: any, LikeCount:number, isToggleLike: boolean ): savePhotoActionType =>
    ({type: "SAVE-PHOTO", payload:{Photo, LikeCount, isToggleLike}});


type openPreviewActionType = {
    type: typeof OPEN_PREVIEW,
   isPreview: boolean
}
export const openPreviewActionCreator = (isPreview: boolean): openPreviewActionType =>
    ({type: "OPEN-PREVIEW", isPreview});

type activeLinkActionType = {
    type: typeof ACTIVE_LIKE,
    isToggleLike: boolean
    id: number
    LikeCount: number
}
export const activeLinkActionCreator = (isToggleLike: boolean, id: number, LikeCount:number): activeLinkActionType =>
    ({type: "ACTIVE-LIKE", isToggleLike, id, LikeCount});

export default contestReducer;