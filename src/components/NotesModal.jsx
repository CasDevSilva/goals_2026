import { X } from 'lucide-react';
import { goals } from '../data/goals';

const NotesModal = ({ goalId, userNotes, onClose }) => {
    const goalName = Object.values(goals).find(g => g.id === goalId)?.name || 'Goal';
    const notes = userNotes[goalId] || {};
    const noteEntries = Object.entries(notes).sort((a, b) => new Date(b[0]) - new Date(a[0]));

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-ink-black border border-jet-black rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden">
                <div className="bg-forest-green px-6 py-4 flex items-center justify-between">
                    <h3 className="text-porcelain font-bold text-lg">{goalName}</h3>
                    <button
                        onClick={onClose}
                        className="text-porcelain/80 hover:text-porcelain transition-colors"
                    >
                        <X size={24}/>
                    </button>
                </div>

                <div className="p-6 overflow-y-auto max-h-[60vh]">
                    {noteEntries.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">No notes yet</p>
                    ) : (
                        <div className="flex flex-col gap-3">
                            {noteEntries.map(([date, note]) => (
                                <div
                                    key={date}
                                    className="bg-jet-black/50 rounded-xl p-4 border border-jet-black"
                                >
                                    <span className="text-jungle text-xs font-semibold">
                                        {date}
                                    </span>
                                    <p className="text-porcelain text-sm mt-2">
                                        {note || <span className="text-gray-500 italic">No note</span>}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotesModal;