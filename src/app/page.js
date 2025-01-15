"use client";

import { useEffect, useState } from "react";

import { useMediaQuery } from "../hooks/useMediaQuery";

const SubstackEmbed = () => {
  return (
    <iframe
      src="https://giancarlobrusca.substack.com/embed"
      width="480"
      height="150"
      style={{ border: "1px solid #EEE", background: "white" }}
      frameBorder="0"
      scrolling="no"
    />
  );
};

export default function Home() {
  const matches = useMediaQuery("(max-width: 750px)");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(matches);
  }, [matches]);

  return (
    <>
      <main
        style={{
          paddingTop: 40,
          paddingLeft: 40,
          paddingRight: isMobile ? 40 : 0,
          maxWidth: isMobile ? "100%" : "35%",
        }}
      >
        <img
          src="avatargoku.jpg"
          style={{
            width: 100,
            height: 100,
            borderRadius: 60,
            marginBottom: 20,
          }}
        ></img>
        <h1>hola soy giancarlo.</h1>
        <p>
          me gusta hacer <i>cosas</i>.
        </p>
        <p>
          mi carrera profesional siempre estuvo ligada al software. comencé como
          diseñador ux y después aprendí a programar frontend. desde entonces,
          mi camino fue evolucionado constantemente, llegando a trabajar en
          diversas empresas y proyectos: ecommerce, mapas, estudios creativos,
          servicios de streaming y playback, e incluso agentes de inteligencia
          artificial.
        </p>
        <p>
          también enseñé programación en la{" "}
          <a
            href="https://davinci.edu.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            escuela da vinci
          </a>{" "}
          a una clase de 30-35 alumnos. algunos consiguieron trabajo como
          desarrolladores después de ese cuatrimestre.
        </p>
        <p>
          mi &quot;carrera freelance&quot; (si se puede llamar así) está llena
          de proyectos únicos. quizás el más destacado (e individual) haya sido
          la creación del{" "}
          <a
            href="https://www.bigbangnews.com/politica/archivo-massa-secretos-cuenta-creada-imagenes-ia-n86627"
            target="_blank"
            rel="noopener noreferrer"
          >
            archivo general sergio massa (agsm)
          </a>
          , una cuenta de twitter que alcanzó 10,000 seguidores en solo una
          semana y hasta llegó al mismísimo{" "}
          <a
            href="https://www.nytimes.com/2023/11/15/world/americas/argentina-election-ai-milei-massa.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            new york times
          </a>
          . agsm fue pionera en su rubro, siendo la primera en usar inteligencia
          artificial en una elección presidencial.
        </p>
        <p style={{ fontSize: "0.9rem" }}>
          <a
            href="https://www.instagram.com/p/Czu205buMXm/?img_index=3&igsh=MW54MWJuaHQzbm01NA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            (en este carrusel de instagram hay una foto mía que no llegó a la
            nota)
          </a>
        </p>
        <p>
          fui community manager y web developer de{" "}
          <a
            href="https://www.magaiba.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            magaiba
          </a>
          , una memecoin argentina basada en un lagarto rosa, creada por la
          comunidad de{" "}
          <a
            href="https://x.com/circulovicioso8"
            target="_blank"
            rel="noopener noreferrer"
          >
            círculo vicioso
          </a>
          . hay
          <a
            href="https://www.cuatroveintiuno.com/magaiba-memecoin-argentina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            un hermoso texto
          </a>{" "}
          escrito por el amigo juan ruocco sobre el proyecto.
        </p>
        <p>actualmente formo parte de varias cosas:</p>
        <p>
          - trabajo como productor segundo (y a veces conductor) de{" "}
          <a
            href="https://www.youtube.com/@ceiboargentina"
            target="_blank"
            rel="noopener noreferrer"
          >
            ceibo argentina
          </a>
          , un canal de streaming sobre política, filosofía y cultura: un
          proyecto joven creado por un equipo increíble que no para de crecer y
          reinventarse a sí mismo.
        </p>
        <p>
          - estoy comenzando junto a dos personas una marca de ropa llamada{" "}
          <a
            href="https://www.instagram.com/persu.arg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Фersu.
          </a>
        </p>
        <p>
          - me encargo del frontend de{" "}
          <a
            href="https://x.com/UnidadNakamoto"
            target="_blank"
            rel="noopener noreferrer"
          >
            unidad básica satoshi nakamoto
          </a>
          : una movida espectacular creada por{" "}
          <a
            href="https://x.com/muphasamc"
            target="_blank"
            rel="noopener noreferrer"
          >
            muphasa
          </a>
        </p>
        <p>
          - a veces escribo, y algunas de esas veces (1%), es algo interesante:
          recientemente publiqué{" "}
          <a
            href="https://www.cuatroveintiuno.com/remilia-milady-charlotte-fang-nueva-internet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            un artículo en cuatroveintiuno (421)
          </a>
          , posiblemente el medio más interesante de argentina en este momento,
          liderado por tres cracks.
        </p>
        <p>
          y una incontable cantidad de ideas que murieron en el camino o no
          vieron la luz.
        </p>
        <p>aprendí mucho en el camino, y pienso seguir.</p>
        <p>
          muy de vez en cuando escribo sobre cosas que se me ocurren o me
          interesan o que estoy aprendiendo, así que si querés recibir esos
          textos más personales dejá tu mail acá abajo:
        </p>
        <SubstackEmbed />
        <p>
          para contactarme mi X es{" "}
          <a
            href="https://x.com/gianc4_"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gianc4_
          </a>{" "}
          y mi mail es{" "}
          <a
            href="mailto:giancarlobrusca@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            giancarlobrusca@gmail.com
          </a>
        </p>
      </main>
    </>
  );
}
