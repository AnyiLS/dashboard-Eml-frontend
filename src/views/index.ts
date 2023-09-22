import useComponents from "./components";
import useLocalComponents from "./local-components";
import useScreens from "./screens";
import useLayouts from "./layouts";

const useViews = () => {
    return {
        useComponents,
        useLocalComponents,
        useScreens,
        useLayouts
    };
}

export default useViews;