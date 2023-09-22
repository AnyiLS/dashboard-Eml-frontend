/** Local Modules */
import useApi from "api";
import useTypes from "types";
/** Interfaces & Types */
import type {Request} from "models/interfaces/create-reducer.interfaces";
import type {Dispatch} from "redux";
import type {CreateStatusRequest, EditStatusRequest, DeleteStatusRequest} from "models/interfaces/statuses.interfaces";

const useStatusesActions = () => {
    /** Providers */
    const {useProviders} = useApi();
    const {useStatusesProviders} = useProviders();
    const {getStatuses, editStatus, createStatus} = useStatusesProviders();

    /** Types */
    const {useStatusesTypes} = useTypes();
    const {GET_STATUSES} = useStatusesTypes();

    const actGetStatuses = (request: Request) => async (dispatch: Dispatch) => {
        /** Request */
        const {onError} = request;

        try {
            const res = await getStatuses();
            const {data} = res.data;

            dispatch({
                type: GET_STATUSES,
                payload: data
            });

            const redux = JSON.parse(localStorage.getItem("persist:root")!);
            redux.statuses = JSON.stringify({statuses: data});
            localStorage.setItem("persist:root", JSON.stringify(redux));
        } catch (e) {
            onError && onError(e);
        }
    }

    const actCreateStatus = (request: CreateStatusRequest) => async (dispatch: Dispatch) => {
        /** Request */
        const {onError, onSuccess , data} = request;

        try {
            const res = await createStatus(data);

            onSuccess && onSuccess(res.data.data);
        } catch (e) {
            onError && onError(e);
        }
    }

    const actEditStatus = (request: EditStatusRequest) => async (dispatch: Dispatch) => {
        /** Request */
        const {onError, onSuccess , data} = request;

        try {
            const res = await editStatus(data);

            onSuccess && onSuccess(res.data.message);
        } catch (e) {
            onError && onError(e);
        }
    }

    return {
        actGetStatuses,
        actCreateStatus,
        actEditStatus
    };
}


export default useStatusesActions;