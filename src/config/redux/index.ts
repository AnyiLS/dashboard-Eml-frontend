import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";
import * as reduxImmutable from "redux-immutable-state-invariant";
import {applyMiddleware, createStore, Middleware} from "redux";
/** Local Modules */
import useModels from "models";

const useStoreConfig = () => {
    /** Variables */
    const {useReducers} = useModels();
    const reducers = useReducers();

    const persistConfig = {
        key: "root",
        storage
    }

    const persistentReducer = persistReducer(persistConfig, reducers);

    const bindMiddleware = (middleware: any[]) => {
        if(import.meta.env.NODE_ENV !== "production") {
            const newMiddleware = [...middleware, reduxImmutable.default()];
            return composeWithDevTools(applyMiddleware(...newMiddleware));
        }
    }

    const store = createStore(persistentReducer, bindMiddleware([thunk]));

    const persistent = persistStore(store);

    return {
        store,
        persistent
    }
}

export default useStoreConfig;