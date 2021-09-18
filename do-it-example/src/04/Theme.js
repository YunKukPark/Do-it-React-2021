export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

const breakpoints = {
  [BREAKPOINT_NAMES.LARGE]: 1128,
  [BREAKPOINT_NAMES.MEDIUM]: 744,
  [BREAKPOINT_NAMES.SMALL]: 327,
};

const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,
  [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1}px)`,
  print: '@media print',
};

export default {
  // COLOR
  color: {
    primary: '#03a9f4',
    secondary: '#795548',
    white: '#fff',
    gray: '#ccc',
    default: '#999',
  },

  // FONT SIZE
  size: {
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10,
  },

  // LINE HEIGHT
  lineHeight: {
    xg: '60px',
    lg: '54px',
    md: '36px',
    sm: '24px',
    xs: '18px',
  },

  // UNIT (길이 단위)
  unit: 4,

  // 반응형 미디어 속성
  responsive,
};
