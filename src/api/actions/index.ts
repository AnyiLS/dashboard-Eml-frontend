import {useDispatch} from "react-redux";
import useStatusesActions from "./statuses";

const useActions = () => {
    /** Variables */
    const dispatch: any = useDispatch();

    return {
        dispatch,
        useStatusesActions
    };
}


export default useActions;