
export type PhotoType = {
    Photo: string
    LikeCount: number | null
    isToggleLike: boolean
}

export type  PhotoWallType = {
    Photo: string
    LikeCount: number
    isToggleLike: boolean
    id: number
}