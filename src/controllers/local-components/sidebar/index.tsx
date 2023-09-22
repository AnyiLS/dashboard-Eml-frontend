import React from "react";
import {FaUsers} from "react-icons/fa";
import {GoPasskeyFill} from "react-icons/go";
import {FaUnlockKeyhole} from "react-icons/fa6";
import {BiSolidBookContent, BiWorld} from "react-icons/bi";
import {RiDashboardFill} from "react-icons/ri";
import {AiOutlineMenuUnfold, AiOutlineMessage} from "react-icons/ai";
import {GrContact} from "react-icons/gr";
import {SiGoogledocs} from "react-icons/si";

export interface ILinksSidebar {
    path: string;
    to: string;
    name: string;
    icon: JSX.Element;
}

export interface IRoutesSidebar {
    title: string;
    links: ILinksSidebar[];
}

const useSidebar = () => {
    const routes: IRoutesSidebar[] = [
        {
            title: "Configuracion",
            links: [
                {
                    path: "/admin/statuses",
                    to: "/admin/statuses",
                    name: "Estados",
                    icon: <RiDashboardFill className="w-6 h-6"/>
                },
            ]
        },
        {
            title: "Estadisticas",
            links: [
                {
                    path: "/admin/dashboard",
                    to: "/admin/dashboard",
                    name: "Dashboard",
                    icon: <RiDashboardFill className="w-6 h-6"/>
                },
            ]
        },
        {
            title: "Usuarios",
            links: [
                {
                    path: "/admin/users",
                    to: "/admin/users",
                    name: "Usuarios",
                    icon: <FaUsers className="w-6 h-6"/>
                },
                {
                    path: "/admin/roles",
                    to: "/admin/roles",
                    name: "Roles",
                    icon: <GoPasskeyFill className="w-6 h-6"/>
                },
                {
                    path: "/admin/permissions",
                    to: "/admin/permissions",
                    name: "Permisos",
                    icon: <FaUnlockKeyhole className="w-6 h-6"/>
                }
            ]
        },
        {
            title: "SEO",
            links: [
                {
                    path: "/admin/seo",
                    to: "/admin/seo",
                    name: "SEO Tecnico",
                    icon: <BiWorld className="w-6 h-6"/>
                },
            ]
        },
        {
            title: "Contenido",
            links: [
                {
                    path: "/admin/menu-content",
                    to: "/admin/menu-content",
                    name: "Paginas del sitio web",
                    icon: <AiOutlineMenuUnfold className="w-6 h-6"/>
                },
                {
                    path: "/admin/page-content",
                    to: "/admin/page-content",
                    name: "Manejo de contenido",
                    icon: <BiSolidBookContent className="w-6 h-6"/>
                },

            ]
        },
        {
            title: "Contacto",
            links: [
                {
                    path: "/admin/contact-management",
                    to: "/admin/contact-management",
                    name: "Ultimos contactos con EML",
                    icon: <AiOutlineMessage  className="w-6 h-6"/>
                },
                {
                    path: "/admin/accepted-terms-log",
                    to: "/admin/accepted-terms-log",
                    name: "Aceptacion de terminos",
                    icon: <SiGoogledocs className="w-6 h-6"/>
                },
            ]
        }
    ];

    return {
        routes
    };
}


export default useSidebar;