import React from "react";
import Particles from "react-tsparticles";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import { MoveDirection } from "@tsparticles/engine";

function Particle() {
  const { theme } = useContext(ThemeContext);

  const darkConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      line_linked: {
        enable: false,
        opacity: 0.03,
      },
      move: {
        direction: "right",
        speed: 0.05,
      },
      size: {
        value: 1,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
      color: {
        value: "#ffffff",
      },
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          particles_nb: 1,
        },
      },
    },
    retina_detect: true,
  };

  const lightConfig = {
      particles: {
        number: {
            value: 100,
        },
        color: {
          value: "#000000",
        },
        move: {
            direction: MoveDirection.bottom,
            enable: true,
            random: false,
            straight: false,
        },
        opacity: {
            value: { min: 0.1, max: 0.5 },
        },
        size: {
            value: { min: 1, max: 10 },
        },
        wobble: {
            distance: 20,
            enable: true,
            speed: {
                min: -5,
                max: 5,
            },
        },
    },
    retina_detect: true,
  };

  return (
    <Particles
      id="tsparticles"
      params={theme === "dark" ? darkConfig : lightConfig}
    />
  );
}

export default Particle;
