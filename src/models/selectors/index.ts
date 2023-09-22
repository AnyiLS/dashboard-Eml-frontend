import {useSelector} from "react-redux";
import useStatusesSelectors from "./statuses";

const useSelectors = () => {
    return {
        useSelector,
        useStatusesSelectors
    };
}


export default useSelectors;