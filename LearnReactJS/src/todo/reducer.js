import { ADD_JOB, SET_JOB, DELETE_JOB } from "./constants"


export const initState = {
    job: "",
    jobs: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            };
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            };
        case DELETE_JOB:
            state.jobs.splice(action.payload, 1);
            return {
                ...state
            };

        default:
            throw new Error("Invalid action.");
    }
};

export default reducer