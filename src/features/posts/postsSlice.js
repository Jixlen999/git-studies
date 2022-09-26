import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: "1",
		title: "Learning Redux",
		content: "I've heard good thing about redux",
	},
	{ id: "2", title: "Redux Toolkint", content: "I like it very much" },
];

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		addNewPost(state, action) {
			state.push(action.payload);
		},
	},
});

//added selector logic here
export const selectAllPosts = (state) => state.posts;

export const { addNewPost } = postsSlice.actions;

export default postsSlice.reducer;
