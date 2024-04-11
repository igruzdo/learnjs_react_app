import { ReviewInterface } from "../../../types/review.models";
import { EntytySlice, ReviewMap, AppStore } from "../../../types/store";

export const selectReviewModule = (state: AppStore): EntytySlice<ReviewMap> => state.review;
export const selectReviewIds = (state: AppStore): string[] => selectReviewModule(state).ids;
export const selectReviewById = (state: AppStore, id: string): ReviewInterface => selectReviewModule(state).entities[id] 