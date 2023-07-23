import React, { useState, useEffect } from "react";
import ServiceItem from "./ServiceItem";
import { servicesGetAll } from "../services/service";
import axios from "axios";
import {
  Box,
  Paper,
  Toolbar,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  OutlinedInput,
  Typography,
} from "@mui/material";
const categories = [
  "Desarrollo Mobil",
  "Desarrollo Web",
  "Diseño de Logo",
  "Diseño Grafico",
  "Diseño UX/UI",
  "Diseño Web",
  "Edicion de Audio",
  "Edicion de Video",
  "Fotografía",
  "Marketing",
  "Musica",
  "Tutoria",
  "Otro",
];
export default function ServicesList({ loged, user }) {
  const [services, setServices] = useState([
    {
      title: "Diseño Gráfico Creativo",
      category: "Diseño y Multimedia",
      user: "creativo123",
      price: "$50 por proyecto",
      description:
        "Déjame dar vida a tus ideas con diseños gráficos creativos y atractivos. Desde logotipos y banners hasta ilustraciones personalizadas, estoy listo para hacer que tu marca destaque en el mercado.",
    },
    {
      title: "Desarrollo Web Profesional",
      category: "Desarrollo y Programación",
      user: "webmaster456",
      price: "$300 por proyecto",
      description:
        "Construyo sitios web a medida para llevar tu presencia en línea al siguiente nivel. Ya sea un sitio informativo, una tienda en línea o una plataforma interactiva, puedo convertir tus visiones en una realidad funcional y estéticamente agradable.",
    },
    {
      title: "Redacción de Contenidos SEO",
      category: "Escritura y Traducción",
      user: "contentguru789",
      price: "$30 por artículo",
      description:
        "Optimiza tu sitio web con contenido atractivo y amigable para SEO. Con habilidades en palabras clave y redacción persuasiva, puedo ayudarte a alcanzar un mayor tráfico y una clasificación más alta en los motores de búsqueda.",
    },
    {
      title: "Asesoría Financiera Personalizada",
      category: "Negocios y Finanzas",
      user: "financepro987",
      price: "$80 por hora de consulta",
      description:
        "Obtén una guía financiera adaptada a tus objetivos y necesidades específicas. Como experto en finanzas, te ayudaré a planificar tu futuro, gestionar inversiones y alcanzar una estabilidad financiera duradera.",
    },
    {
      title: "Traducción Profesional Inglés-Español",
      category: "Escritura y Traducción",
      user: "translator567",
      price: "$0.08 por palabra",
      description:
        "Confía en mí para traducir tus documentos con precisión y fluidez. Mi enfoque profesional garantiza que cada mensaje y significado se transmitan adecuadamente, sin importar el área temática.",
    },
    {
      title: "Estrategias de Marketing Digital",
      category: "Marketing y Publicidad",
      user: "marketingexpert321",
      price: "$250 por campaña",
      description:
        "Aprovecha mi experiencia en marketing digital para crear campañas impactantes que impulsen la visibilidad de tu marca y atraigan a nuevos clientes. Desde estrategias de redes sociales hasta campañas de correo electrónico, estoy aquí para ayudarte a alcanzar tus metas.",
    },
    {
      title: "Marketing de Contenidos",
      category: "Marketing y Publicidad",
      user: "contentmaster",
      price: "$40 por artículo",
      description:
        "Crea una estrategia de marketing de contenidos efectiva para atraer y retener a tu audiencia. Contenido de calidad que impulse el crecimiento de tu marca y mejore tu presencia en línea.",
    },
    {
      title: "Desarrollo de Aplicaciones Móviles",
      category: "Desarrollo y Programación",
      user: "mobiledevpro",
      price: "Desde $800 por proyecto",
      description:
        "Diseño y desarrollo de aplicaciones móviles personalizadas para iOS y Android. Experiencia en UX/UI para ofrecer una experiencia de usuario atractiva y funcional.",
    },
    {
      title: "Diseño de Interiores",
      category: "Diseño y Multimedia",
      user: "interiorpro",
      price: "Presupuesto personalizado",
      description:
        "Transforma tus espacios con un diseño de interiores único y sofisticado. Desde conceptos iniciales hasta la implementación, crea ambientes que reflejen tu estilo y personalidad.",
    },
    {
      title: "Asesoría Legal",
      category: "Negocios y Finanzas",
      user: "legaladvisor",
      price: "$100 por hora de consulta",
      description:
        "Asesoramiento legal en diversas áreas como derecho comercial, propiedad intelectual, contratos y más. Encuentra soluciones legales adecuadas para proteger tus intereses comerciales.",
    },
    {
      title: "Redes Sociales y Community Management",
      category: "Marketing y Publicidad",
      user: "socialmediaexpert",
      price: "$300 por campaña",
      description:
        "Gestión efectiva de redes sociales y estrategias de marketing digital. Aumenta el alcance de tu marca, fideliza a tus seguidores y genera una mayor interacción con tu audiencia.",
    },
    {
      title: "Diseño de Logotipos",
      category: "Diseño y Multimedia",
      user: "logodesigner",
      price: "$150 por logotipo",
      description:
        "Crea una identidad visual única para tu negocio con un logotipo atractivo y memorable. Diseños personalizados que reflejen la esencia de tu marca.",
    },
  ]);
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:4000/servicios");
        setServices(res.data);
      } catch (error) {
      }
    };
    return () => {};
  }, []);

  return (
    <>
      <Paper
        sx={{
          p: 2,
          marginY: 2,
          marginX: "auto",
          maxWidth: "85%",
          flexGrow: 1,
          border: 2,
          borderColor: "lightgray",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6">Buscar </Typography>
          <TextField
            sx={{ flexGrow: 1, ml: 3 }}
            size="small"
            label="Titulo"
            variant="outlined"
          />
          <Box sx={{ maxWidth: 250, flexGrow: 1, mx: 3 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
              <Select
                value={category}
                onChange={handleChange}
                input={<OutlinedInput label="Categorias" />}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" sx={{ maxWidth: 200, flexGrow: 1 }}>
            Ir
          </Button>
        </Toolbar>
      </Paper>
      {services.map((service) => (
        <ServiceItem sx={{ py: 2 }} key={service.id} service={service} />
      ))}
      <Paper
        sx={{
          p: 2,
          marginY: 2,
          marginX: "auto",
          maxWidth: "85%",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Toolbar>
          <Box sx={{ maxWidth: 250, flexGrow: 1, marginX: 2 }}>
            Numero de elementos mostrados en la lista
          </Box>

          <Button variant="contained">mostrar menos e__ </Button>
        </Toolbar>
      </Paper>
    </>
  );
}
