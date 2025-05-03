export const lightTheme = {
    colors: {
      background: '#DDD',
      text: '#121212',
      primary: '#7695EC',
      danger: '#ef4444',
      white: '#fff'
    },
    spacing: {
      sm: '8px',
      md: '16px',
      lg: '32px',
    },
    font: {
      family: "'Inter', sans-serif",
      size: {
        sm: '14px',
        md: '16px',
        lg: '20px',
      },
    },
  };
  
export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#121212',
    text: '#fff',
  },
};
  
export type Theme = typeof lightTheme;
  