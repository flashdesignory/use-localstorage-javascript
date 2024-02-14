export type UseLocalStorageOptions<T> = {
    key: string;
    initialValue: T;
}

export type UseLocalStorageAPI<T> = {
    getItem: () => T;
    setItem: (value: T) => void;
}

export const useLocalStorage = <T>({ key, initialValue } : UseLocalStorageOptions<T>): UseLocalStorageAPI<T> => {
  if (!key) {
    throw new Error('A valid key should be provided to useLocalStorage.');
  }

  function getItem () {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage from "${key}": `, error);
      return initialValue;
    }
  }


  function setItem (value: T) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Error writing localStorage to "${key}": `, error);
    }
  }

  return ({ getItem, setItem });
}
