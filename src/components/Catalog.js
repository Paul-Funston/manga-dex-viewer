import { fetchManga, fetchCover } from "../api/fetchManga";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTitle, getCover } from "../util";
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';

import NewMangaForm from "./NewMangaForm";

const sorter = (mangaList, method) => {
  const copyList = [...mangaList];
  
  switch(method.sortBy) {
    case(sortMethods[0]): 

      return copyList.sort((a, b) => { return (getTitle(a).localeCompare(getTitle(b)))})

    case(sortMethods[1]): 
      return copyList.sort((a, b) => {return (b.attributes.year - a.attributes.year)})
    
    case(sortMethods[2]):
      return copyList.sort((a,b) => {return (b.attributes.version - a.attributes.version)});

    default:
      throw new Error("Sort Method not found");
  }
}

const sortMethods = [
  "By Title",
  "By Year",
  "By Volume"
]

function Catalog() {

  const [mangaList, setMangaList] = useState([]);
  const [sortMethod, setSortMethod] = useState("Sort Manga");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const initializeMangaList = () => {
      fetchManga().then(response => {
        setMangaList(response.data)
      })
    }

    initializeMangaList();
  }, [])

  const handleClickPoster = (id) => {
    navigate(`/Details/${id}`)
  }

  const handleSortManga = () => {
    let index = sortMethods.findIndex(m => m === sortMethod)

    if(index < 0 || index >= sortMethods.length -1) {
      index = 0;
    } else {
      index++
    }

    const newSort = sortMethods[index];
    try {
      setMangaList(sorter(mangaList, {sortBy: newSort}));
      setSortMethod(newSort);
    } catch (error) {
      console.log(error.message);
      setSortMethod("Sort Manga");
    }
  }

  const handleShowForm = () => {
      setIsFormVisible(true);
  }

  const handleCloseForm = () => {
    setIsFormVisible(false);
  }

  const submitThanks = (data) => {
    console.log('THANKS');
    console.log(data);
    setAlertTitle(data);
    setIsAlertVisible(true);
  }

  return (
    <section>
      <div className="container">
        <div className="row my-2 d-flex justify-content-end">
          <button onClick={handleSortManga} className="col-2 mx-2 btn btn-info" >{sortMethod}</button>
          <button className="col-2 btn btn-outline-info" onClick={handleShowForm}>New</button>
        </div>
        <div className="row row-fluid">
        {mangaList.map(manga => {
        return (
        <div className="col-lg-3 col-sm-6 text-wrap"  key={manga.id} onClick={() => {handleClickPoster(manga.id)}}>
          <div className="d-flex justify-content-center align-items-center bg-dark p-1" style={{height: '160px'}}>
            <Image className="h-100" src={getCover(manga)} style={{cursor:'pointer'}} rounded fluid/>
          </div>
          <p className="text-center">{getTitle(manga)}</p>
        </div>
        )
      })}
        </div>
      </div>
      <NewMangaForm show={isFormVisible} onHide={handleCloseForm} onSuccess={submitThanks}/>
      <Alert 
        show={isAlertVisible} 
        variant="success" 
        onClose={() => setIsAlertVisible(false)} 
        dismissible
        className="fixed-bottom"
      >Thanks for Submitting {alertTitle}!</Alert>
    </section>
      
  )
}

export default Catalog