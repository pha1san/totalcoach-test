import { DependencyList, useCallback, useEffect, useState } from "react";
/**
 * Custom hook to handle asynchronous operations.
 * @param {Function} callback - The asynchronous function to be executed.
 * @param {Array} dependencies - List of dependencies for the useEffect hook.
 * @returns {Object} - An object containing loading state, error, and value.
 */
const useAsync = <T>(callback: () => Promise<T>, dependencies: DependencyList = []) => {
  const [loading, setLoading] = useState<boolean>(true); // State for loading status
  const [error, setError] = useState<unknown>(); // State for storing any error that occurs during the async operation
  const [value, setValue] = useState<T>(); // State for storing the result of the async operation

  const callbackMemoized = useCallback(() => {
    // Set loading to true before the async operation starts
    setLoading(true);

    // Clear any previous errors and value
    setError(undefined);
    setValue(undefined);

    // Execute the callback and handle the promise
    callback()
      .then(setValue)
      .catch(setError) // Set the error if the promise rejects
      .finally(() => setLoading(false)); // Set loading to false once the promise is settled
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
};

export default useAsync;
