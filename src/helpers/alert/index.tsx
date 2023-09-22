import React from "react";
import ReactDOM from "react-dom/client";

interface AlertProps {
    open: boolean;
    title: string;
    description: string;
    type: "success" | "danger" | "warning" | "info";
}

const useAlert = () => {
    const Alert: React.FC<AlertProps> = ({open, title, type, description}) => {
        return (
            <div className={`${open ? "flex" : "hidden"} fixed bottom-[30px] left-[30px] max-w-[600px] max-660:max-w-full max-660:bottom-0 max-660:top-0 max-h-[60px] max-660:left-0 z-[999] justify-between h-full w-full items-center py-[6px] pl-[17px] pr-[6px] dark:!bg-navy-700 rounded-lg ${type === "info" ? "bg-brand-100" : type === "success" ? "bg-green-100" : type === "danger" ? "bg-red-100" : "bg-amber-100"}`}>
                <div className="flex h-full w-full items-center gap-2 justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20}>
                        <path
                            className={`${type === "info" ? "fill-brand-500" : type === "success" ? "fill-green-500" : type === "danger" ? "fill-red-500" : "fill-amber-500"}`}
                            d="M10 10.792q.354 0 .615-.261.26-.26.26-.614V6.708q0-.354-.26-.604-.261-.25-.615-.25t-.615.261q-.26.26-.26.614v3.209q0 .354.26.604.261.25.615.25Zm0 3.396q.354 0 .615-.24.26-.24.26-.636 0-.354-.26-.614-.261-.26-.615-.26t-.615.26q-.26.26-.26.614 0 .396.26.636.261.24.615.24Zm0 4.145q-1.729 0-3.25-.656t-2.646-1.781q-1.125-1.125-1.781-2.646-.656-1.521-.656-3.25t.656-3.25q.656-1.521 1.781-2.646T6.75 2.323q1.521-.656 3.25-.656t3.25.656q1.521.656 2.646 1.781t1.781 2.646q.656 1.521.656 3.25t-.656 3.25q-.656 1.521-1.781 2.646t-2.646 1.781q-1.521.656-3.25.656Z"
                        />
                    </svg>
                    <h5 className="text-base text-navy-700 dark:!text-white">
                        <span className="pr-[5px] font-bold text-navy-700 dark:!text-white">
                            {title}:
                        </span>{" "}
                        {description}
                    </h5>
                </div>
                <div className="flex rounded-md hover:bg-white/20 text-navy-700 dark:text-white h-full w-10 cursor-pointer items-center justify-center text-xl font-bold ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
            </div>
        );
    }

    const showAlert = (props: AlertProps) => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        div.classList.add('fade-in');

        ReactDOM.createRoot(div).render(<Alert {...props}/>);

        setTimeout(() => {
            div.classList.add('fade-out');

            setTimeout(() => {
                document.body.removeChild(div);
            }, 1000)
        }, 6000);
    }

    return {
        showAlert,
    };
}


export default useAlert;