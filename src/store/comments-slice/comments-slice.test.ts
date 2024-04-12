import {RequestStatus} from '../../const';
import {fetchComments, postComment} from '../api-actions';
import {makeFakeComment} from '../../utils/mocks';
import {commentsSlice} from './comments-slice';

describe('Comments Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      comments: [],
      status: RequestStatus.Idle,
      postCommentStatus: RequestStatus.Idle,
    };

    const result = commentsSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      comments: [],
      status: RequestStatus.Idle,
      postCommentStatus: RequestStatus.Idle,
    };

    const result = commentsSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Loading" with "fetchComments.pending"', () => {
    const expectedState = {
      comments: [],
      status: RequestStatus.Loading,
      postCommentStatus: RequestStatus.Idle,
    };

    const result = commentsSlice.reducer(undefined, fetchComments.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "comments" to array with comments, "status" to "RequestStatus.Success" with "fetchComments.fulfilled"', () => {
    const mockComment = makeFakeComment();
    const expectedState = {
      comments: [mockComment],
      status: RequestStatus.Success,
      postCommentStatus: RequestStatus.Idle,
    };

    const result = commentsSlice.reducer(undefined, fetchComments.fulfilled([mockComment], '', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Failed" with "fetchComments.rejected', () => {
    const expectedState = {
      comments: [],
      status: RequestStatus.Failed,
      postCommentStatus: RequestStatus.Idle,
    };

    const result = commentsSlice.reducer(undefined, fetchComments.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "postCommentStatus" to "RequestStatus.Loading" with "postComment.pending"', () => {
    const expectedState = {
      comments: [],
      status: RequestStatus.Idle,
      postCommentStatus: RequestStatus.Loading,
    };

    const result = commentsSlice.reducer(undefined, postComment.pending);

    expect(result).toEqual(expectedState);
  });

  it('should add "comment" to array "comments", "postCommentStatus" to "RequestStatus.Success" with "postComment.fulfilled"', () => {
    const mockComment = makeFakeComment();
    const postCommentData = {
      id: mockComment.id,
      review: {
        rating: mockComment.rating,
        comment: mockComment.comment,
      },
    };
    const expectedState = {
      comments: [mockComment],
      status: RequestStatus.Idle,
      postCommentStatus: RequestStatus.Success,
    };

    const result = commentsSlice.reducer(undefined, postComment.fulfilled(mockComment, '', postCommentData));

    expect(result).toEqual(expectedState);
  });

  it('should set "postCommentStatus" to "RequestStatus.Failed" with "postComment.rejected', () => {
    const expectedState = {
      comments: [],
      status: RequestStatus.Idle,
      postCommentStatus: RequestStatus.Failed,
    };

    const result = commentsSlice.reducer(undefined, postComment.rejected);

    expect(result).toEqual(expectedState);
  });
});
