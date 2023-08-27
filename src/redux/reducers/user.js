const initState = {};
const user = (state = initState, action) => {
    switch (action.type) {
        case "add":
            return { ...action.payload };
        case "delete":
            return {};
        default:
            return state;
    }
};
export default user;
