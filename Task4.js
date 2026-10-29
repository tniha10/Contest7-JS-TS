
function rankStudents(students) {
    // Sort students by score from highest to lowest
    const sortedStudents = [...students].sort((a, b) => b.score - a.score);
    let rank = 1;
    for (let i = 0; i < sortedStudents.length; i++) {
        // Update rank only when the score changes
        if (i > 0 && sortedStudents[i].score !== sortedStudents[i - 1].score) {
            rank = i + 1;
        }
        // Add rank to the student object
        sortedStudents[i] = {
            ...sortedStudents[i],
            rank: rank
        };
    }

    return sortedStudents;
}
