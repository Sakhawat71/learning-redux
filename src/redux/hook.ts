import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, rootState } from "./store";

export const useAppSelector =  useSelector.withTypes<rootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();