import type {Request} from "./create-reducer.interfaces";

export interface StatusData {
    name: string;
    model: string;
    color_status: string;
    translation_status: string;
}

export interface EditStatusData extends StatusData{
    id: number;
}

export interface CreateStatusRequest extends Request {
    data: StatusData;
}

export interface EditStatusRequest extends Request {
    data: EditStatusData;
}

export interface DeleteStatusRequest extends Request {
    id: number;
}

export interface Status extends StatusData {
    id: number;
    created_at: number;
    updated_at: number;
}

export type Statuses = {
    statuses: Status[];
}