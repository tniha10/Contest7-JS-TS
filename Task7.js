/**Given a list of booked time intervals and a working-day time range, return all available time intervals when no booking exists. All time values are numbers representing points in time (e.g., minutes from midnight).

Booked intervals may overlap with each other or extend beyond the working hours. The output should be a list of non-overlapping intervals, sorted by their start times.

Examples
findFreeTime([[10, 12], [14, 16]], [9, 17]);
// Expected output: [[9, 10], [12, 14], [16, 17]]

findFreeTime([[10, 12], [14, 16], [11, 15]], [9, 17]);
// Expected output: [[9, 10], [16, 17]]
// Explanation: [10, 12], [11, 15], and [14, 16] merge into one booked block [10, 16]
// .
Example 1
Input: bookedIntervals = [[10,12],[14,16]], workingHours = [9,17]
Output: [[9,10],[12,14],[16,17]]

Example 2
Input: bookedIntervals = [[10,12],[14,16],[11,15]], workingHours = [9,17]
Output: [[9,10],[16,17]]

Constraints
Time values are non-negative numbers.
Intervals `[start, end]` always have `start < end`.
The `workingHours` array will always be a valid interval `[start, end]`.
The output intervals must be sorted by start time and be non-overlapping. */


function findFreeTime(bookedIntervals, workingHours) {
    const [workStart, workEnd] = workingHours;
    const validBookings = [];

    for (let interval of bookedIntervals) {
        const start = Math.max(interval[0], workStart);
        const end = Math.min(interval[1], workEnd);

        if (start < end) {
            validBookings.push([start, end]);
        }
    }

    validBookings.sort((a, b) => a[0] - b[0]);
    const freeTime = [];
    let currentTime = workStart;

    for (let interval of validBookings) {
        const start = interval[0];
        const end = interval[1];

        if (currentTime < start) {
            freeTime.push([currentTime, start]);
        }
        currentTime = Math.max(currentTime, end);
    }
    
    if (currentTime < workEnd) {
        freeTime.push([currentTime, workEnd]);
    }

    return freeTime;
}
