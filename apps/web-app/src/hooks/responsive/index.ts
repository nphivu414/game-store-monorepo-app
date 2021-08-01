import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const isSmallBreakPoint = useMediaQuery({ minWidth: 640 });
  const isMediumBreakPoint = useMediaQuery({ minWidth: 768 });
  const isLargeBreakPoint = useMediaQuery({ minWidth: 1024 });
  const isXLBreakPoint = useMediaQuery({ minWidth: 1280 });
  const is2XLBreakPoint = useMediaQuery({ minWidth: 1536 });

  return {
    is2XLBreakPoint,
    isXLBreakPoint,
    isLargeBreakPoint,
    isMediumBreakPoint,
    isSmallBreakPoint,
  };
};
