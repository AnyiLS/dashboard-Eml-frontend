import React from "react";
/** Styles */
import {
    SeparatorContainer,
    TextSpan,
    InnerParagraph
} from "./Separator.styles";

interface ISeparator {
    description: string;
}

const Separator: React.FC<ISeparator> = ({description}): JSX.Element => {
    return (
        <SeparatorContainer role="separator">
            <TextSpan>
                <InnerParagraph>{description}</InnerParagraph>
            </TextSpan>
        </SeparatorContainer>
    );
}

export default Separator;