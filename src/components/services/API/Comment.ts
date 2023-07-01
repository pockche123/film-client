import { getByDiscussionId, getChildrenByDiscussionid, getChildrenById, getParentByDiscussionId } from './Api'
import { URI } from './Http'

export const getCommentsByDiscussion = (id: string) => getByDiscussionId(URI.comment, id);

export const getParentCommentsByDiscussion = (id: string) => getParentByDiscussionId(URI.comment, id);

export const getChildrenCommentsByDiscussion = (id: string) => getChildrenByDiscussionid(URI.comment, id);

export const getChildrenComments = (id: string) => getChildrenById(URI.comment, id);

