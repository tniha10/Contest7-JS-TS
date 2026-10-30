/**Given an array of undirected friendships represented as pairs of names [person1, person2], and a startPerson, return the total number of people in the connected network starting from startPerson (including startPerson themselves).

Friendships are mutual. If person A is friends with B, and B is friends with C, then A, B, and C are all in the same connected network.

If startPerson has no listed friendships, the size of their network is 1 (just themselves).

Examples

countConnectedFriends([["Alice", "Bob"], ["Bob", "Charlie"], ["David", "Eve"]], "Alice");
// Output: 3
countConnectedFriends([["Alice", "Bob"], ["Charlie", "David"]], "Eve");
// Output: 1

Example 1
Input: friendships = [["Alice","Bob"],["Bob","Charlie"],["David","Eve"]], startPerson = "Alice"
Output: 3
Explanation: Alice is connected to Bob, and Bob is connected to Charlie. Total connected network size is 3.

Example 2
Input: friendships = [["Alice","Bob"],["Charlie","David"]], startPerson = "Eve"
Output: 1
Explanation: Eve has no friends in the list, so only Eve is in her network (size 1).

Constraints
0 <= friendships.length <= 1000
Each element of friendships is a pair of non-empty strings.
startPerson is a non-empty string. */


function countConnectedFriends(friendships, startPerson) {
    const graph = new Map();

    // Build the friendship network
    for (const [person1, person2] of friendships) {
        if (!graph.has(person1)) {
            graph.set(person1, []);
        }

        if (!graph.has(person2)) {
            graph.set(person2, []);
        }

        // Friendships work in both directions
        graph.get(person1).push(person2);
        graph.get(person2).push(person1);
    }

    // Keep track of visited people
    const visited = new Set();
    const stack = [startPerson];

    // Explore all connected friends
    while (stack.length > 0) {
        const person = stack.pop();

        if (visited.has(person)) {
            continue;
        }

        visited.add(person);

        const friends = graph.get(person) || [];

        for (const friend of friends) {
            if (!visited.has(friend)) {
                stack.push(friend);
            }
        }
    }
    return visited.size;
}
