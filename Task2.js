
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
