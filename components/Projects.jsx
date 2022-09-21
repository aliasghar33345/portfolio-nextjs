import React from 'react'
import Image from 'next/image'
import propertyImg from '../public/assets/projects/property.jpg'; 
import crypto from '../public/assets/projects/crypto.jpg'; 
import twitch from '../public/assets/projects/twitch.jpg'; 
import netflix from '../public/assets/projects/netflix.jpg'; 
import Link from 'next/link';
import ProjectsItem from './ProjectsItem';
const Projects = () => {
  return (
    <div id='project' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
               <ProjectsItem  title='Property Finder' backgroundImg={propertyImg} ProjectUrl='/property' />
               <ProjectsItem  title='Property Finder' backgroundImg={crypto} ProjectUrl='/crypto' />
               <ProjectsItem  title='Property Finder' backgroundImg={twitch} ProjectUrl='/twitch' />
               <ProjectsItem  title='Property Finder' backgroundImg={netflix} ProjectUrl='/netflix' />
            </div>
        </div>
    </div>
  )
}

export default Projects