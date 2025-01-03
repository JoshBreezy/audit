import { createContext, useState, useContext } from 'react';
import BarExterior from '../Lists/Environment/FrontOfHouse/BarExterior';
import DiningArea from '../Lists/Environment/FrontOfHouse/DiningArea';
import ExpoLine from '../Lists/Environment/FrontOfHouse/ExpoLine';
import Exterior from '../Lists/Environment/FrontOfHouse/Exterior';
import FrontEntryArea from '../Lists/Environment/FrontOfHouse/FrontEntryArea';
import GamesRoom from '../Lists/Environment/FrontOfHouse/GamesRoom';
import MensRestroom from '../Lists/Environment/FrontOfHouse/MensRestroom';
import PatioArea from '../Lists/Environment/FrontOfHouse/PatioArea';
import WomensRestroom from '../Lists/Environment/FrontOfHouse/WomensRestroom';

const URL = 'http://localhost:3000';

const dbContext = createContext();

export function useDB() {
    return useContext(dbContext)
}

export function DBProvider({ children }){

    const[audit, setAudit] = useState(
        {
            _id: null,
            location: null,
            sections: [
                {
                    name: "Environment",
                    parts: [
                        {
                            name: "Part I: Front of House",
                            subdivisions: [
                                {
                                    name: "Front Entry Area",
                                    checklist: FrontEntryArea,
                                    score: null
                                },
                                {
                                    name: "Dining Area",
                                    checklist: DiningArea,
                                    score: null
                                },
                                {
                                    name: "Bar(Exterior)",
                                    checklist: BarExterior,
                                    score: null
                                },
                                {
                                    name: "Women's Restroom",
                                    checklist: WomensRestroom,
                                    score: null
                                },
                                {
                                    name: "Men's Restroom",
                                    checklist: MensRestroom,
                                    score: null
                                },
                                {
                                    name: "Games Room",
                                    checklist: GamesRoom,
                                    score: null
                                },
                                {
                                    name: "Expo Line",
                                    checklist: ExpoLine,
                                    score: null
                                },
                                {
                                    name: "Patio Area",
                                    checklist: PatioArea,
                                    score: null
                                },
                                {
                                    name: "Exterior",
                                    checklist: Exterior,
                                    score: null
                                }
                            ],
                            score: null
                        },
                        {
                            name: "Part II: Environment Walkthrough",
                            subdivisions: [
                                {
                                    name: "",
                                    checklist: [],
                                    score: null
                                }
                            ],
                            score: null
                        },
                        {
                            name: "Part III: Bar",
                            subdivisions: [],
                            score: null
                        },
                        {
                            name: "Part IV: Kitchen",
                            subdivisions: [],
                            score: null
                        }
                    ],
                    score: null
                },
                {
                    name: "Quality Control",
                    parts: [
                        {
                            name: "Part I: Food Audit",
                            subdivisions: [],
                            score: null
                        },
                        {
                            name: "Part II: Focused Menu Items",
                            subdivisions: [],
                            score: null
                        },
                        {
                            name: "Part III: Attention to detail",
                            subdivisions: [],
                            score: null
                        }
                    ],
                    score: null
                },
                {
                    name: "Guest Experience",
                    parts: [
                        {
                            name: "Dining Room GET",
                            subdivisions: [],
                            score: null
                        },
                        {
                            name: "Ambience, Team Service & Appearance",
                            subdivisions: [],
                            score: null
                        },
                        {
                            name: "Bar GET",
                            subdivisions: [],
                            score: null
                        },
                        {
                            name: "Ambience, Team Service & Appearance",
                            subdivisions: [],
                            score: null
                        }
                    ],
                    score: null
                },
                {
                    name: "Team Training & Development",
                    parts: [
                        {
                            name: "Part I: Front of House",
                            subdivisions: [],
                            score: null
                        },
                        {
                            name: "Part II: Bar",
                            subdivisions: [],
                            score: null
                        },
                        {
                            name: "Part III: Kitchen",
                            subdivisions: [],
                            score: null
                        }
                    ],
                    score: null
                },
                {
                    name: "Operations",
                    parts: [
                        {
                            name: "Part I: Bar",
                            subdivisions: [],
                            score: null
                        },
                        {
                            name: "Part II: Kitchen",
                            subdivisions: [],
                            score: null
                        }
                    ],
                    score: null
                }
            ]
        }
    )

    const [section, setSection] = useState('Environment');
    const [part, setPart] = useState('Part I: Front of House');
    const [subdivision, setSubdivision] = useState('Front Entry Area');



    const value = {
        URL,
        audit,
        setAudit,
        section,
        setSection,
        part,
        setPart,
        subdivision,
        setSubdivision

    }
    return(
        <dbContext.Provider value={value}>
            { children }
        </dbContext.Provider>
    )
}