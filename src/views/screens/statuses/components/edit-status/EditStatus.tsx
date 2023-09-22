import React from "react";
import {useForm} from "react-hook-form";
/** Interfaces & Types */
import type {Status} from "models/interfaces/statuses.interfaces";
/** Local Modules */
import useViews from "views";

interface IEditStatus {
    open: boolean;
    onClose: () => void;
    onEdit: (data: Status) => void;
    data_edit: Status | null;
}

const EditStatus: React.FC<IEditStatus> = ({open, onEdit, data_edit, onClose}): JSX.Element => {
    /** Views */
    const {useComponents} = useViews();
    const {Modal, Button, Input} = useComponents();

    /** Form */
    const {register, handleSubmit, reset} = useForm<Status>({mode: "onChange"});

    /** Effect */
    React.useEffect(() => {
        if(data_edit) {
            reset({
                id: data_edit!.id,
                name: data_edit!.name,
                model: data_edit!.model,
                color_status: data_edit!.color_status,
                translation_status: data_edit!.translation_status
            });
        }
    }, [data_edit])

    return (
        <Modal open={open} title={`Editar Estado ${data_edit ? data_edit!.name : ""}`}>
            {
                {
                    content: () => (
                        <div className="grid grid-cols-2 py-[30px] gap-[20px] max-800:grid-cols-1">
                            <Input
                                variant="admin"
                                label="Nombre"
                                placeholder="Ingresa el nombre del estado"
                                type="text"
                                register={register}
                                name="name"
                            />
                            <Input
                                variant="admin"
                                label="Modelo"
                                placeholder="Ingresa el modelo del estado"
                                type="text"
                                register={register}
                                name="model"
                            />
                            <Input
                                variant="admin"
                                label="Color"
                                placeholder="Ingresa el color del estado"
                                type="color"
                                register={register}
                                name="color_status"
                            />
                            <Input
                                variant="admin"
                                label="Traduccion"
                                placeholder="Ingresa el traduccion del estado"
                                type="text"
                                register={register}
                                name="translation_status"
                            />
                        </div>
                    ),
                    bottom: () => (
                        <div className="flex gap-[10px] justify-end">
                            <Button color="#f2f2f2" text="#1b254b" onClick={onClose}>Cancelar</Button>
                            <Button color="green" onClick={handleSubmit((data) => onEdit(data))}>Editar</Button>
                        </div>
                    )
                }
            }
        </Modal>
    );
}

export default EditStatus;