import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { SEARCH_REPOSITORIES } from "../../queries";
import apolloClient from "../../apolloClient";

interface Repository {
  id: string;
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
}

interface SearchState {
  repositories: Repository[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: SearchState = {
  repositories: [],
  status: "idle",
  error: null,
};

export const fetchRepositories = createAsyncThunk(
  "search/fetchRepositories",
  async (queryString: string, { rejectWithValue }) => {
    try {
      const result = await apolloClient.query({
        query: SEARCH_REPOSITORIES,
        variables: { queryString },
      });
      return result.data.search.edges.map((edge: any) => edge.node);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchRepositories.fulfilled,
        (state, action: PayloadAction<Repository[]>) => {
          state.status = "idle";
          state.repositories = action.payload;
        }
      )
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default searchSlice.reducer;
