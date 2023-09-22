import React from "react";
import {RegisterOptions, useForm, UseFormRegisterReturn} from "react-hook-form";
import useViews from "views";
/** Interfaces & Types */
import type {StatusData} from "models/interfaces/statuses.interfaces.ts";

interface ICreateStatus {
    onCreate: (data?: any) => void;
    onClose: () => void;
    open: boolean;
}

const CreateStatus: React.FC<ICreateStatus> = ({onCreate, onClose, open}): JSX.Element => {
    /** Views */
    const {useComponents} = useViews();
    const {Modal, Button, Input} = useComponents();

    /** Form */
    const {register, handleSubmit} = useForm<StatusData>({mode: "onChange"});

    return (
        <Modal open={open} title="Crear Estado">
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
                            <Button color="green" onClick={handleSubmit((data) => onCreate(data))}>Crear</Button>
                        </div>
                    )
                }
            }
        </Modal>
    );
}

export default CreateStatus;