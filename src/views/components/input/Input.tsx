import React from "react";
import {UseFormRegister} from "react-hook-form";

interface IInput {
    extra?: string;
    variant: "auth" | "admin";
    label: string;
    disabled?: boolean;
    state?: "" | "success" | "error";
    placeholder: string;
    type: string;
    register: UseFormRegister<any>;
    name: string;
    rules?: {};
}

const Input: React.FC<IInput> = ({
                                     extra,
                                     variant,
                                     label,
                                     disabled,
                                     state,
                                     placeholder,
                                     type,
                                     register,
                                     name,
                                     rules
                                 }): JSX.Element => {
    return (
        <div className={`${extra}`}>
            <label
                className={`text-sm text-navy-700 dark:text-white ${
                    variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
                }`}
            >
                {label}
            </label>
            <input
                {...register(name, rules ?? {})}
                disabled={disabled}
                type={type}
                placeholder={placeholder}
                className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
                    disabled === true
                        ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
                        : state === "error"
                            ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                            : state === "success"
                                ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                                : "border-gray-200 dark:!border-white/10 dark:text-white"
                }`}
            />
        </div>
    );
}

export default Input;