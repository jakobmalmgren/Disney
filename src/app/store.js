import { configureStore } from "@reduxjs/toolkit";
// import { useReducer } from "../features/user/userSlice";
import userSlice from "../features/user/userSlice";

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// export default configureStore({
//   reducer: {},
//   middleware: getDefaultMiddleware({
//     serializableCheck:false,
//   }),
// });
// 1.30 typ in i videon

// export default configureStore({
//   reducer: {
//     user: useReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
//   serializableCheck: false,
// });
export default configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
