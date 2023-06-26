import { useDispatch as useDispatchRedux } from "react-redux";
import type { AppDispatch } from "@store/store";

export const useDispatch: () => AppDispatch = useDispatchRedux;
