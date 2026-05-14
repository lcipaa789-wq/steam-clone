import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const res = await axios.get("https://api.rawg.io/api/games", {
    params: {
      key: API_KEY,
      page_size: 40,
    },
  });

  return res.data.results;
});

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    loading: false,
    error: null,
    search: "",
    actGenre: "all",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setActGenre: (state, action) => {
      state.actGenre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch games";
      });
  },
});

export default gameSlice.reducer;
export const { setSearch, setActGenre } = gameSlice.actions;
