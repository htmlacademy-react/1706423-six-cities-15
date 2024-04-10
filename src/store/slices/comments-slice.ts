import {createSlice} from '@reduxjs/toolkit';
import {Comment} from '../../types';
import {postComment, fetchComments} from '../api-actions';
import {RequestStatus} from '../../const';

type CommentsState = {
  comments: Comment[];
  status: RequestStatus;
  postCommentStatus: RequestStatus;
}

const initialState: CommentsState = {
  comments: [],
  status: RequestStatus.Idle,
  postCommentStatus: RequestStatus.Idle,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(postComment.pending, (state) => {
        state.postCommentStatus = RequestStatus.Loading;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.postCommentStatus = RequestStatus.Success;
      })
      .addCase(postComment.rejected, (state) => {
        state.postCommentStatus = RequestStatus.Failed;
      });
  },
  selectors: {
    comments: (state: CommentsState) => state.comments,
    status: (state: CommentsState) => state.status,
    postCommentStatus: (state: CommentsState) => state.postCommentStatus,
  }
});

const commentsSelectors = commentsSlice.selectors;

export {commentsSlice, commentsSelectors};
