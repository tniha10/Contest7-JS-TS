
function formatCountdown(totalSeconds) {
    // Calculate the total number of whole hours
    const hours = Math.floor(totalSeconds / 3600);

    // Calculate the remaining whole minutes
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    // Calculate the remaining seconds
    const seconds = totalSeconds % 60;

    // Add leading zeros when needed
    const HH = String(hours).padStart(2, "0");
    const MM = String(minutes).padStart(2, "0");
    const SS = String(seconds).padStart(2, "0");

    // Return the formatted time
    return `${HH}:${MM}:${SS}`;
}
