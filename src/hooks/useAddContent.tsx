import { useState } from 'react';

const useAddContent = limitValue => {
  const [lastIndex, setLastIndex] = useState(limitValue);

  const addContentHandler = () => {
    setLastIndex(lastIndex + limitValue);
  };

  return { lastIndex, addContentHandler };
};
export default useAddContent;
