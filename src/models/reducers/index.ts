import { combineReducers } from "redux";
import useStatusesReducers from "./statuses";

const useReducers = () => {
    /** Reducers */
    const statusesReducers = useStatusesReducers();

    return combineReducers({
        ...statusesReducers
    });
}

export default useReducers;