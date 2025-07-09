import React from 'react'
import Languages from '../_components/About/iconGrid'
import { pLanguages } from './hooks/useLanguages'

const About = () => {
    return(
        <section id="About" className="flex flex-col h-auto w-full justify-center">
            <Languages list={pLanguages} lenght={pLanguages.length}/>
            <Languages list={pLanguages} lenght={pLanguages.length}/>
        </section>
    )
}

export default About