import {
  TypedUseSelectorHook,
  useSelector as useSelectorRedux,
} from "react-redux";
import type { RootState } from "@store/store";

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;
