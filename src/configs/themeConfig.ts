export const lightTheme = {
    colors: {
      background: '#DDD',
      text: '#121212',
      primary: '#7695EC',
      secondary: '#4D8BF7',
      danger: '#ef4444',
      white: '#fff',
      black: '#000',
      gray: '#777',
      success: '#28A745'
    },
    spacing: {
      sm: '8px',
      md: '16px',
      lg: '24px',
    },
    font: {
      family: "'Roboto', sans-serif",
      size: {
        sm: '16px',
        md: '18px',
        lg: '22px',
      },
    },
    Breakpoints: {
      xs: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px'
    }
  };
  
  
export type Theme = typeof lightTheme;
  