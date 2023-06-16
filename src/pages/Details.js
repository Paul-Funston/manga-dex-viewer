import { useParams } from 'react-router-dom';
import { getManga } from '../api/fetchManga';
import {useState, useEffect} from 'react';
import { getTitle, getCover} from '../util';
import Image from 'react-bootstrap/Image';

function Details() {
  const { id } = useParams();
  const [manga, setManga] = useState({});

  const handleGetManga = () => {
    getManga(id).then(response=> {setManga(response.data)}).finally(console.table(manga));
  }

  useEffect(() => {
    handleGetManga();
  }, [])
  

  return (
    <section className='d-flex justify-content-center align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <Image src={getCover(manga)} fluid rounded/>
          </div>
          <div className='col-auto'>
            <h2>{getTitle(manga)}</h2>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Details;