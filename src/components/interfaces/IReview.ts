import { ReactNode } from "react";
import { Film } from "./IFilm";
import { IUser } from "./IUser";


export interface IReview{
    reviewId: ReviewId
    film: Film
    userEntity: IUser
    review: string
    rating: number
}

interface ReviewId{
    date: any
}