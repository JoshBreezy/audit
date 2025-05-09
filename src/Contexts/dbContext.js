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
import Bar from '../Lists/Environment/Bar/Bar';
import CookingLine from '../Lists/Environment/Kitchen/CookingLine';
import DishArea from '../Lists/Environment/Kitchen/DishArea';
import DryStorage from '../Lists/Environment/Kitchen/DryStorage';
import ExteriorBackArea from '../Lists/Environment/Kitchen/ExteriorBackArea';
import Office from '../Lists/Environment/Kitchen/Office';
import PrepArea from '../Lists/Environment/Kitchen/PrepArea';
import Walkthrough from '../Lists/Environment/WalkThrough/Walkthrough';
import ClosingChecklist from '../Lists/Operations/Bar/ClosingChecklist';
import OpeningChecklist from '../Lists/Operations/Bar/OpeningChecklist';
import QualityControl from '../Lists/Operations/Bar/QualityControl';
import Inventory from '../Lists/Operations/Bar/Inventory';
import Appearance from '../Lists/Operations/Bar/Appearance';
import Kitchen from '../Lists/Operations/Kitchen/Kitchen';
import FrontOfHouse from '../Lists/TeamT&D/FrontOfHouse';
import BarTD from '../Lists/TeamT&D/BarTD';
import KitchenTD from '../Lists/TeamT&D/KitchenTD';
import DiningGet from '../Lists/GuestExperience/DiningGET';
import BarGet from '../Lists/GuestExperience/BarGET';
import FocusedItems from '../Lists/Quality Control/FocusedItems';
import AttentionToDetail from '../Lists/Quality Control/AttentionToDetail';


const URL = 'https://finneys-audit-04f13bd12b34.herokuapp.com';

const dbContext = createContext();

export function useDB() {
    return useContext(dbContext)
}

export function DBProvider({ children }){

    const [finalizeModal, setFinalizeModal] = useState(false);

    const [error, setError] = useState();

    const [token, setToken_] = useState(localStorage.getItem('token') || null);

    function setToken(newToken) {
        setToken_(newToken);
        localStorage.setItem('token', newToken);
    }

    const [user, setUser_] = useState(JSON.parse(localStorage.getItem('user')) || null);

    function setUser(newUser) {
        setUser_(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
    }

    const[audit, setAudit] = useState(
        {
            _id: null,
            location: null,
            author: null,
            finalized: false,
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
                                    name: "Bar (Exterior)",
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
                            name: "Part II: Environment Walk-Through",
                            subdivisions: [
                                {
                                    name: "Walk-Through",
                                    checklist: Walkthrough,
                                    score: null
                                }
                            ],
                            score: null
                        },
                        {
                            name: "Part III: Bar",
                            subdivisions: [
                                {
                                    name: "Bar",
                                    checklist: Bar,
                                    score: null
                                }
                            ],
                            score: null
                        },
                        {
                            name: "Part IV: Kitchen",
                            subdivisions: [
                                {
                                    name: "Exterior Back Area",
                                    checklist: ExteriorBackArea,
                                    score: null
                                },
                                {
                                    name: "Office",
                                    checklist: Office,
                                    score: null
                                },
                                {
                                    name: "Prep Area",
                                    checklist: PrepArea,
                                    score: null
                                },
                                {
                                    name: "Dry Storage",
                                    checklist: DryStorage,
                                    score: null
                                },
                                {
                                    name: "Cooking Line",
                                    checklist: CookingLine,
                                    score: null
                                },
                                {
                                    name: "Dish Area",
                                    checklist: DishArea,
                                    score: null
                                }
                            ],
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
                            subdivisions: [
                                {
                                    name: "Food Audit",
                                    checklist: [],
                                    picList: [],
                                    score: null
                                }
                            ],
                            score: null
                        },
                        {
                            name: "Part II: Focused Menu Items",
                            subdivisions: [
                                {
                                    name: "Focused Menu Items",
                                    checklist: FocusedItems,
                                    score: null
                                }
                            ],
                            score: null
                        },
                        {
                            name: "Part III: Attention To Detail",
                            subdivisions: [
                                {
                                    name: "Attention To Detail",
                                    checklist: AttentionToDetail,
                                    score: null
                                }
                            ],
                            score: null
                        }
                    ],
                    score: null
                },
                {
                    name: "Guest Experience",
                    parts: [
                        {
                            name: "Guest Experience",
                            subdivisions: [
                                {
                                    name: "Dining Room",
                                    checklist: DiningGet,
                                    score: null
                                },
                                {
                                    name: "Bar",
                                    checklist: BarGet,
                                    score: null
                                }
                            ],
                            score: null
                        }
                    ],
                    score: null
                },
                {
                    name: "Team Training & Development",
                    parts: [
                        {
                            name: "Front of House",
                            subdivisions: [
                                {
                                    name: "Front of House",
                                    checklist: FrontOfHouse,
                                    score: null
                                }
                            ],
                            score: null
                        },
                        {
                            name: "Bar",
                            subdivisions: [
                                {
                                    name: "Bar",
                                    checklist: BarTD,
                                    score: null
                                }
                            ],
                            score: null
                        },
                        {
                            name: "Kitchen",
                            subdivisions: [
                                {
                                    name: "Kitchen",
                                    checklist: KitchenTD,
                                    score: null
                                }
                            ],
                            score: null
                        }
                    ],
                    score: null
                },
                {
                    name: "Operations",
                    parts: [
                        {
                            name: "Bar",
                            subdivisions: [
                                {
                                    name: "Closing Checklist",
                                    checklist: ClosingChecklist,
                                    score: null
                                },
                                {
                                    name: "Opening Checklist",
                                    checklist: OpeningChecklist,
                                    score: null
                                },
                                {
                                    name: 'Quality Control',
                                    checklist: QualityControl,
                                    score: null
                                },
                                {
                                    name: 'Inventory',
                                    checklist: Inventory,
                                    score: null
                                },
                                {
                                    name: 'Appearance',
                                    checklist: Appearance,
                                    score: null
                                }
                            ],
                            score: null
                        },
                        {
                            name: "Kitchen",
                            subdivisions: [
                                {
                                    name: "Kitchen",
                                    checklist: Kitchen,
                                    score: null
                                }
                            ],
                            score: null
                        }
                    ],
                    score: null
                }
            ]
        }
    )

    const defaultAudit = {
        _id: null,
        location: null,
        author: null,
        finalized: false,
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
                                name: "Bar (Exterior)",
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
                        name: "Part II: Environment Walk-Through",
                        subdivisions: [
                            {
                                name: "Walk-Through",
                                checklist: Walkthrough,
                                score: null
                            }
                        ],
                        score: null
                    },
                    {
                        name: "Part III: Bar",
                        subdivisions: [
                            {
                                name: "Bar",
                                checklist: Bar,
                                score: null
                            }
                        ],
                        score: null
                    },
                    {
                        name: "Part IV: Kitchen",
                        subdivisions: [
                            {
                                name: "Exterior Back Area",
                                checklist: ExteriorBackArea,
                                score: null
                            },
                            {
                                name: "Office",
                                checklist: Office,
                                score: null
                            },
                            {
                                name: "Prep Area",
                                checklist: PrepArea,
                                score: null
                            },
                            {
                                name: "Dry Storage",
                                checklist: DryStorage,
                                score: null
                            },
                            {
                                name: "Cooking Line",
                                checklist: CookingLine,
                                score: null
                            },
                            {
                                name: "Dish Area",
                                checklist: DishArea,
                                score: null
                            }
                        ],
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
                        subdivisions: [
                            {
                                name: "Food Audit",
                                checklist: [],
                                picList: [],
                                score: null
                            }
                        ],
                        score: null
                    },
                    {
                        name: "Part II: Focused Menu Items",
                            subdivisions: [
                                {
                                    name: "Focused Menu Items",
                                    checklist: FocusedItems,
                                    score: null
                                }
                            ],
                            score: null
                    },
                    {
                        name: "Part III: Attention To Detail",
                        subdivisions: [
                            {
                                name: "Attention To Detail",
                                checklist: AttentionToDetail,
                                score: null
                            }
                        ],
                        score: null
                    }
                ],
                score: null
            },
            {
                name: "Guest Experience",
                parts: [
                    {
                        name: "Guest Experience",
                        subdivisions: [
                            {
                                name: "Dining Room",
                                checklist: DiningGet,
                                score: null
                            },
                            {
                                name: "Bar",
                                checklist: BarGet,
                                score: null
                            }
                        ],
                        score: null
                    }
                ],
                score: null
            },
            {
                name: "Team Training & Development",
                parts: [
                    {
                        name: "Front of House",
                        subdivisions: [
                            {
                                name: "Front of House",
                                checklist: FrontOfHouse,
                                score: null
                            }
                        ],
                        score: null
                    },
                    {
                        name: "Bar",
                        subdivisions: [
                            {
                                name: "Bar",
                                checklist: BarTD,
                                score: null
                            }
                        ],
                        score: null
                    },
                    {
                        name: "Kitchen",
                        subdivisions: [
                            {
                                name: "Kitchen",
                                checklist: KitchenTD,
                                score: null
                            }
                        ],
                        score: null
                    }
                ],
                score: null
            },
            {
                name: "Operations",
                parts: [
                    {
                        name: "Bar",
                        subdivisions: [
                            {
                                name: "Closing Checklist",
                                checklist: ClosingChecklist,
                                score: null
                            },
                            {
                                name: "Opening Checklist",
                                checklist: OpeningChecklist,
                                score: null
                            },
                            {
                                name: 'Quality Control',
                                checklist: QualityControl,
                                score: null
                            },
                            {
                                name: 'Inventory',
                                checklist: Inventory,
                                score: null
                            },
                            {
                                name: 'Appearance',
                                checklist: Appearance,
                                score: null
                            }
                        ],
                        score: null
                    },
                    {
                        name: "Kitchen",
                        subdivisions: [
                            {
                                name: "Kitchen",
                                checklist: Kitchen,
                                score: null
                            }
                        ],
                        score: null
                    }
                ],
                score: null
            }
        ]
    };

    const [section, setSection] = useState('Environment');
    const [part, setPart] = useState('Part I: Front of House');
    const [subdivision, setSubdivision] = useState('Front Entry Area');

    async function updateAudit(updatedAudit) {
        try {
            const response = await fetch(`${URL}/audits/${updatedAudit._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedAudit)
            });
            const json = await response.json();
            console.log(json);
        } catch (error) {
            setError(error.message);
        }
    }

    async function updatePic(photo) {
        const packet = JSON.stringify({pic : photo});
        try{
            const response = await fetch(`${URL}/photos`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: packet
            });
            const json = await response.json()
            return (
                json
            )
        } catch(error) {
            setError(error.message);
        }
    }

    async function pullPic(picID){
        try{
            const response = await fetch(`${URL}/photos/${picID}`, {
                method: 'GET',
                headers: {'Content-Type' : 'application/json'}
            })
            const json = await response.json()
            return (json.pic);
        } catch(error) {
            setError(error)
        }
    }

    const value = {
        URL,
        audit,
        setAudit,
        token,
        setToken,
        section,
        setSection,
        part,
        setPart,
        subdivision,
        setSubdivision,
        user,
        setUser,
        updateAudit,
        defaultAudit,
        finalizeModal,
        setFinalizeModal,
        error,
        setError,
        updatePic,
        pullPic
    }
    return(
        <dbContext.Provider value={value}>
            { children }
        </dbContext.Provider>
    )
}