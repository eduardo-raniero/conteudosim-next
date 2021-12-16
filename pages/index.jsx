import { useState } from 'react';

// MATERIAL UI COMPONENTS
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { AppBar, TextField, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Grid, TextareaAutosize, Popover } from '@mui/material';

//CSS
import styles from '../styles/Home.module.scss'

//useForm
import useForm from '../src/useForm';

//validateInfo
import validateInfo from '../src/validateInfo';


export default function Home() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopOverId, setOpenedPopOverID] = useState(null);
  
  const { handleChange, values, handleSubmit, errors } = useForm(validateInfo);

  const handlePopoverOpen = (event, id) => {
    setAnchorEl(event.target);
    setOpenedPopOverID(id)
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpenedPopOverID(null)
  };

  const works = [
    {
      id: 1,
      link: "https://www.behance.net/gallery/90023813/Guia-de-Profissoes-2004",
      message: "Com 350.000 exemplares distribuídos gratuitamente, o 'Guia de Profissões' é uma publicação da UNESP. Clique para conhecer o projeto completo ->",
      img: "/works/first.jpg"
    },
    {
      id: 2,
      link: "https://www.behance.net/gallery/90024473/Coordenacao-2012-2013",
      message: "Com 10.000 exemplares distribuídos gratuitamente, publicado pela Secretaria de Estado da Educação. Clique para conhecer o projeto completo ->",
      img: "/works/second.jpg"
    },
    {
      id: 3,
      link: "https://www.behance.net/gallery/90023727/Coordenacao-2003-1-Semestre",
      message: "No total, 1.200 exemplares distribuídos para a comunidade acadêmica e científica da UNESP. Clique para conhecer o projeto completo ->",
      img: "/works/third.jpg"
    },
  ]

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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className={styles.appBar} position="static">
          <Toolbar sx={{ margin: "0 auto" , width: 7/10, alignItems:"center", justifyContent: "center", textAlign: "center" }} >
            <img src="/logo-cs.svg" alt="ConteúdoSim" />
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container justifyContent="center" textAlign="center" alignItems="center" className={styles.banner}>
        <Grid xl={4} lg={5} md={6} sm={7} xs={10} item className={styles.bannerText}>
          <Typography color="secondary" variant="h1" gutterBottom>
            ConteúdoSim
          </Typography>
          <Typography color="white" variant="body1" gutterBottom>
            Deixe a produção e coordenação de conteúdos por nossa conta. Sabemos <strong> o que e como fazer!</strong>
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" textAlign="center" alignItems="center" className={styles.services}>
        <Grid id="services" xl={12} lg={5} md={6} sm={7} xs={12} item className={styles.servicesText}>
          <Typography color="white" variant="h2" gutterBottom>
            Serviços
          </Typography>
        </Grid>

          <Grid container spacing={10} justifyContent="center">
            <Grid item xl={3} lg={4} md={4} sm={7} xs={10} className={styles.servicesItem}>
              <img loading="lazy" src="/icons/prod-cont.svg" alt="ConteúdoSim Site" />
              <Typography color="white" variant="h6">
               Produção de Conteúdo
              </Typography>
              <Typography color="white" variant="body1">
                Livros, Manuais, Redes Sociais e Materiais Corporativos
              </Typography>
            </Grid>
            
            <Grid item xl={3} lg={4} md={4} sm={7} xs={10} className={styles.servicesItem}>
            <img loading="lazy" src="/icons/coord.svg" alt="ConteúdoSim Site" />
              <Typography  color="white" variant="h6">
               Coordenação de Produção
              </Typography> 
              <Typography color="white" variant="body1">
                Articulação de Profissionais e Organização de Coleções
              </Typography>
            </Grid>
            
            <Grid item xl={3} lg={4} md={4} sm={7} xs={10}  className={styles.servicesItem}>
            <img loading="lazy" src="/icons/publi.svg" alt="ConteúdoSim Site" />
              <Typography color="white" variant="h6">
               Publicações
              </Typography>
              <Typography color="white" variant="body1">
                Supervisão, Contratação de Serviços {"&"} Eventos
              </Typography>
            </Grid>
          </Grid>

      </Grid>

      <Grid container justifyContent="center" textAlign="center" alignItems="center" className={styles.works}>
        <Grid id="works" xl={12} lg={5} md={6} sm={7} xs={12} item>
          <Typography  color="white" variant="h2" gutterBottom>
            Trabalhos
          </Typography>
        </Grid>

          <Grid container spacing={2} justifyContent="center">
            {works.map((item) => (
              <Grid item xl={3} lg={4} md={4} sm={7} xs={12} key={item.id} className={styles.worksItem}>
              <a target="_blank" href={item.link}>
                <img 
                  id={item.id}
                  src={item.img}
                  loading="lazy"
                  alt="ConteúdoSim Site Trabalhos"
                  aria-owns={openedPopOverId === item.id}
                  aria-haspopup="true"
                  onMouseEnter={(e) => handlePopoverOpen(e, item.id)}
                  onMouseLeave={(e) => handlePopoverClose(e, item.id)}
                />
                <Popover
                  sx={{
                    pointerEvents: 'none',
                  }}
                  open={openedPopOverId === item.id}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Typography sx={{ p: 1, maxWidth: "15rem", fontWeight: "400", fontFamily: "Merriweather" }}>{item.message}</Typography>
                </Popover>
              </a>
              </Grid>
            )
          )}
          </Grid>
      </Grid>

      <Grid container justifyContent="center" textAlign="center" alignItems="center" className={styles.form}>
        <Grid xl={12} lg={5} md={6} sm={7} xs={8} item className={styles.formText}>
          <Typography id="form" variant="h2" color="white">
            Vamos conversar!
          </Typography>
          <Typography variant="body1" color="white">
            Conte-me sobre sua ideia e vamos preenchê-la de <strong color="secondary">conteúdo!</strong> 
          </Typography>
        </Grid>
        
        <form onSubmit={handleSubmit} action="https://formsubmit.co/140f4f9d167962f8d3355bace87e6bdf" method="POST">
        <input type="hidden" name="_next" value="http://localhost:3000/obrigado" />
        <input type="hidden" name="_cc" value="silvacesarmucio@gmail.com" />
        <Grid container spacing={3} justifyContent="center" textAlign="center" alignItems="center">
            <Grid xl={4} lg={4} md={4} sm={7} xs={10} item>
              <TextField 
                type="text"
                placeholder="Seu nome"
                name="Nome"
                value={values.Nome}
                onChange={handleChange}
                onBlur={handleChange}
                color="secondary"
                fullWidth 
              />
              {errors.Nome && <small> {errors.Nome} </small>}
            </Grid>

            <Grid xl={4} lg={4} md={4} sm={7} xs={10} item>
              <TextField 
                type="text"
                placeholder="Seu email"
                name="Email"
                value={values.Email}
                onChange={handleChange}
                onBlur={handleChange}
                id="email"
                color="secondary"
                fullWidth 
              />
              {errors.Email && <small> {errors.Email} </small>}
            </Grid>

            <Grid xl={8} lg={8} md={8} sm={7} xs={10} item>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Diga-me como posso ajudar!"
                name="Mensagem"
                value={values.Mensagem}
                onChange={handleChange}
                onBlur={handleChange}
                id="message"
                fullWidth
                style={{
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: 100,
                  maxHeight: 130,
                  background: "#011633",
                  outline: "none",
                  borderRadius: "0.3rem",
                  fontFamily: "Merriweather",
                  fontWeight: 400,
                  padding: "0.8rem",
                  color: "white",
                }}
              />
              {errors.Mensagem && <small> {errors.Mensagem} </small>}
            </Grid>

            <Grid xl={8} lg={8} md={8} sm={7} xs={10} item>
                <Button type="submit" sx={{minWidth: "100%", padding:"0.8rem", marginBottom: "3rem"}} color="secondary" variant="contained">{isDisabled ? "Enviar" : "Enviando..." }</Button>
            </Grid>
        </Grid>
        </form>
      </Grid>

      <Grid container justifyContent="center" textAlign="center" alignItems="center" className={styles.footer}>
        <Grid xl={12} lg={8} md={8} sm={7} xs={10} item>
          <Typography variant="body2" gutterBottom>
           © 2021 ConteúdoSim 34.511.718/0001-64
          </Typography>       
        </Grid>
        
        <Grid xl={12} lg={8} md={8} sm={7} xs={10} className={styles.instagram} item>
          <a href="https://www.instagram.com/conteudosim_/" target="_blank">          
            <svg width="28" height="28" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8657 0.862626C23.3492 0.702262 24.4598 0.666626 33.3333 0.666626C42.2067 0.666626 43.3174 0.705232 46.7979 0.862626C50.2784 1.02002 52.6541 1.57535 54.7329 2.38014C56.9097 3.20275 58.8846 4.48863 60.5179 6.15166C62.1809 7.78202 63.4638 9.7539 64.2835 11.9337C65.0912 14.0124 65.6436 16.3882 65.804 19.8627C65.9643 23.3521 66 24.4628 66 33.3333C66 42.2067 65.9614 43.3174 65.804 46.8009C65.6466 50.2754 65.0912 52.6512 64.2835 54.73C63.4638 56.91 62.1788 58.8852 60.5179 60.5179C58.8846 62.1809 56.9097 63.4638 54.7329 64.2835C52.6541 65.0912 50.2784 65.6436 46.8038 65.804C43.3174 65.9643 42.2067 66 33.3333 66C24.4598 66 23.3492 65.9614 19.8657 65.804C16.3912 65.6466 14.0154 65.0912 11.9366 64.2835C9.75663 63.4637 7.78149 62.1787 6.14869 60.5179C4.48678 58.8866 3.20071 56.9123 2.38014 54.7329C1.57535 52.6541 1.02299 50.2784 0.862626 46.8038C0.702262 43.3144 0.666626 42.2038 0.666626 33.3333C0.666626 24.4598 0.705232 23.3492 0.862626 19.8687C1.02002 16.3882 1.57535 14.0124 2.38014 11.9337C3.20192 9.75414 4.48898 7.77998 6.15166 6.14869C7.78214 4.48714 9.7553 3.20109 11.9337 2.38014C14.0124 1.57535 16.3882 1.02299 19.8627 0.862626H19.8657ZM46.5336 6.74263C43.0887 6.58523 42.0553 6.55257 33.3333 6.55257C24.6113 6.55257 23.5778 6.58523 20.133 6.74263C16.9465 6.88814 15.2181 7.41972 14.0659 7.86814C12.5424 8.46208 11.4526 9.1659 10.3092 10.3092C9.22543 11.3636 8.39134 12.6472 7.86814 14.0659C7.41972 15.2181 6.88814 16.9465 6.74263 20.133C6.58523 23.5778 6.55257 24.6113 6.55257 33.3333C6.55257 42.0553 6.58523 43.0887 6.74263 46.5336C6.88814 49.7201 7.41972 51.4484 7.86814 52.6007C8.39081 54.0172 9.22529 55.3031 10.3092 56.3574C11.3635 57.4413 12.6494 58.2758 14.0659 58.7984C15.2181 59.2469 16.9465 59.7784 20.133 59.924C23.5778 60.0814 24.6083 60.114 33.3333 60.114C42.0583 60.114 43.0887 60.0814 46.5336 59.924C49.7201 59.7784 51.4484 59.2469 52.6007 58.7984C54.1241 58.2045 55.214 57.5007 56.3574 56.3574C57.4413 55.3031 58.2758 54.0172 58.7984 52.6007C59.2469 51.4484 59.7784 49.7201 59.924 46.5336C60.0814 43.0887 60.114 42.0553 60.114 33.3333C60.114 24.6113 60.0814 23.5778 59.924 20.133C59.7784 16.9465 59.2469 15.2181 58.7984 14.0659C58.2045 12.5424 57.5007 11.4526 56.3574 10.3092C55.3029 9.2255 54.0193 8.39143 52.6007 7.86814C51.4484 7.41972 49.7201 6.88814 46.5336 6.74263V6.74263ZM29.1609 43.4035C31.4911 44.3735 34.0858 44.5044 36.5017 43.7739C38.9177 43.0434 41.0052 41.4967 42.4075 39.3981C43.8099 37.2995 44.4401 34.7792 44.1906 32.2675C43.9412 29.7558 42.8274 27.4087 41.0397 25.6269C39.9 24.488 38.522 23.6159 37.0048 23.0734C35.4877 22.531 33.8691 22.3316 32.2657 22.4898C30.6622 22.6479 29.1138 23.1596 27.7319 23.988C26.3499 24.8165 25.1688 25.941 24.2736 27.2806C23.3785 28.6203 22.7914 30.1417 22.5548 31.7355C22.3182 33.3292 22.4379 34.9556 22.9053 36.4976C23.3727 38.0395 24.1762 39.4586 25.2579 40.6528C26.3395 41.8469 27.6725 42.7864 29.1609 43.4035ZM21.4604 21.4604C23.0196 19.9013 24.8706 18.6645 26.9078 17.8207C28.9449 16.9769 31.1283 16.5425 33.3333 16.5425C35.5383 16.5425 37.7217 16.9769 39.7588 17.8207C41.796 18.6645 43.647 19.9013 45.2061 21.4604C46.7653 23.0196 48.0021 24.8706 48.8459 26.9078C49.6897 28.9449 50.124 31.1283 50.124 33.3333C50.124 35.5383 49.6897 37.7217 48.8459 39.7588C48.0021 41.796 46.7653 43.647 45.2061 45.2061C42.0573 48.355 37.7865 50.124 33.3333 50.124C28.8801 50.124 24.6093 48.355 21.4604 45.2061C18.3116 42.0573 16.5426 37.7865 16.5426 33.3333C16.5426 28.8801 18.3116 24.6093 21.4604 21.4604V21.4604ZM53.848 19.0431C54.2343 18.6786 54.5436 18.2403 54.7576 17.7542C54.9715 17.268 55.0858 16.7439 55.0935 16.2128C55.1012 15.6817 55.0023 15.1544 54.8027 14.6622C54.603 14.1701 54.3066 13.7229 53.931 13.3473C53.5554 12.9718 53.1083 12.6754 52.6161 12.4757C52.1239 12.276 51.5967 12.1771 51.0656 12.1848C50.5345 12.1926 50.0103 12.3068 49.5242 12.5208C49.038 12.7347 48.5997 13.044 48.2352 13.4304C47.5264 14.1818 47.1383 15.1799 47.1534 16.2128C47.1684 17.2457 47.5854 18.232 48.3159 18.9625C49.0463 19.6929 50.0327 20.1099 51.0656 20.125C52.0984 20.14 53.0965 19.7519 53.848 19.0431V19.0431Z"/>
            </svg>
          </a>

        </Grid>

      </Grid>

    </ThemeProvider>
  )
}
