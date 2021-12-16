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

export default function thanksPage() {

    const router = useRouter();

    useEffect(() => {
      setTimeout(() => {
         // router.go(-1)
         router.push('/')
      }, 5000);
    }, []);
  

    return(
        <ThemeProvider theme={theme}>
            <Grid className={styles.container} textAlign="center" justifyContent="center" alignItems="center" container>
                <Grid xl={12} lg={12} md={12} sm={12} xs={12} item>
                    <Typography variant="h2" color="white" gutterBottom>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M64 32C64 40.4869 60.6286 48.6263 54.6274 54.6274C48.6263 60.6286 40.4869 64 32 64C23.5131 64 15.3737 60.6286 9.37258 54.6274C3.37142 48.6263 0 40.4869 0 32C0 23.5131 3.37142 15.3737 9.37258 9.37258C15.3737 3.37142 23.5131 0 32 0C40.4869 0 48.6263 3.37142 54.6274 9.37258C60.6286 15.3737 64 23.5131 64 32V32ZM48.12 19.88C47.8343 19.5953 47.4941 19.3711 47.1197 19.2209C46.7454 19.0706 46.3446 18.9974 45.9413 19.0056C45.538 19.0139 45.1405 19.1033 44.7726 19.2687C44.4047 19.434 44.0739 19.6719 43.8 19.968L29.908 37.668L21.536 29.292C20.9673 28.7621 20.2151 28.4736 19.4379 28.4873C18.6607 28.501 17.9192 28.8159 17.3695 29.3655C16.8199 29.9152 16.505 30.6567 16.4913 31.4339C16.4776 32.2111 16.7661 32.9633 17.296 33.532L27.88 44.12C28.1651 44.4046 28.5047 44.6289 28.8783 44.7794C29.252 44.93 29.6522 45.0037 30.055 44.9962C30.4578 44.9888 30.8549 44.9002 31.2228 44.736C31.5906 44.5717 31.9216 44.335 32.196 44.04L48.164 24.08C48.7084 23.514 49.0091 22.7571 49.0016 21.9718C48.9941 21.1866 48.6791 20.4355 48.124 19.88H48.12Z" fill="#02A247"/>
                    </svg>
                    </Typography>
                </Grid>
                
                <Grid xl={12} lg={12} md={12} sm={12} xs={12} item>
                    <Typography variant="h2" color="white" gutterBottom>
                        E-mail enviado com sucesso!
                    </Typography>
                </Grid>

                <Grid xl={4} lg={5} md={6} sm={7} xs={8} item>
                    <Typography variant="body1" color="white">
                        Em breve entraremos em contato através do E-mail que você forneceu!
                    </Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}