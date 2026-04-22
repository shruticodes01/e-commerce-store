import { useContext } from "react";
import UserProgressContext from "./UserProgressContext";

export const useUserProgress = () => useContext(UserProgressContext);
