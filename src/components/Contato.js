import React from 'react';

// import contact data
import { contato } from '../data';


const Contato = () => {
  return (
    <section className='section bg-primary' id='contato'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title  mb-12  text-5xl  before:content-contex relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Entre em Contato
          </h2>
        
        </div>
        <div
          className='flex flex-col  lg:flex-row md:flex-col'
        >
          <div
            className='flex flex-col mb-12 lg:mb-0 lg:pt-2'
          >
            {contato.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-row  ' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-1 mb-0 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Contato;
