import { createContext, useState, useContext } from 'react';

const URL = 'https://localhost:3000';

const dbContext = createContext();

export function useDB() {
    return useContext(dbContext)
}

export function DBProvider({ children }){
    const [auditId, setAuditId] = useState();

    const value = {
        setAuditId,
        auditId
    }
    return(
        <dbContext.Provider value={value}>
            { children }
        </dbContext.Provider>
    )
}