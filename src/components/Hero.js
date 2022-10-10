import React from 'react';
import {Link} from 'react-router-dom'
import styled from "styled-components";

// import woman image
import WomanImg from '../assets/img/bg1.png';


const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
           
            <h1 className='text-4xl leading-[44px] md:text-4xl md:leading-tight text-center lg:text-left lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Desenvolvimento de sites e Sistemas Web
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-10 max-w-[480px] text-md text-center lg:text-left'>
            Ajudamos nossos clientes a transformar e potencializar seu negócio oferecendo serviços de alta qualidade, com ótimos resultados
e custos acessíveis
            </p>
            
           <a href="https://api.whatsapp.com/send?phone=5588996147655&text=Oi+gostaria+de+mais+informacoes" target="_blank" rel="noreferrer">
            <button  className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-md rounded-md transition-all'>
              Entre em contato
            </button>
          </a>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
