Two Pointers
    Use this instead of nested array searches
    For example in a two sum question, when the answer is found by combining two numbers in an array in some way
        Find numbers that add up to a certain number
        Or 3 or more numbers that equal zero when subtracted
    Arrays can often be sorted, so take advantage of that
    If you know the answer is going to be nearer to the end of an array, start by comparing the start of the list with the end, not starting with the first index and going to the second, then third...
    Compare 3 numbers - e.g. which numbers in an array can be used to make a triangle?

Sliding Window
    Find a group of values, not just one
    e.g. find a series on values in an array that meet a condition
    a dictionary variable can store which set of values we are looking at - i.e. the window
        increment - move the end pointer and add the next index to the dictionary
        increment until you reach the max length of the window/dictionary
        remove the first index of the dictionary
    e.g
        -Write a function to return the length of the longest substring in a provided string s where all characters in the substring are distinct.
        -Write a function to find the length of the longest substring containing the same letter in a given string s, after performing at most k operations in which you can choose any character of the string and change it to any other uppercase English letter.


Intervals
    As in, an interval of time - the space between number
    If I'm free between 1-3 and Dave is free between 2-4, we can have a meeting at 2:00.

Stack
    Like a stack of plates - it's easy to add one on top and take off the top one.
    This is like push and pop methods.
    Last in, first out (LIFO)
    e.g.
        Valid parentheses - check if each parentheses or quotation mark is open and closed.
        You can check the first index of the string, and see if it is the same as the last.  If so, pop the last index, move to the next index, and check if the next index is a parentheses/quote

Linked List
    A list of nodes where one node is related to the next
    Fast and slow - we take two pointers as iterators... one advances +1 each time and one +2... when the fast one (+2) reaches the end of the list, the slow on is in the middle (if it's even, it's on the second of the even ones).  If it's a cycle, the fast and slow pointers will eventually point to the same node.
    e.g. reverse a list, merge list

Binary Search
    Search a sorted array
    Repeatedly cut the array in half

Heaps
    An array where the smallest value is always first and each next value is smaller than or equal to the previous.
    A sorted array is how a heap can be represented/stored, but it can slo be represetned as a complete binary tree.
    min-heap - smallest value is first
    max-heap - largest value is firts
    Each level of the tree is filled in front left to right
    push, bubble up to add new values
    pop - removes minimum value
    heapify - turn a list into a heap

Depth-first search
    Go all the way down a stack/tree first.
    Uses recursive functions

Breadth-first search
    Search first level before going down to next level

Backtracking
    Checks nearest adjacent value, then backtracks if it is the wrong kind of value.
    Like a computer finding its way in a maze, backing up to where it was before whenever it hits a dead end.
    Or searching a binary tree for which sequence of numbers add up to a certain value.

Graphs - Topological Sort
    indegrees - the number of incoming edges to a point
    e.g. calculate how many indegrees a node has
    Kahn's algorithm - put values into an array, sorted by their number of indegrees

Dynamic Programming
    Optimal substrucute - when a problem can be solved with recursion 
    Dynamic programming - recursive functions often mean you are doing the same problem(s) more than once, so we use...
    Overlapping subproblems - instead of solving those problems again, you store the solutions to be used later.
    Memoization - the computer stores results each time the recursive function is run.
    Add a variable to use as a cache to store results of memoization: 
        memo = {}
    Memoization is the top-down approach.
    The bottom-up approach is... not recursion.  We start with the most basic solutions because those are easy, and we can move up from there.

Greedy Algorithms
    By making a locally optimal choice, we can arrive at a globally optimal solution.
    e.g. give the greedy child the smallest amount of cookies to satisfy their greed
    No backtracking - we remove the local values when we make the choice

Trie
    Seeing possibilities for how a string can be completed.
    e.g. BA might end with TS or LL (BATS, BALL)
    Each node has a character and a boolean saying if it's the end of a word.
    Tries do three operations:
        Search, Insert, and Delete
    Define a trie as a class that has methods for search, insert, delete.

Prefix Sum
    Given an array of integers, this calculates the sum of a given subarray
    If you know the sum of the subarray before it (prefix) and the sum of the two subarrays together, you know the sum of the second subarray





