import React from "react";
import {Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
/** Local Modules */
import useRouter from "./routes";
import useConfig from "./config";
import useInterceptors from "./config/interceptors";
import {usePromiseTracker} from "react-promise-tracker";
import useViews from "./views";
import useAlert from "./helpers/alert";

interface IApp {

}

const App: React.FC<IApp> = (): JSX.Element => {
    /** Routes */
    const Router = useRouter();

    /** Config */
    const {useStoreConfig, useInterceptors} = useConfig();
    const {store, persistent} = useStoreConfig();
    useInterceptors();

    /** Promise */
    const {promiseInProgress} = usePromiseTracker();

    /** Views */
    const {useComponents} = useViews();
    const {Loading} = useComponents();

    return (
        <React.Suspense fallback={<Loading/>}>
            <PersistGate persistor={persistent} loading={null}>
                <Provider store={store}>
                    {promiseInProgress && <Loading/>}
                    {Router}
                </Provider>
            </PersistGate>
        </React.Suspense>
    );
}

export default App;