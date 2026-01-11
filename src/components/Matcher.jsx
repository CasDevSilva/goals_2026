import { goals } from '../data/goals'
import { Check } from 'lucide-react'

const Matcher = ({userGoals, setUserGoals, userCounter, setUserCounter, userNotes, setUserNotes}) => {
    function checkGoals(goalId, event) {
        const today = new Date().toLocaleDateString("en-US");

        const updatedGoals = { ...userGoals };
        updatedGoals[goalId] = updatedGoals[goalId] || {};
        updatedGoals[goalId][today] = true;

        localStorage.setItem("user_calendar", JSON.stringify(updatedGoals));
        setUserGoals(updatedGoals);

        addDay(goalId);
        userNote(goalId, event);
    }

    function userNote(goalId, event) {
        const textarea = event.currentTarget.parentElement.parentElement.children[1].value;

        const today = new Date().toLocaleDateString("en-US");
        const updatedNotes = {...userNotes};
        updatedNotes[goalId] = updatedNotes[goalId] || {};
        updatedNotes[goalId][today] = textarea;

        localStorage.setItem("user_notes", JSON.stringify(updatedNotes));
        setUserNotes(updatedNotes);
    }

    function addDay(goalId) {
        const updatedCounter = {...userCounter};
        updatedCounter[goalId] = updatedCounter[goalId] || 0;
        updatedCounter[goalId] += 1;

        localStorage.setItem("user_counter", JSON.stringify(updatedCounter));
        setUserCounter(updatedCounter);
    }

    function validDay(goalId) {
        const today = new Date().toLocaleDateString("en-US");
        return userGoals[goalId]?.[today] ?? false;
    }

    return (
        <div className='flex flex-column flex-nowrap w-2/3'>
            <h2 className='block text-white'>Your activities</h2>
            <div>
                {Object.keys(goals).map(goalKey => {
                    const goal = goals[goalKey];
                    const isCompleted = validDay(goal.id);

                    return (
                        <div key={goal.id}>
                            <div>
                                <span>{goal.name}</span>
                                {isCompleted ? (
                                    <></>
                                ) : (
                                    <button onClick={(event) => checkGoals(goal.id, event)}>
                                        <Check/>
                                    </button>
                                )}
                            </div>
                            <textarea
                                placeholder='Notas de hoy'
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Matcher