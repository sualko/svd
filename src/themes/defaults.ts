import { ThemeOptions } from "@mui/material";

export const themeDefaults: ThemeOptions = {
    components: {
        MuiButton: {
          defaultProps: {
            variant: 'contained'
          }
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
                {
                  display: 'none',
                },
              '& input[type=number]': {
                MozAppearance: 'textfield',
              },
            },
          },
        }
      }
};
