import { createContext } from "react";
import PropTypes from "prop-types";

export const CrudContext = createContext();

export default function Provider({ children }) {

    const providerValues = {

    }

    return (
        <CrudContext.Provider value={providerValues}>
            {children}
        </CrudContext.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired
}