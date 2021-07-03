import { createContext } from "react";
import { ProfileModel } from "utils/models";

export const ProfileContext = createContext([] as ProfileModel[]);
