import useComponentsHooks from "./components";
import useLocalComponentsHooks from "./local-components";
import useLayoutsHooks from "./layouts";
import useScreensHooks from "./screens";

const useControllers = () => {
    return {
        useComponentsHooks,
        useLocalComponentsHooks,
        useLayoutsHooks,
        useScreensHooks
    };
}


export default useControllers;