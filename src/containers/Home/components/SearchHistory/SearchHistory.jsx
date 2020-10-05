import React from 'react';

import useSearchHistory from 'hooks/useSearchHistory';

function SearchHistory() {
  const [, { items }] = useSearchHistory();

  return items.map(item => <span key={item}>{item}</span>);
}

export default SearchHistory;
