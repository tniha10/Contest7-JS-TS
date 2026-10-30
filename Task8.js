/**Given an array of tasks where each task is represented as [start, finish], return the maximum number of tasks a single person can complete without any overlapping intervals.

Two tasks overlap if one starts before the other finishes (i.e. start2 < finish1 when start1 <= start2). However, a task that starts at the exact same time another task finishes (e.g., [1, 3] and [3, 5]) is considered non-overlapping.

Examples
Example 1
maxTasks([[1, 4], [2, 3], [3, 5], [7, 9]]);
// Output: 3
Explanation: Selecting tasks [2, 3], [3, 5], and [7, 9] yields 3 non-overlapping tasks.

Example 2
maxTasks([[1, 2], [2, 3], [3, 4]]);
// Output: 3
Explanation: All three tasks can be completed because each task starts at or after the previous task's finish time.

Example 1
Input: tasks = [[1,4],[2,3],[3,5],[7,9]]
Output: 3
Explanation: Example 1 from description.

Example 2
Input: tasks = [[1,2],[2,3],[3,4]]
Output: 3
Explanation: Example 2 from description.

Constraints
0 <= tasks.length <= 1000
tasks[i].length == 2
-10^9 <= start < finish <= 10^9*/


function maxTasks(tasks) {
    // Sort tasks by their finishing time
    tasks.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastFinish = -Infinity;

    for (let task of tasks) {
        let start = task[0];
        let finish = task[1];

        // Select the task if it does not overlap
        if (start >= lastFinish) {
            count++;
            lastFinish = finish;
        }
    }

    return count;
}
