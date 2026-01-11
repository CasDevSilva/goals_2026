import { Eye } from "lucide-react";
import { goals } from "../data/goals";

const ProgressGoal = ({userCounter, onSeeNotes}) => {
    const getProgressColor = (percentage) => {
        if (percentage >= 75) return '#248232';
        if (percentage >= 50) return '#F97316';
        if (percentage >= 25) return '#EAB308';
        return '#EF4444';
    };

    const CircleProgress = ({ percentage, color }) => {
        const radius = 28;
        const circumference = 2 * Math.PI * radius;
        const strokeDashoffset = circumference - (percentage / 100) * circumference;

        return (
            <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90">
                    <circle
                        cx="32"
                        cy="32"
                        r={radius}
                        stroke="#E5E7EB"
                        strokeWidth="4"
                        fill="none"
                    />
                    <circle
                        cx="32"
                        cy="32"
                        r={radius}
                        stroke={color}
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-500"
                    />
                </svg>
                <span 
                    className="absolute inset-0 flex items-center justify-center text-sm font-bold"
                    style={{ color }}
                >
                    {percentage}%
                </span>
            </div>
        );
    };

    return (
        <div className="w-1/3">
            <h2 className="text-porcelain text-sm font-semibold tracking-widest mb-4 text-right">
                PROGRESS OVERVIEW
            </h2>
            <div className="flex flex-col gap-3">
                {Object.keys(goals).map(goalKey => {
                    const goal = goals[goalKey];
                    const current = userCounter[goal.id] || 0;
                    const percentage = Math.min(Math.round((current / goal.goal) * 100), 100);
                    const color = getProgressColor(percentage);

                    return (
                        <div 
                            key={goal.id}
                            className="bg-porcelain rounded-xl p-4 flex items-center justify-between"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-ink-black font-semibold text-sm">
                                    {goal.name}
                                </span>
                                <button 
                                    onClick={() => onSeeNotes(goal.id)}
                                    className="flex items-center gap-1 text-gray-400 text-xs hover:text-jungle transition-colors"
                                >
                                    <Eye size={12}/>
                                    <span>See notes</span>
                                </button>
                            </div>
                            <CircleProgress percentage={percentage} color={color} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressGoal;