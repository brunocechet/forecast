import { useCallback } from 'react';

import { useLocalStorage } from 'react-use';

const LOCALSTORAGE_KEY = 'forecast-history';

function useSearchHistory() {
  const [items, setItems] = useLocalStorage(LOCALSTORAGE_KEY, []);

  const handleAddNewItem = useCallback(
    newItem => {
      setItems(oldItems => {
        // eslint-disable-next-line prefer-const
        let newItems = oldItems.filter(item => item !== newItem);
        newItems.unshift(newItem);
        newItems.splice(5);

        return newItems;
      });
    },
    [setItems]
  );

  return [handleAddNewItem, { items }];
}

export default useSearchHistory;
