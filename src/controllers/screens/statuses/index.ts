import React from "react";
/** Local Modules */
import useApi from "api";
import useModels from "models";
import useHelpers from "helpers";
/** Interfaces & Types */
import {EditStatusData, Status, StatusData} from "models/interfaces/statuses.interfaces.ts";
import EditStatus from "../../../views/screens/statuses/components/edit-status";

const useStatuses = () => {
    /** Variables */
    const headings = {
        id: "Id",
        name: "Nombre",
        model: "Tipo",
        color_status: "Color",
        translation_status: "Traduccion",
        options: "Opciones"
    };

    /** Api */
    const {useActions} = useApi();
    const {dispatch, useStatusesActions} = useActions();
    const {actGetStatuses, actCreateStatus, actEditStatus} = useStatusesActions();

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useStatusesSelectors} = useSelectors();
    const {statusesSelector} = useStatusesSelectors();
    const statuses = useSelector(statusesSelector);

    /** Helpers */
    const {useAlert} = useHelpers();
    const {showAlert} = useAlert();

    /** States */
    const [openCreateStatus, setOpenCreateStatus] = React.useState<boolean>(false);
    const [openEditStatus, setOpenEditStatus] = React.useState<boolean>(false);
    const [data_edit, setDataEdit] = React.useState<Status | null>(null);

    const handleCreateStatus = (data: StatusData) => {
        dispatch(actCreateStatus({
            onError: (error: string) => {
                console.error("CREATE_STATUS: ", error);
                showAlert({type: "danger", open: true, description: "Ocurrio un problema al momento de crear el estado. Contactate con soporte para que puedas volver a intentarlo.", title: "Ocurrio un problema"})
            },
            data,
            onSuccess: (message: any) => {
                setOpenCreateStatus(false);
                showAlert({type: "success", open: true, description: message.content, title: "Estado creado exitosamente"})
                dispatch(actGetStatuses({
                    onError: (error: string) => console.error("GET_STATUSES: ", error),
                }))
            }
        }))
    }

    const handleEditStatus = (data: EditStatusData) => {
        dispatch(actEditStatus({
            onError: (error: string) => {
                console.error("EDIT_STATUS: ", error);
                showAlert({type: "danger", open: true, description: "Ocurrio un problema al momento de editar el estado. Contactate con soporte para que puedas volver a intentarlo.", title: "Ocurrio un problema"})
            },
            data,
            onSuccess: (message: any) => {
                setOpenEditStatus(false);
                showAlert({type: "success", open: true, description: message.content, title: "Estado editado exitosamente"})
                dispatch(actGetStatuses({
                    onError: (error: string) => console.error("GET_STATUSES: ", error),
                }))
            }
        }))
    }

    const handleCloseCreateStatus = () => setOpenCreateStatus(false);

    const handleOpenCreateStatus = () => setOpenCreateStatus(true);

    const handleCloseEditStatus = () => setOpenEditStatus(false);

    const handleOpenEditStatus = (data_edit: Status) => {
        setDataEdit(data_edit)
        setOpenEditStatus(true)
    };


    React.useEffect(() => {
        dispatch(actGetStatuses({
            onError: (error: string) => console.error("GET_STATUSES: ", error),
        }))
    }, [])

    return {
        headings,
        statuses,
        openCreateStatus,
        openEditStatus,
        data_edit,
        handleCreateStatus,
        handleCloseCreateStatus,
        handleOpenCreateStatus,
        handleOpenEditStatus,
        handleCloseEditStatus,
        handleEditStatus
    };
}


export default useStatuses;