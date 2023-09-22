import React from "react";
/** Styles */
import {
    BottomContainer,
    Card,
    StyledModal, Title
} from "./Modal.styles";

interface IModal {
    children?: any;
    title: string;
    open: boolean;
}

const Modal: React.FC<IModal> = ({children, title, open}): JSX.Element => {
    return (
        <React.Fragment>
            <StyledModal open={open}>
                <Card>
                    <Title>{title}</Title>
                    <div className="overflow-auto">
                        {children && children.content()}
                    </div>
                    <BottomContainer>
                        {children && children.bottom()}
                    </BottomContainer>
                </Card>
            </StyledModal>
        </React.Fragment>
    );
}

export default Modal;