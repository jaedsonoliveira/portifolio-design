import React from 'react';

// import services data
import { serviços } from '../data';

const Services = () => {
  return (
    <section id='serviços'  className='section  bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='section-title mb-12  text-5xl relative before:absolute before:opacity-40  before:-left-28 before:hidden before:lg:block'>Serviços</h1>
  
         
        </div>
        <div className='grid lg:grid-cols-3 gap-8'>
          {serviços.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className='bg-secondary p-6 rounded-2xl' key={index}>
                <div className='text-accent rounded-sm w-15 h-10 flex justify-center items-center mb-14 text-[50px]'>
                  {icon}
                </div>
                <h4 className='text-xl font-bold text-center mb-2'>{name}</h4>
                <p className='text-center'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
