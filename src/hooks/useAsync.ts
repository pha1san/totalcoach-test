import { useCallback, useEffect, useState } from "react";

const useAsync = <T>(callback: () => Promise<T>, dependencies = []) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [value, setValue] = useState<T>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
};

export default useAsync;
