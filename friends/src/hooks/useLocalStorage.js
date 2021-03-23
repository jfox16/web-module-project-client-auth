
import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {

  const [ data, setData ] = useState( window.localStorage.getItem(key) !== null ?
    JSON.parse(window.localStorage.getItem(key))
    : initialValue
  );

  useEffect(() => {
    window.localStorage.setItem( key, JSON.stringify(data) );
  }, [ key, data ]);

  return [ data, setData ];
}

export default useLocalStorage;