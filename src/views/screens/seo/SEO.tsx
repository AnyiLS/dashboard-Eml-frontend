import React from "react";
/** Local Modules */
import useViews from "views";

interface ISEO {

}

const SEO: React.FC<ISEO> = ({}): JSX.Element => {
    /** Views */
    const {useComponents} = useViews();
    const {Table} = useComponents();

    const headings = {
        id: "Id",
        page: "Pagina",
        title: "Meta title",
        description: "Meta description",
        keywords: "Meta Keywords",
        image: "Imagen De Referencia",
        options: "Opciones"
    }

    return (
        <React.Fragment>
            <Table headings={headings}></Table>
        </React.Fragment>
    );
}

export default SEO;