/**
 * Activity 6a: Custom Hook — useLocalStorage
 *
 * Goal: Write a custom hook that syncs state with localStorage.
 *
 * Instructions:
 * 1. Import useState from React
 * 2. The hook accepts a `key` (string) and `initialValue` (T)
 * 3. Initialize state by reading from localStorage (if a value exists) or using initialValue
 * 4. Create a `setValue` function that:
 *    - Updates the React state
 *    - Writes the new value to localStorage as JSON
 * 5. Return [storedValue, setValue] — same shape as useState
 */

// TODO: Import useState from "react"

// TODO: Complete this custom hook
export function useLocalStorage<T>(_key: string, initialValue: T): [T, (value: T) => void] {
    // TODO: Initialize state by trying to read from localStorage:
    //   1. Try localStorage.getItem(key)
    //   2. If it exists, JSON.parse it and use as initial state
    //   3. If it doesn't exist, use `initialValue`

    // TODO: Create a setValue function that:
    //   1. Updates state with the new value
    //   2. Writes JSON.stringify(newValue) to localStorage under `key`

    // TODO: Replace this placeholder return with [storedValue, setValue]
    return [initialValue, () => {}];
}
