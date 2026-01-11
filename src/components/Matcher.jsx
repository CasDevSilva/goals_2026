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
        const textarea = event.currentTarget.parentElement.parentElement.querySelector('textarea').value;

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
        <div className='w-full lg:w-2/3'>
            <h2 className='text-porcelain text-sm font-semibold tracking-widest mb-4'>YOUR ACTIVITIES</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {Object.keys(goals).map(goalKey => {
                    const goal = goals[goalKey];
                    const isCompleted = validDay(goal.id);

                    return (
                        <div 
                            key={goal.id}
                            className='bg-[#F5F5DC] rounded-xl p-4 flex flex-col justify-between min-h-[180px]'
                        >
                            <div>
                                <h3 className='text-ink-black font-bold text-lg mb-3'>{goal.name}</h3>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <textarea
                                    placeholder='Add notes...'
                                    className='w-full bg-white/50 rounded-lg px-3 py-2 text-xs text-ink-black placeholder:text-gray-400 resize-none h-16 focus:outline-none focus:ring-1 focus:ring-jungle'
                                />
                                <div className='flex justify-end'>
                                    {isCompleted ? (
                                        <div className='w-8 h-8 rounded-full bg-jungle flex items-center justify-center'>
                                            <Check size={16} className='text-white'/>
                                        </div>
                                    ) : (
                                        <button 
                                            onClick={(event) => checkGoals(goal.id, event)}
                                            className='w-8 h-8 rounded-full bg-jungle/80 hover:bg-jungle flex items-center justify-center transition-colors'
                                        >
                                            <Check size={16} className='text-white'/>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Matcher