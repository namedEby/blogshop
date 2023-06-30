import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import { TypedUseSelectorHook, useDispatch ,useSelector} from "react-redux";





export const store = configureStore({
  reducer: {
   auth:auth,
   
   
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),

});
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
