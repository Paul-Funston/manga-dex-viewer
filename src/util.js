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

 export function getAltTitles(manga) {
  try {
   const {altTitles} = manga.attributes;
   //return altTitles.find(t => t.hasOwnProperty('en')).en;
   return altTitles.filter(t => t.hasOwnProperty('en')).map(t => t.en)
    
   

  } catch(error) { return[]}
}

export function getAuthor(manga) {
  try {
    const {relationships} = manga;
    return relationships.filter(r => r.type === "author").map(r => r.attributes.name)

  } catch(error) { return []}
}

export function getDescription(manga){
  try{
    const {description} = manga.attributes;
    return description.en;

  } catch (error) {}
}

// export function getTags(manga){
//   try{
//     const {tags} = manga.attributes;
//     return tags;

//   } catch (error) {return []}
// }

/*
export function getX(manga){
  try{

  } catch (error) {}
}

*/