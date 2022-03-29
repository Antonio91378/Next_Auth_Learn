
import Head from 'next/head'
import Auth from './auth_component'
import RotaAutenticada from './rota_autenticada'



const Home = () => {
  return (
    <div>
       <Head>
          <title>BitHelper System</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <script src="https://kit.fontawesome.com/0c3743f477.js" crossOrigin="anonymous"></script>
        </Head>

        <RotaAutenticada>
            <div className="section">
                <div className='view' >  
                  < Auth />
                </div>
            </div>
        </RotaAutenticada>
          
     
    </div>
   
  )
}

export default Home
