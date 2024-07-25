import { create } from "zustand";
import { persist,createJSONStorage } from "zustand/middleware";

import { IAuthenticatedUser, IUser } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface IUserGlobalStore{
    user:IAuthenticatedUser |null;
    updateUser:(user:IAuthenticatedUser|null) => void;
}

const useUserGlobalStore=create<IUserGlobalStore>()(
    persist((set,get)=>({
        user:null,
        updateUser:(user)=>{
            set({
                user,
            })
        }
    }),{
        name:"applicatin-ser-store",
        storage:createJSONStorage(()=>AsyncStorage)
    })
)
export default useUserGlobalStore;