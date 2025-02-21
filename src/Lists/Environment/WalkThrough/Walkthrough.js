const walkthrough = [
    { subtext: 
        {
        Managers: {
            bullet: 'Manager conducts a thorough Environment Walk-Through of both the interior (Front Entry Area, Dining Area, Bar Area, Restrooms and Games Room) and exterior (Front Entry Area and Patio Area) before opening the doors to the Guests.'
        },
        Team : [
            {
                bullet: 'Servers conduct a thorough “Section Check” before Guests are seated in their assigned section (10 points)',
                subBullet: [
                    'floors are broom-swept and cleaned',
                    'table bases are wiped down and cleaned',
                    'booths and banquettes are wiped down and cleaned',
                    'dining chair cracks are free of crumbs and debris',
                    'table tops are wiped down and cleaned',
                    'table tops are set with plates and roll-ups',
                    'condiments are fully stocked, cleaned and organized',
                    'condiment caddies clean, well-maintained, and chalkboards legible and not smeared',
                    'Finney tablets are sanitized',
                    'Patio fully set-up – umbrellas opened, tables set, chairs organized and floors cleaned'
                ]
            },
            {
                bullet: 'Servers consistently follow the proper steps to “Close Down” their section at the end of their shift (10 points)',
                subBullet: [
                    'floors are broom-swept and cleaned',
                    'table bases are wiped down and cleaned',
                    'booths and banquettes are wiped down and cleaned',
                    'dining chair cracks are free of crumbs and debris',
                    'table tops are wiped down and cleaned',
                    'condiments are fully stocked, cleaned and organized',
                    'condiment caddies clean, well-maintained, and chalkboards legible and not smeared',
                    'Finney tablets are sanitized'
                ]
            }
        ]}
    },
    {
        text: 'Management (10 points) no partial scoring',
        value: 10,
        check: false
    },
    {
        text: 'Team Members (20 points) no partial scoring',
        value: 20,
        check: false
    }
]

export default walkthrough;