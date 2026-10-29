/** Given an initial notification count initialCount and an array of event objects events, return the final notification badge count.
Each event in events is an object with a type property ("ADD", "READ", or "CLEAR") and an optional count property (a positive integer, defaulting to 1 if omitted).
Process the events in order:

"ADD": Increase the notification count by count (or 1 if count is omitted).
"READ": Decrease the notification count by count (or 1 if count is omitted). The count cannot drop below 0. If decreasing it would result in a negative number, set it to 0.
"CLEAR": Reset the notification count to 0.
Examples

Example 1
updateNotificationCount(2, [
  { type: "ADD", count: 3 },
  { type: "READ", count: 1 }
]);
// Returns 4

Example 2
updateNotificationCount(5, [
  { type: "READ", count: 10 },
  { type: "ADD", count: 2 },
  { type: "CLEAR" }
]);
// Returns 0

Example 1
Input: initialCount = 2, events = [{"count":3,"type":"ADD"},{"count":1,"type":"READ"}]
Output: 4
Explanation: Starts at 2, adds 3 (5), reads 1 (4).

Example 2
Input: initialCount = 5, events = [{"count":10,"type":"READ"},{"count":2,"type":"ADD"},{"type":"CLEAR"}]
Output: 0
Explanation: Starts at 5, reads 10 (clamped to 0), adds 2 (2), clears (0).

Constraints
0 <= initialCount <= 10^5
0 <= events.length <= 1000
1 <= event.count <= 10^5 when provided
 */

function updateNotificationCount(initialCount, events) {
    let notificationCount = initialCount;

    for (let event of events) {
        // If count is missing, use 1
        let amount = event.count !== undefined ? event.count : 1;

        if (event.type === "ADD") {
            notificationCount += amount;
        }
        else if (event.type === "READ") {
            // Make sure notification count never goes below 0
            notificationCount = Math.max(0, notificationCount - amount);
        }
        else if (event.type === "CLEAR") {
            notificationCount = 0;
        }
    }

    return notificationCount;
}
