import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import storeService from "./storeService";

const stores = JSON.parse(localStorage.getItem("stores"));

const initialState = {
  stores: stores || [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//create store
export const createStore = createAsyncThunk(
  "store/create",
  async (storeData, thunkAPI) => {
    try {
      const response = await storeService.createStore(storeData);
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//get all stores
export const getStores = createAsyncThunk("store/getAll", async (thunkAPI) => {
  try {
    const response = await storeService.getStores();
    return response;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    reset: (state) => state.initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStore.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(createStore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload;
        // state.stores.push(action.payload);
        // localStorage.setItem("stores", JSON.stringify(state.stores));
      })
      .addCase(createStore.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(getStores.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getStores.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.stores = action.payload;
        // localStorage.setItem("stores", JSON.stringify(state.stores));
      })
      .addCase(getStores.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = storeSlice.actions;
export default storeSlice.reducer;
