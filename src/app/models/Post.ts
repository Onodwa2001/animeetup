import { User } from "./User"

export interface Post {
    postId: String,
    postMessage: String,
    upVotes: number
    downVotes: number,
    numberOfComments: number,
    date: String,
    postAuthor: User
}