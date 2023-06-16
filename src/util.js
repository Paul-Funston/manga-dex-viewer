export function getTitle(manga)  {
  try{
    const {title, altTitles} = manga.attributes;
    if(title.hasOwnProperty('en')) {
      return title.en; 
  } 
  return altTitles.find(t => t.hasOwnProperty('en')).en;
  
  } catch(error) {}

 }

 export function getCover(manga) {
  try{
    const cover = manga.relationships.find(r => r.type ==="cover_art");
    const fileName = cover.attributes.fileName;
    
    return `https://uploads.mangadex.org/covers/${manga.id}/${fileName}`;
  } catch(error) {}
  
 }