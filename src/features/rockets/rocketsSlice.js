import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  isLoading: false,
  error: null,
};

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, action) => {
      const rocketId = action.payload;
      const rocketIndex = state.rockets.findIndex((rocket) => rocket.id === rocketId);
      if (rocketIndex !== -1) {
        const updatedRocket = { ...state.rockets[rocketIndex], reserved: true };
        state.rockets.splice(rocketIndex, 1, updatedRocket);
      }
    },
    cancelRocketBooking: (state, action) => {
      const rocketId = action.payload;
      const rocketIndex = state.rockets.findIndex((rocket) => rocket.id === rocketId);
      if (rocketIndex !== -1) {
        const updatedRocket = { ...state.rockets[rocketIndex], reserved: false };
        state.rockets.splice(rocketIndex, 1, updatedRocket);
      }
    }         
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { bookRocket, cancelRocketBooking } = rocketsSlice.actions;
export { fetchRockets };
export default rocketsSlice.reducer;
