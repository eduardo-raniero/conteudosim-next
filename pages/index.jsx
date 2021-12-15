import { useState, useEffect } from 'react';

// MATERIAL UI COMPONENTS
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { AppBar, SliderValueLabelUnstyled, TextField, Toolbar } from '@mui/material';
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
        
        <form onSubmit={handleSubmit} action="https://formsubmit.co/eduardoraniero@gmail.com" method="POST">
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
                autoFocus={true}
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
          <Typography variant="body2">
           © 2021 ConteúdoSim 34.511.718/0001-64
          </Typography>       
        </Grid>

      </Grid>

    </ThemeProvider>
  )
}
