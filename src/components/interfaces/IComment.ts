import { IDiscussion } from "./IDiscussion"
import { IUser } from "./IUser"



export interface IComment {
    commentId: string 
    discussion: IDiscussion
    user: IUser
    parentComment: IComment
    text: string 
    timestamp: string 
    title: string 
    description: string 
    likes : number
}