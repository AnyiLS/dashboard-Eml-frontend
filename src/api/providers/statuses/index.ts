import axios, {AxiosResponse} from "axios";
import {trackPromise} from "react-promise-tracker";
/** Interfaces & Types */
import type {StatusData} from "models/interfaces/statuses.interfaces.ts";
import {EditStatusData} from "models/interfaces/statuses.interfaces.ts";

const useStatusesProviders = () => {
    const getStatuses = (): Promise<AxiosResponse> => {
        const request = () => {
            return axios.get(`/admin/statuses/get-statuses`);
        }

        return trackPromise(request());
    }

    const createStatus = (data: StatusData): Promise<AxiosResponse> => {
        const request = () => {
            return axios.post(`/admin/statuses/create-status`, data);
        }

        return trackPromise(request());
    }

    const editStatus = (data: EditStatusData): Promise<AxiosResponse> => {
        const request = () => {
            return axios.put(`/admin/statuses/edit-status`, data);
        }

        return trackPromise(request());
    }

    const deleteStatus = (id: number): Promise<AxiosResponse> => {
        const request = () => {
            return axios.delete(`/admin/statuses/delete-status/${id}`);
        }

        return trackPromise(request());
    }

    return {
        getStatuses,
        createStatus,
        editStatus,
        deleteStatus
    };
}

export default useStatusesProviders;