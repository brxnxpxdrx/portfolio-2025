


import React from 'react'
export default function Main() {
  return (
    <div className='flex  justify-around align-center  h-screen w-full '>
      

        <div className=' h-full w-full  flex justify-center flex-col' >
            <h2 className='pb-5 text-3xl '>Olá, sou <br /> </h2>
            <h1 className='pb-5 text-5xl'>Bruno Pedro</h1>
            <h3 className='pb-5 text-xl'>Desenvolvedor FullStack</h3>
            <h5 className='pb-5 text-sm'>Node.js | React.js | Typescript</h5>
            <div className='btn 1/3 flex justify-between align-center justify-center h-10'> 
              <button className='main-btn'
  data-ripple-light="true"
>
  <a href="https://github.com/brxnxpxdrx?tab=repositories">
    Ver projetos
  </a>
</button>

<button className='main-btn'
  data-ripple-light="true"
>
  <a href="https://www.linkedin.com/in/bruno-s-60132b102/">
    Contato
  </a>
</button>


            </div>
        </div>
         <div className="flex items-center flex-col h-full w-full   overflow-hidden justify-center border-violet-500">
          <img  src="https://raw.githubusercontent.com/brxnxpxdrx/portfolio-2025/refs/heads/main/public/bruno.jpg" alt="" className="rounded-full w-50 h-50 object-cover flex " />
          
        </div>
    </div>
  )
}





