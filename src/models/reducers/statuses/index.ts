/** Local Modules */
import useHelpers from "helpers";
import useTypes from "types";
/** Interfaces & Types */
import type {Action, States} from "models/interfaces/create-reducer.interfaces";
import type {Status} from "models/interfaces/statuses.interfaces";

const useStatusesReducers = () => {
    /** Helpers */
    const {useCreateReducer} = useHelpers();
    const {createReducer} = useCreateReducer();

    /** Types */
    const {useStatusesTypes} = useTypes();
    const {GET_STATUSES}= useStatusesTypes();

    const statuses = createReducer({statuses: []}, {
        [GET_STATUSES](states: States, action: Action<Status[]>) {
            return {
                ...states,
                statuses: action.payload
            }
        }
    });

    return {
        statuses
    };
}


export default useStatusesReducers;