import { createContext, useState, useContext } from 'react';

const URL = 'https://localhost:3000';

const dbContext = createContext();

export function useDB() {
    return useContext(dbContext)
}

export function DBProvider({ children }){
    const [auditNum, setAuditNum] = useState();

    function auditInit(props) {
        fetch()
    }
}