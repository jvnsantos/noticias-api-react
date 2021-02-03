import React, {useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';



function App() {

  const [noticias, setNoticias] = useState(false);

  let getNoticia = async () => {

    let parametros = {
      country: 'br',
      apiKey: 'e3ba70099ab14c68be5f0bd28b63c2e6'
    }

    let res = await axios.get('https://newsapi.org/v2/top-headlines?country=' +
      parametros.country + '&apiKey=' +
      parametros.apiKey);


    setNoticias(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    getNoticia();
  }, [])

if(noticias === false){
  return(
    <div>Carregando</div>
  )
}else{
  return (
    <div >
      
     <p>Noticia: {noticias['articles'][0]['title']} </p> 

     <button className="btn-primary">Proxima</button>
      

      

    </div>
  )}

} export default App;

