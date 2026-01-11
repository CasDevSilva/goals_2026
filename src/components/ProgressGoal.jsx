import { Eye } from "lucide-react";
import { goals } from "../data/goals";

const ProgressGoal = ({userCounter}) => {
    return (
        <div className="flex flex-column flex-nowrap w-1/3">
            <h2>Progress Overview</h2>
            <div className="flex flex-column flex-nowrap">
                {
                    Object.keys(goals).map(goalKey => {
                        const goal = goals[goalKey];

                        return (
                            <div key={goal.id}>
                                <div>
                                    <div>
                                        <span>{goal.name}</span>
                                        <button><Eye/>See notes</button>
                                    </div>
                                    <span>{userCounter[goal.id] || 0}/ {goal.goal}</span>
                                </div>
                                <div>
                                    <p>{((userCounter[goal.id] || 0)/100)*Number.parseInt(goal.goal)}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProgressGoal;