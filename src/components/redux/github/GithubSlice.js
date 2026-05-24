import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "githubUsers/fetchUsers",

  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
      );

      // Check API response status
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const searcUsers = createAsyncThunk(
  "githubUsers/searcUsers",
  async (userText, { rejectWithValue }) => {
    try {
      const response = await fetch( `https://api.github.com/search/users?q=${userText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const GithubSlice = createSlice({
  name: "githubUsers",

  initialState: {
    users: [],
    usersloading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchUsers.pending, (state) => {
        state.usersloading = true;
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersloading = false;
        state.users = action.payload || [];
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.usersloading = false;
        state.users = []; // keep consistent shape
        state.error = action.payload || action.error.message;
      })

      .addCase(searcUsers.pending, (state) => {
        state.usersloading = true;
      })

      .addCase(searcUsers.fulfilled, (state, action) => {
        state.usersloading = false;
        state.users = action.payload.items || [];
      })

      .addCase(searcUsers.rejected, (state, action) => {
        state.usersloading = false;
        state.users = []; // keep consistent shape
        state.error = action.payload || action.error.message;
      })
  },
});

export default GithubSlice.reducer;
