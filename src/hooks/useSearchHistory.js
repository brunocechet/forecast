import { useState, useCallback, useEffect } from 'react';

import { useLocalStorage } from 'react-use';

const LOCALSTORAGE_KEY = 'forecast-history';

function useSearchHistory() {
  const [localStorageItems, setLocalStorageItems] = useLocalStorage(LOCALSTORAGE_KEY, []);
  const [stateItems, setStateItems] = useState(localStorageItems);

  useEffect(() => {
    setLocalStorageItems(stateItems);
  }, [setLocalStorageItems, stateItems]);

  const handleAddNewItem = useCallback(
    newItem => {
      setStateItems(oldItems => {
        // eslint-disable-next-line prefer-const
        let newItems = oldItems.filter(item => item !== newItem);
        newItems.unshift(newItem);
        newItems.splice(5);

        return newItems;
      });
    },
    [setStateItems]
  );

  const handleRemoveItem = useCallback(
    removeItem => {
      setStateItems(oldItems => {
        const newItems = oldItems.filter(item => item !== removeItem);

        return newItems;
      });
    },
    [setStateItems]
  );

  return { items: stateItems, add: handleAddNewItem, remove: handleRemoveItem };
}

export default useSearchHistory;
