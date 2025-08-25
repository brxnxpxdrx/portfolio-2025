import React from 'react'

function Destaque() {
  return (
    <div className='cards p-10  text-justify  h-screen w-full flex flex-col justify-center  ' >
        <h1 className='pb-5 text-5xl'>
            Projetos em destaque
        </h1>
         <div className='flex justify-between w-full container' >
        <div className='card w-1/3' >
            <img src="../../public/1.png" alt="" />
            <h2>backend Game Yugioh</h2>
            <h3>Node.js | Mongodb| Express</h3>
            <div className='btn'>
                <button> <a href="https://github.com/brxnxpxdrx/api_game"> Ver código</a></button>
                <button><a href="#"> Demo</a></button>   
            </div>
        </div>
        <div className='card w-1/3'>
             <img src="../../public/carta-maior.png" alt="" />
            <h2>Carta Maior</h2>
            <h3>React.js </h3>
            <div className='btn'>
                 <button> <a href="https://github.com/brxnxpxdrx/Carta-Maior"> Ver código</a></button>
                <button><a href="#"> Demo</a></button>
            </div>
        </div>
        <div className='card w-1/3'>
             <img src="https://i0.wp.com/cfcontabil.com/cf/wp-content/uploads/2016/10/nfce-1.png" alt="" />
            <h2>Api Nfc-e p/ Estudo</h2>
            <h3>Node.js | Express | Typescript</h3>
            <div className='btn'>
                <button> <a href="https://github.com/brxnxpxdrx/api-emissao-nfe-fake"> Ver código</a></button>
                <button><a href="#"> Demo</a></button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Destaque