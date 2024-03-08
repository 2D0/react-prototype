import { useEffect, useState } from 'react';
import { useGetData } from 'src/hooks';

const useInfiniteScroll = ({
  pathName,
  valueName,
  limitValue,
  ref,
}: {
  pathName: string;
  valueName: string;
  limitValue: number;
  ref: any;
}) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { getData, getDataHandler } = useGetData({
    pathName: `${pathName}?page=${page}&limit=${limitValue}`,
    valueName: valueName,
  });
  const [listItem, setListItem] = useState<any>();

  const infiniteScroll = () => {
    const { innerHeight } = window;
    const { scrollTop } = document.documentElement;
    const { offsetHeight } = ref.current;

    if (innerHeight + scrollTop + 50 > offsetHeight || loading) {
      setLoading(true);

      getDataHandler({
        successHandler: resolve => {
          setPage(prevPage => prevPage + 1);
          resolve.data[valueName] &&
            setListItem(prevItems => [
              ...prevItems,
              ...resolve.data[valueName],
            ]);
          setLoading(false);
        },
      });
    }
  };

  useEffect(() => {
    setListItem(listItem);
  }, [listItem]);

  useEffect(() => {
    const { addEventListener, removeEventListener } = window;

    addEventListener('scroll', infiniteScroll);

    return () => {
      removeEventListener('scroll', infiniteScroll);
    };
  }, []);

  return { listItem, getData };
};
export default useInfiniteScroll;
