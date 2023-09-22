import React from "react";
/** Local Modules */
import useViews from "views";
import useControllers from "controllers";
import CreateStatus from "./components/create-status";
import EditStatus from "./components/edit-status";
import {AiFillEdit} from "react-icons/ai";
import {Status} from "../../../models/interfaces/statuses.interfaces.ts";

interface IStatuses {

}

const Statuses: React.FC<IStatuses> = ({}): JSX.Element => {
    /** Views */
    const {useComponents} = useViews();
    const {Button, Table, Modal} = useComponents();

    /** Controllers */
    const {useScreensHooks} = useControllers();
    const {useStatuses} = useScreensHooks();
    const {
        headings,
        statuses,
        openCreateStatus,
        openEditStatus,
        data_edit,
        handleCloseCreateStatus,
        handleCreateStatus,
        handleOpenCreateStatus,
        handleOpenEditStatus,
        handleCloseEditStatus,
        handleEditStatus
    } = useStatuses();

    return (
        <React.Fragment>
            <div className="flex justify-end mt-[30px]">
                <Button color="#374e9a" onClick={handleOpenCreateStatus}>Crear Estado</Button>
            </div>
            <Table headings={headings} data={statuses}>
                {{
                    color_status: (item: Status) => (
                        <div style={{ background: item.color_status }} className="h-[20px] w-[20px] rounded-[100%]"></div>
                    ),
                    options: (item: Status) => (
                        <React.Fragment>
                            <Button color="#F5A11A" text="white" onClick={() => handleOpenEditStatus(item)}>
                                <AiFillEdit/>
                            </Button>
                        </React.Fragment>
                    )
                }}
            </Table>
            <CreateStatus
                open={openCreateStatus}
                onClose={handleCloseCreateStatus}
                onCreate={handleCreateStatus}
            />
            <EditStatus
                data_edit={data_edit}
                open={openEditStatus}
                onClose={handleCloseEditStatus}
                onEdit={handleEditStatus}
            />
        </React.Fragment>
    );
}

export default Statuses;