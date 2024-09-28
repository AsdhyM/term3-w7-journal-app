import { createContext, useContext, useEffect, useState } from "react";


// Create the context
//      SomeContextVariable = createContext(defaultValue);
const JournalEntriesDataContext = createContext([]);
const JournalEntriesSetterContext = createContext(null);

// Create custom hooks to access the context data
export function useJournalEntriesData(){
    console.log("Passing data around!");

    let currentJournalData = useContext(JournalEntriesContext);
    if (currentJournalData.length == 0){
        console.log("No entries to show");
    }

    return currentJournalData;
}

export function useJournalEntriesSetter(){
    return useContext(JournalEntriesSetterContext);
}

// Create the context provider

export default function JournalEntriesProvider(props){
    let [journalEntries, setJournalEntries] = useState([]);

    useEffect(() => {
        console.log(journalEntries);
    }, [journalEntries]);

    return(
        <JournalEntriesDataContext.Provider value={journalEntries}>
            <JournalEntriesSetterContext.Provider value={setJournalEntries}>
                {props.children}
            </JournalEntriesSetterContext.Provider>
        </JournalEntriesDataContext.Provider>
    );
}