const getLast12MonthsDaysList = () => {
    const currentDate = new Date(); // Get today's date
    const daysList: string[] = [];

    // Loop over each day in the last 12 months
    for (let i = 0; i < 12; i++) {
        // Get the first day of the month starting from today
        const currentMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        const lastDayOfMonth = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 0);

        // Get all days in that month, starting from the 1st to the last day
        for (let day = lastDayOfMonth.getDate(); day >= 1; day--) {
            const dayDate = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), day);

            // Get ISO format of the date (YYYY-MM-DDT00:00:00Z)
            const isoFormattedDate = dayDate.toISOString();
            daysList.push(isoFormattedDate);
        }
    }

    return daysList.reverse();
}
export default getLast12MonthsDaysList