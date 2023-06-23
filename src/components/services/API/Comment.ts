import { getByDiscussionId } from './Api'
import { URI } from './Http'

export const getCommentsByDiscussion = (id: string) => getByDiscussionId(URI.comment, id);
