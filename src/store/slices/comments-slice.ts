import {createSlice} from '@reduxjs/toolkit';
import {Comment} from '../../types';
import {postComment, fetchComments} from '../api-actions';
import {RequestStatus} from '../../const';

type CommentsState = {
  comments: Comment[];
  status: RequestStatus;
}

const initialState: CommentsState = {
  comments: [],
  status: RequestStatus.Idle,
};

export const commentsSlice = createSlice({
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
        state.status = RequestStatus.Loading;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.status = RequestStatus.Success;
      })
      .addCase(postComment.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  }
});
