import {
    TYPE_ERROR,TYPE_LOG,TYPE_WARN
} from "./constants.js"
function logger(log,type){
    console[type](log);
}

export default logger;