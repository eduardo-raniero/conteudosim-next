import { useEffect } from 'react'
import { useRouter } from 'next/router'

//MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Typography, Grid} from '@mui/material';

//CSS
import styles from '../styles/Thanks.module.scss'

// OVERIDES THE DEFAULT THEME
  const theme = createTheme({
    palette: {
      mode: 'dark',
      common: {
        white: '#f2f2f2'
      },
      primary: {
        main: '#022859'
      },
      secondary: {
        main: "#02A247"
      },
    },
    typography: {
      fontFamily: "Lora",
      fontWeightBold: 800,
      h2:{
        fontWeight: 300
      },
      button: {
        fontFamily: "Merriweather"
      }
    }
  })

export default function errorPage() {

    const router = useRouter();

    useEffect(() => {
      setTimeout(() => {
         // router.go(-1)
         router.push('/')
      }, 3000);
    }, []);
  

    return(
        <ThemeProvider theme={theme}>
            <Grid className={styles.container} textAlign="center" justifyContent="center" alignItems="center" container>
                <Grid xl={12} lg={12} md={12} sm={12} xs={12} item>
                    <Typography variant="h2" color="white" gutterBottom>
                        <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.5 63C14.1026 63 0 48.8974 0 31.5C0 14.1026 14.1026 0 31.5 0C48.8974 0 63 14.1026 63 31.5C62.9811 48.888 48.888 62.9811 31.5 63ZM28.35 40.95V47.25H34.65V40.95H28.35ZM28.35 15.75V34.65H34.65V15.75H28.35Z" fill="#A30E02"/>
                        </svg>
                    </Typography>
                </Grid>
                
                <Grid xl={12} lg={12} md={12} sm={12} xs={12} item>
                    <Typography variant="h2" color="white" gutterBottom>
                        Página não encontrada!
                    </Typography>
                </Grid>

                <Grid xl={4} lg={5} md={6} sm={7} xs={8} item>
                    <Typography variant="body1" color="white">
                        Você está sendo redirecionado para página inicial.
                    </Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}