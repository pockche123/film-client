import { ReactNode } from "react";
import { Film } from "./IFilm";
import { IUser } from "./IUser";


export interface IReview{
    reviewId: ReviewId
    film: Film
    userEntity: IUser
    review: string
    rating: number
    createdDate: string
    likes: number
}

interface ReviewId{
    objectId: string
}