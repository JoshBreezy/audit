import { createContext, useState, useContext } from 'react';

const URL = 'https://localhost:3000';

const dbContext = createContext();

export function useDB() {
    return useContext(dbContext)
}

export function DBProvider({ children }){
    const [auditId, setAuditId] = useState();

    async function auditInit(props) {
        try{
            const response = await fetch(`${URL}/audits`,{
                method: 'post',
                headers: {'Content-Type': 'Application/json'},
                body: {props}
            })
            const json = await response.json();
            setAuditId(json[0].id)
        } catch (error) {
            console.log(error)
        }
    }
    const value = {
        auditInit
    }
    return(
        <dbContext.Provider value={value}>
            { children }
        </dbContext.Provider>
    )
}