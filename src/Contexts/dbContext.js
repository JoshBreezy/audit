import { createContext, useState, useContext } from 'react';

const URL = 'https://localhost:3000';

const dbContext = createContext();

export function useDB() {
    return useContext(dbContext)
}

export function DBProvider({ children }){
    const [auditId, setAuditId] = useState();

    function auditInit(props) {
        fetch()
    }
}