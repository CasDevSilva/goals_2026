import { useState } from 'react';
import Matcher from './Matcher.jsx'
import ProgressGoal from './ProgressGoal.jsx'

const Info = () => {
    const [userGoals, setUserGoals] = useState(
        JSON.parse(localStorage.getItem("user_calendar")) || {}
    );

    const [userCounter, setUserCounter] = useState(
        JSON.parse(localStorage.getItem("user_counter")) || {}
    );

    const [userNotes, setUserNotes] = useState(
        JSON.parse(localStorage.getItem("user_notes")) || {}
    );

    return (
        <div className='flex flex-row'>
            <Matcher
                userGoals      = { userGoals }
                setUserGoals   = { setUserGoals }
                userCounter    = { userCounter }
                setUserCounter = { setUserCounter }
                userNotes      = { userNotes }
                setUserNotes   = { setUserNotes }
            />
            <ProgressGoal
                userCounter    = {userCounter}
            />
        </div>
    )
}

export default Info