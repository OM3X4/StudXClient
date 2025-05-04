export default function calcWeekGoal(arr: any[]): number { // passed in data.goals
    return arr.reduce((acc, cur) => {
        const today = new Date();
        const endDate = new Date(cur.end);
        const diffInMs = endDate.getTime() - today.getTime();
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24)) / 7;

        if (diffInDays === 0) {
            console.log(1)
            return acc + cur.minutes;
        } else if (diffInDays < 0) {
            console.log(2)
            return acc; // goal is in the past
        }

        return acc + (cur.minutes / diffInDays); // spread goal over remaining days
    }, 0); // <-- initial value
}