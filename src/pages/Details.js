import { useParams } from 'react-router-dom';
import { getManga } from '../api/fetchManga';
import {useState, useEffect} from 'react';
import { getTitle, getCover, getAltTitles, getDescription, getAuthor, getTags} from '../util';
import Image from 'react-bootstrap/Image';
import { Helmet } from 'react-helmet';



function Details() {
  const { id } = useParams();
  const [manga, setManga] = useState({});

  const handleGetManga = () => {
    getManga(id).then(response=> {setManga(response.data)}).finally(console.table(manga));
  }

  useEffect(() => {
    handleGetManga();
  }, [])
  
  console.table(manga.attributes);

  return (
    <section className='d-flex justify-content-center align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-sm-auto'>
            <Image src={getCover(manga)} fluid rounded/>
          </div>
          <div className='col-lg-8 col-sm-auto'>
            <h2>{getTitle(manga)}</h2>
            <p>{getAltTitles(manga).join(', ')}</p>
            <div className='d-flex justify-content-around'>
            
            </div>
            <p><span className='text-white'>Author</span> {getAuthor(manga).join(', ')}</p>
            <p>{getDescription(manga)}</p>
          </div>
        </div>
      </div>
      <Helmet>
        <title>{getTitle(manga)}</title>
      </Helmet>
    </section>
    
  )
}

export default Details;