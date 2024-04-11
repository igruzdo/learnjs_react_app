import { EntytySlice, UserMap, AppStore, UserStoreItem } from "../../../types/store";

export const selectUserModule = (state: AppStore): EntytySlice<UserMap> => state.user;
export const selectUserIds = (state: AppStore): string[] => selectUserModule(state).ids;
export const selectUserById = (state: AppStore, id: string): UserStoreItem => selectUserModule(state).entities[id]