import { useState } from 'react';
import Matcher from './Matcher.jsx'
import ProgressGoal from './ProgressGoal.jsx'
import NotesModal from './NotesModal.jsx'

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

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedGoalId, setSelectedGoalId] = useState(null);

    const openModal = (goalId) => {
        setSelectedGoalId(goalId);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedGoalId(null);
    };

    return (
        <>
            <div className='flex flex-row gap-8'>
                <Matcher
                    userGoals={userGoals}
                    setUserGoals={setUserGoals}
                    userCounter={userCounter}
                    setUserCounter={setUserCounter}
                    userNotes={userNotes}
                    setUserNotes={setUserNotes}
                />
                <ProgressGoal
                    userCounter={userCounter}
                    onSeeNotes={openModal}
                />
            </div>
            {modalOpen && (
                <NotesModal
                    goalId={selectedGoalId}
                    userNotes={userNotes}
                    onClose={closeModal}
                />
            )}
        </>
    )
}

export default Info