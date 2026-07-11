"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function playToggleSound(on) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "square";
    const now = ctx.currentTime;
    if (on) {
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.06);
    } else {
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.06);
    }
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    osc.start(now);
    osc.stop(now + 0.1);
  } catch (_) {}
}

const MASSA_BIGBANG =
  "https://www.bigbangnews.com/politica/archivo-massa-secretos-cuenta-creada-imagenes-ia-n86627";
const MASSA_NYT =
  "https://www.nytimes.com/2023/11/15/world/americas/argentina-election-ai-milei-massa.html";
const LEVELSIO_TWEET =
  "https://x.com/levelsio/status/1823865400934982127?s=20";
const LEVELSIO_PROFILE = "https://x.com/levelsio";
const PHOTOAI = "https://photoai.com/";
const CEIBO = "https://www.youtube.com/@CEIBOARGENTINA";
const NEWS_421 = "https://www.421.news/es/";
const UBSN = "https://www.421.news/es/unidad-basica-satoshi-nakamoto/";
const URBETRACK = "https://urbetrack.com/";
const TWITTER = "https://x.com/giancarlobrusca";
const REMILIA =
  "https://www.421.news/es/remilia-milady-charlotte-fang-nueva-internet/";
const MAGAIBA = "https://www.421.news/es/magaiba-memecoin-argentina/";
const ANDREUSCAFE = "https://x.com/AndreusCafe";
const MUFASA = "https://x.com/muphasamc";
const FRONTENDCAFE = "https://x.com/FrontendCafe";
const DAVINCI = "https://davinci.edu.ar/";
const MERCADOLIBRE = "https://www.mercadolibre.com.ar/";
const WBD = "https://www.wbd.com/";
const HBO = "https://www.hbomax.com/ar/es";
const SOUTHWORKS = "https://www.southworks.com/";
const JUAN = "https://x.com/realjuanruocco";
const SLA = "https://slatv.live";

function Corta() {
  return (
    <>
      <p className="bio-p">me gusta crear cosas.</p>

      <p className="bio-p">
        soy host de{" "}
        <a href={SLA} target="_blank" rel="noopener noreferrer">
          SLA
        </a>{" "}
        (siguiendo los acontecimientos), el primer new media argentino.
      </p>

      <p className="bio-p">
        siempre estoy haciendo amigos nuevos, seguime en{" "}
        <a href={TWITTER} target="_blank" rel="noopener noreferrer">
          twitter
        </a>
        !
      </p>
    </>
  );
}

function Larga() {
  return (
    <>
      <p className="bio-p">me gusta crear cosas.</p>

      <p className="bio-p">
        empecé siendo diseñador (de hecho mi único título oficial es de
        &quot;diseñador multimedia&quot; de la{" "}
        <a href={DAVINCI} target="_blank" rel="noopener noreferrer">
          escuela da vinci
        </a>
        ) hasta que mi hermano me regaló un curso de javascript, así pasé a
        frontend — donde pude empezar a &quot;hacer realidad&quot; los diseños que
        hacía.
      </p>

      <p className="bio-p">
        hablando de da vinci. luego de recibido fui profesor de la escuela: di clases de javascript y react durante un cuatrimestre. 35 estudiantes. después de la cursada varios consiguieron trabajo como programadores.
      </p>

      <p className="bio-p">
        durante mi carrera profesional pasé de frontend a fullstack — aprendí
        python, golang y algunas cosas más en el camino. participé en un
        abanico de proyectos bastante grande: desde apps para seguimiento gps
        y telemetría en{" "}
        <a href={URBETRACK} target="_blank" rel="noopener noreferrer">
          urbetrack
        </a>
        , pasando por apps backoffice en{" "}
        <a href={MERCADOLIBRE} target="_blank" rel="noopener noreferrer">
          mercadolibre
        </a>
        , servicios de streaming para{" "}
        <a href={WBD} target="_blank" rel="noopener noreferrer">
          warner bros discovery
        </a>
        /
        <a href={HBO} target="_blank" rel="noopener noreferrer">
          hbo
        </a>{" "}
        y creación de agentes de inteligencia artificial en{" "}
        <a href={SOUTHWORKS} target="_blank" rel="noopener noreferrer">
          southworks
        </a>
        . hace poco regresé a urbetrack, la empresa que me dio mi primera
        oportunidad, pero ahora como líder. actualmente lidero tres equipos:
        frontend, mobile y powerbi.
      </p>

      <p className="bio-p">
        como buen inquieto que soy, mientras hacía (y hago) estos trabajos,
        participé de varios proyectos más:
      </p>

      <p className="bio-p">
        creé el{" "}
        <a href={MASSA_BIGBANG} target="_blank" rel="noopener noreferrer">
          archivo general sergio massa
        </a>
        , la primera cuenta ia de la historia de las elecciones
        presidenciales, hasta aparecí en{" "}
        <a href={MASSA_NYT} target="_blank" rel="noopener noreferrer">
          el nytimes
        </a>{" "}
        (me vinieron a sacar fotos a mi casa) y recibí un shoutout del
        mismísimo{" "}
        <a href={LEVELSIO_TWEET} target="_blank" rel="noopener noreferrer">
          @levelsio
        </a>{" "}
        (porque usé{" "}
        <a href={PHOTOAI} target="_blank" rel="noopener noreferrer">
          una app de él
        </a>{" "}
        para hacer el proyecto).
      </p>

      <p className="bio-p">
        soy parte del equipo de{" "}
        <a href={CEIBO} target="_blank" rel="noopener noreferrer">
          ceibo
        </a>
        , no sólo el mejor programa de conversación de la televisión
        argentina actualmente, si no también la mejor red (en expansión
        constante) de inteligencia cultural de la nación.
      </p>

      <p className="bio-p">
        también estoy en{" "}
        <a href={NEWS_421} target="_blank" rel="noopener noreferrer">
          421.news
        </a>
        , donde escribí algunas notas (la mejor la de{" "}
        <a href={REMILIA} target="_blank" rel="noopener noreferrer">
          remilia
        </a>{" "}
        por ahora) y me
        encargué durante bastante tiempo del sitio web. hoy en día tengo muy
        poco trabajo desde que{" "}
        <a href={JUAN} target="_blank" rel="noopener noreferrer">
          juan
        </a>{" "}
        aprendió a usar claude code xD.
      </p>

      <p className="bio-p">
        hablando del amigo juan. como buen seguidor fanático de círculo
        vicioso, fui parte del equipo de{" "}
        <a href={MAGAIBA} target="_blank" rel="noopener noreferrer">
          magaiba
        </a>{" "}
        — la memecoin más exitosa de toda latinoamérica — aportando lo que
        pude: hice el website y fui cm por unos días (ojo, metí algunos
        tweets copados).
      </p>

      <p className="bio-p">
        en el medio de todo también tuvimos un flash-project con el súper
        talentoso{" "}
        <a href={ANDREUSCAFE} target="_blank" rel="noopener noreferrer">
          @andreuscafe
        </a>
        : un pequeño estudio de creative development llamado &quot;event horizon&quot;.
        grandes recuerdos e inolvidables horas de brainstorming en unas
        pequeñas oficinas de microcentro.
      </p>

      <p className="bio-p">
        y hablando de{" "}
        <a href={ANDREUSCAFE} target="_blank" rel="noopener noreferrer">
          @andreuscafe
        </a>{" "}
        cómo olvidar que fui parte del{" "}
        <a href={FRONTENDCAFE} target="_blank" rel="noopener noreferrer">
          @frontendcafe
        </a>{" "}
        por muchos años, la mejor comunidad tech de argentina sin dudas (y
        quizás de latinoamérica también): aporté con mentorías de react,
        ayudé en el website y alguna que otra cosa más que no recuerdo.
      </p>

      <p className="bio-p">
        fui parte del equipo del súper-evento-nacional{" "}
        <a href={UBSN} target="_blank" rel="noopener noreferrer">
          unidad básica satoshi nakamoto
        </a>
        , liderado por{" "}
        <a href={MUFASA} target="_blank" rel="noopener noreferrer">
          mufasa
        </a>
        , proyecto que quiero mucho y al que seguiré
        asistiendo siempre que se lleve a cabo.
      </p>

      <p className="bio-p">
        y lo más nuevo — soy host de{" "}
        <a href={SLA} target="_blank" rel="noopener noreferrer">
          SLA
        </a>{" "}
        (siguiendo los acontecimientos), un programa en vivo sobre tecnología
        que arrancamos con tres tipazos y busca crecer hasta ser el primer new
        media argentino.
      </p>

      <p className="bio-p">
        y creo que no me olvido de nada. si no a medida que me acuerde iré
        sumando cosas al texto.
      </p>

      <p className="bio-p">
        he disfrutado todos y cada uno de los proyectos que hice
        y seguro vendrán muchos más. le guardo también cariño a los muchos
        que han quedado en el camino y de los que nadie se enterará nunca.
        de todos he aprendido algo.
      </p>

      <p className="bio-p">
        siempre estoy haciendo amigos nuevos. seguime en{" "}
        <a href={TWITTER} target="_blank" rel="noopener noreferrer">
          twitter
        </a>
        , mandame un{" "}
        <a href="mailto:giancarlobrusca@gmail.com">mail</a>, como prefieras.
        hablemos de cualquier cosa!
      </p>
    </>
  );
}

const COMPONENTS = {
  corta: Corta,
  larga: Larga,
};

export default function Bio() {
  const [tldr, setTldr] = useState(true);
  const version = tldr ? "corta" : "larga";
  const Content = COMPONENTS[version];

  function handleToggle() {
    const next = !tldr;
    setTldr(next);
    playToggleSound(next);
  }

  return (
    <section
      className="bio"
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "0 24px 80px",
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
        lineHeight: 1.7,
        color: "var(--text)",
      }}
    >
      <div
        className="bio-switcher"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "32px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          letterSpacing: "0.05em",
        }}
      >
        <button
          role="switch"
          aria-checked={tldr}
          onClick={handleToggle}
          className="tldr-switch"
        >
          <span className="tldr-thumb" />
        </button>
        <span style={{ color: tldr ? "var(--accent)" : "var(--muted)", transition: "color 0.2s ease" }}>
          TLDR
        </span>
      </div>

      <motion.div layout transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={version}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <Content />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <style jsx>{`
        .tldr-switch {
          position: relative;
          width: 44px;
          height: 24px;
          background: var(--border);
          border: none;
          border-radius: 12px;
          cursor: none;
          transition: background 0.2s ease;
          flex-shrink: 0;
          padding: 0;
        }
        .tldr-switch[aria-checked="true"] {
          background: var(--accent);
        }
        .tldr-thumb {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--bg);
          transition: transform 0.2s ease;
          display: block;
        }
        .tldr-switch[aria-checked="true"] .tldr-thumb {
          transform: translateX(20px);
        }
        .bio :global(.bio-p) {
          margin-bottom: 1.4em;
        }
        .bio :global(a) {
          color: var(--accent);
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .bio :global(a:hover) {
          border-bottom-color: var(--accent);
          color: var(--accent2);
        }
      `}</style>
    </section>
  );
}
