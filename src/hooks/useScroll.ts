import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';

const SCROLL = 'scroll';
const UP = 'up';
const DOWN = 'down';

interface IScrollState {
  hide: boolean;
  scrollDirection?: typeof UP | typeof DOWN;
  pageYOffset: number;
}

const useScroll = (): [
  IScrollState,
  Dispatch<SetStateAction<IScrollState>>,
] => {
  const [scorllState, setScrollState] = useState<IScrollState>({
    hide: false,
    scrollDirection: DOWN,
    pageYOffset: 0,
  });

  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;

    const deltaY = pageYOffset - scorllState.pageYOffset;
    const hide = (deltaY >= 0 ? true : false) && pageYOffset > 100;

    setScrollState({ hide, pageYOffset });
  }, []);

  useEffect(() => {
    window.addEventListener(SCROLL, handleScroll);
    return () => {
      window.removeEventListener(SCROLL, handleScroll);
    };
  }, []);

  return [scorllState, setScrollState];
};

export default useScroll;
