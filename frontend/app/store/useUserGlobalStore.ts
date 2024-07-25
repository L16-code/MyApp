import { create } from "zustand";
import { IUser } from "../types";
interface IUserGlobalStore{
    user:IUser |null;
    updateUser:(user:IUser|null) => void;
}