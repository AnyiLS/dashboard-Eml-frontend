import React from "react";
import {map} from "lodash";
/** Styles */
import {StyledBody, StyledHeadRow, StyledPaginator, StyledTable, StyledTHead} from "./Table.styles.ts";

interface ITable {
    headings: {};
    data: any;
    children?: any;
}

const Table: React.FC<ITable> = ({headings, data, children}): JSX.Element => {
    /** States */
    const [page, setPage] = React.useState<number>(1);

    const startIndex = (page - 1) * 20;
    const endIndex = startIndex + 20;

    console.log("children: ", children)

    return (
        <div className="rounded-[10px] mt-[20px] shadow-[0_5px_10px_0_rgba(0,0,0,0.2)] bg-white">
            <div className="relative overflow-x-auto">
                <StyledTable>
                    <StyledTHead>
                        <StyledHeadRow>
                            {
                                map(Object.values(headings), (item: any, index: number) => (
                                    <th key={index}>{item}</th>
                                ))
                            }
                        </StyledHeadRow>
                    </StyledTHead>
                    {
                        data.length > 0 ? (
                            <StyledBody>
                                {
                                    map(data.slice(startIndex, endIndex), (item: any, index: number) => (
                                        <tr key={index}>
                                            {
                                                map(Object.keys(headings), (key: string, indKey: number) => (
                                                    <td key={indKey}>
                                                        <p className="text-navy-800 font-medium">
                                                            {children[key] ? children[key](item) : item[key]}
                                                        </p>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </StyledBody>
                        ) : (
                            <StyledBody>
                                <tr>
                                    <td colSpan={10}>
                                        Opsss...!, No hay datos...
                                    </td>
                                </tr>
                            </StyledBody>
                        )
                    }
                </StyledTable>
            </div>
            <StyledPaginator>
                <div className="paginator">
                    <div className="spacer"></div>
                    <p className="items">
                        {
                            data.length === 0 ?
                                "0 - 0 de 0" :
                                `${(page - 1) * 20 + 1} - ${Math.min(
                                    page * 20,
                                    data.length
                                )} de ${data.length}`
                        }
                    </p>
                    <div className="buttons">
                        <button
                            className="left-button"
                            type="button"
                            aria-label="Go to previous page"
                            title="Go to previous page"
                            onClick={() => {
                                if(data.length > 20) {
                                    if(data.length / 20 >= 1) {
                                        setPage(page - 1);
                                    }
                                }
                            }}
                        >
                            <svg aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowLeftIcon">
                                <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
                            </svg>
                        </button>
                        <button
                            className="right-button"
                            type="button"
                            aria-label="Go to next page"
                            title="Go to next page"
                            onClick={() => {
                                if(data.length > 20) {
                                    if(data.length % 20 > 1) {
                                        if(data.length / 20 >= page) {
                                            setPage(page + 1);
                                        }
                                    }
                                }
                            }}
                        >
                            <svg aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon">
                                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </StyledPaginator>
        </div>
    );
}

export default Table;