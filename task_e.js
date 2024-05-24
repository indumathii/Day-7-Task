function reqListener() {
    let arr=JSON.parse(this.responseText);
    
    const country = Object.values(arr).filter(elements=>{
        return elements.currencies && Object.keys(elements.currencies).includes('USD')
}).map(elements=>elements.name.common)
       
        console.log(country)   
    
}
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  