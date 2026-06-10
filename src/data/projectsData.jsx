import {
    SiCplusplus,
    SiCss3,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiKotlin,
    SiReact,
    SiVuedotjs,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiSupabase,
    SiPostgresql,
} from 'react-icons/si';
import finautoiqImg from '../assets/projects/finautoiq-cotizacion.PNG';
import ecoCropImg from '../assets/projects/green_sprout_innovations-ecocrop.png';
import optimizadorImg from '../assets/projects/optimizador-rutas-referencias-medicas.PNG';
import hydrosmartImg from '../assets/projects/hydrosmart-landing-page.PNG';
import React from "react";

export const PROJECTS_DATA = [{
    id: 0,
    category: 'web',
    statusKey: 'production',
    title: 'FinAutoIQ',
    image: finautoiqImg,
    technologies: [
        {name: 'Next.js', icon: <SiNextdotjs/>, color: '#000000'},
        {name: 'TypeScript', icon: <SiTypescript/>, color: '#3178C6'},
        {name: 'Tailwind CSS', icon: <SiTailwindcss/>, color: '#06B6D4'},
        {name: 'Supabase', icon: <SiSupabase/>, color: '#3ECF8E'},
        {name: 'PostgreSQL', icon: <SiPostgresql/>, color: '#336791'},
        {name: 'Git', icon: <SiGit/>, color: '#F05032'},
        {name: 'GitHub', icon: <SiGithub/>, color: '#181717'},
    ],
    github: 'https://github.com/1Kanan2/FinAutoIQ',
    live: 'https://finautoiq.vercel.app',
    labelTranslate: 'finautoiq',
    note: 'Registro abierto — crea una cuenta con cualquier email para explorar la demo completa.'
}, {
    id: 1,
    category: 'web',
    statusKey: 'production',
    title: 'Green Sprout Innovations - EcoCrop',
    image: ecoCropImg,
    technologies: [
        {name: 'HTML5', icon: <SiHtml5/>, color: '#E34F26'},
        {name: 'CSS3', icon: <SiCss3/>, color: '#2965F1'},
        {name: 'JavaScript', icon: <SiJavascript/>, color: '#F7DF1E'},
        {name: 'Git', icon: <SiGit/>, color: '#F05032'},],
    github: 'https://github.com/1Kanan2/EcoCrop-Landing-Page',
    live: 'https://eco-crop-landing-page.vercel.app',
    labelTranslate: 'ecocrop'
}, {
    id: 2,
    category: 'web',
    statusKey: 'production',
    title: 'Optimizador de Rutas de Referencia Médica',
    image: optimizadorImg,
    technologies: [
        {name: 'JavaScript', icon: <SiJavascript/>, color: '#F7DF1E'},
        {name: 'HTML5', icon: <SiHtml5/>, color: '#E34F26'},
        {name: 'CSS3', icon: <SiCss3/>, color: '#2965F1'},
        {name: 'Git', icon: <SiGit/>, color: '#F05032'},],
    github: 'https://github.com/1Kanan2/aplicacion_complejidad_algoritmica',
    live: 'https://aplicacioncomplejidadalgoritmicakh.vercel.app',
    labelTranslate: 'optimizador'
}, {
    id: 3,
    category: 'web',
    statusKey: 'production',
    title: 'HydroSmart - AquaPulse',
    image: hydrosmartImg,
    technologies: [
        {name: 'HTML5', icon: <SiHtml5/>, color: '#E34F26'},
        {name: 'CSS3', icon: <SiCss3/>, color: '#2965F1'},
        {name: 'JavaScript', icon: <SiJavascript/>, color: '#F7DF1E'},
        {name: 'Git', icon: <SiGit/>, color: '#F05032'},],
    github: 'https://github.com/upc-pre-1ASI0730-2610-HydroSmart/HydroSmart-Landing-Page',
    live: 'https://hydrosmart-landing-page.vercel.app',
    labelTranslate: 'hydrosmart'
}];
