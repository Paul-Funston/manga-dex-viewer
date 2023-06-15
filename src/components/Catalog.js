import { fetchManga, fetchCover } from "../api/fetchManga";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';



const getTitle = (manga) => {
  return manga.attributes.title.en; 
 }

 const getCover = (manga) => {
  const cover = manga.relationships.find(r => r.type ==="cover_art");
  const fileName = cover.attributes.fileName;
  return `https://uploads.mangadex.org/covers/${manga.id}/${fileName}`;
 }
 


function Catalog() {

  const [mangaList, setMangaList] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);
  
  
  const initializeMangaList = () => {
    fetchManga().then(response => {
      setMangaList(response.data)
    })
  }

  if(!isInitialized) {
    setIsInitialized(true);
    initializeMangaList()
  }

  return (
  
    
    <section>
      <div className="container">
        <div className="row row-cols-4">
        {mangaList.map(manga => {
        return (
        <div className="col-3 text-truncate" key={manga.id}>
          <Figure>
            <Figure.Image 
              src={getCover(manga)}
              width={180}
            />
            <Figure.Caption>
             {getTitle(manga)}
            </Figure.Caption>
          </Figure>
        </div>
        )
      })}
        </div>
      </div>
    </section>
      
  )
}

export default Catalog