import { fetchManga, fetchCover } from "../api/fetchManga";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { getTitle, getCover } from "../util";


function Catalog() {

  const [mangaList, setMangaList] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const navigate = useNavigate();
  
  
  const initializeMangaList = () => {
    fetchManga().then(response => {
      setMangaList(response.data)
    })
  }

  if(!isInitialized) {
    setIsInitialized(true);
    initializeMangaList()
  }

  const handleClickPoster = (id) => {
    navigate(`/Details/${id}`)
  }
  return (
  
    
    <section>
      <div className="container">
        <div className="row row-fluid">
        {mangaList.map(manga => {
        return (
        <div className="col-lg-3 col-sm-6 text-wrap" key={manga.id} onClick={() => {handleClickPoster(manga.id)}}>
          <div className="d-flex justify-content-center align-items-center bg-dark p-1" style={{height: '160px'}}>
            <Image className="h-100" src={getCover(manga)} rounded fluid/>
          </div>
          <p className="text-center">{getTitle(manga)}</p>
        </div>
        )
      })}
        </div>
      </div>
    </section>
      
  )
}

export default Catalog