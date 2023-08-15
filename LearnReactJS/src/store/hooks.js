import context from "./context";
import { useContext } from "react";

export const useStore = () => {
    const [state, dispatch] = useContext(context)

    return [state, dispatch]
}