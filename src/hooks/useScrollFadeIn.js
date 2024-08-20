import { useCallback, useEffect, useRef } from 'react';

// 사용을 원하는 컴포넌트에서 아래처럼 작성해주면 됩니다
//  const animation = useScrollFadeIn();
//  <S.Container {...animation}></S.Container>

const useScrollFadeIn = ({ threshold = 0.0, initialOffset = '30%' } = {}) => {
  const ref = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = ref;

    if (entry.isIntersecting) {
      const element = current.style;
      element.transitionProperty = 'opacity, transform';
      element.transitionDuration = '1.2s';
      element.transitionTimingFunction = 'cubic-bezier(0, 0, 1, 1)';
      element.transitionDelay = '0s';
      element.opacity = 1;
      element.transform = 'translate3d(0, 0, 0)';
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold });
    const { current } = ref;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.disconnect();
    };
  }, [handleScroll, threshold]);

  return {
    ref: ref,
    style: {
      opacity: 0,
      transform: `translate3d(0, ${initialOffset}, 0)`,
    },
  };
};

export default useScrollFadeIn;
