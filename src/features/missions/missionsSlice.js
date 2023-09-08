import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map(
        (mission) => (mission.id === missionId ? { ...mission, reserved: true } : mission),
      );
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map(
        (mission) => (mission.id === missionId ? { ...mission, reserved: false } : mission),
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        const missionArray = [];
        Object.keys(action.payload).forEach((key) => {
          const mission = {
            id: key,
            mission_id: action.payload[key].mission_id,
            mission_name: action.payload[key].mission_name,
            description: action.payload[key].description,
          };
          missionArray.push(mission);
        });
        if (missionArray.length > 0) {
          state.missions = missionArray;
        }
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export { fetchMissions };
export default missionsSlice.reducer;
