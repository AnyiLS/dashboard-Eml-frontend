/** Local Modules */
import useHelpers from "helpers";
/** Interfaces & Types */
import type {States} from "models/interfaces/create-reducer.interfaces";
import type {Statuses} from "models/interfaces/statuses.interfaces";

const useStatusesSelectors = () => {
    /** Helpers */
    const {useCreateSelector} = useHelpers();
    const {createSelector} = useCreateSelector();

    const statusesSelector = createSelector(
        (state: States) => state.statuses,
        (statuses: Statuses) => statuses.statuses
    );

    return {
        statusesSelector
    };
}


export default useStatusesSelectors;