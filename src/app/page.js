"use client";

import { useState } from "react";

import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 750px)");

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
          soy un ser humano <i>curioso</i>.
        </p>
        <p>
          mi carrera profesional siempre estuvo ligada al software. comencé como
          diseñador ux y luego aprendí a programar frontend. desde entonces, mi
          camino ha ido evolucionado constantemente, llevándome a trabajar en
          diversas empresas y proyectos: ecommerce, mapas, estudios creativos,
          servicios de streaming y playback, e incluso agentes de inteligencia
          artificial.
        </p>
        <p>
          también enseñé programación en la escuela da vinci a una clase de
          30-35 alumnos. algunos consiguieron trabajo como desarrolladores
          después de ese cuatrimestre.
        </p>
        <p>
          mi "carrera freelance" (si se puede llamar así) está llena de
          proyectos únicos. quizás el más destacado (e individual) haya sido la
          creación del archivo general sergio massa (agsm), una cuenta de
          twitter que alcanzó 10,000 seguidores en solo una semana y hasta llegó
          al mismísimo new york times. agsm fue pionera en su rubro, siendo la
          primera en usar inteligencia artificial en una elección presidencial.
        </p>
        <p style={{ fontSize: "0.9rem" }}>
          (en este carrusel de instagram hay una foto mía que no llegó a la
          nota)
        </p>
        <p>
          también fui community manager y web developer de magaiba, una memecoin
          argentina basada en un lagarto rosa, creada por la comunidad de
          círculo vicioso.
        </p>
        <p>actualmente formo parte de varias cosas:</p>
        <p>
          - trabajo como productor segundo (y a veces conductor) de ceibo
          argentina, un canal de streaming sobre política, filosofía y cultura:
          un canal joven creado por un equipo increíble que no para de crecer y
          reinventarse a sí mismo.
        </p>
        <p>
          - llevo adelante junto a dos personas una marca de ropa llamada persu.
        </p>
        <p>
          - me encargo del frontend del juego de unidad básica satoshi nakamoto:
          una movida espectacular creada por muphasa
        </p>
        <p>
          - también estoy comenzando mi "carrera" como escritor (o periodista?):
          recientemente publiqué un artículo en cuatroveintiuno (421),
          posiblemente el medio más interesante de argentina en este momento,
          liderado por tres cracks.
        </p>
        <p>
          y una incontable cantidad de ideas que murieron en el camino o no
          vieron la luz
        </p>
      </main>
    </>
  );
}
