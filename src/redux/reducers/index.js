import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import openMessList from "./openMessList";
import stories from "./stories";
import user from "./user";
import statusMessage from "./statusMessage";
import messNotification from "./messNotification";

// const userPersistConfig = {
//     key: "user",
//     storage,
// };
const rootReducer = combineReducers({
    openMessList,
    stories,
    user,
    statusMessage,
    messNotification,
    // user: persistReducer(userPersistConfig, user),
});

export default rootReducer;
