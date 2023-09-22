import {Statuses} from "./statuses.interfaces.ts";

export type Request = {
    onError?: (error?: any) => void;
    onSuccess?: (data?: any) => void;
}

export type States = {
    statuses: Statuses;
}

export type Action<T> = {
    type: string;
    payload: T;
}