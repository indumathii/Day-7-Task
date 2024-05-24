function reqListener() {
    let arr=JSON.parse(this.responseText);
    const totalPopulation = Object.values(arr).reduce((sum, value) => {
        
        if (value.hasOwnProperty('population')) {
            
            return sum + value.population; 
        } 
        else {
            return sum;
        }
    }, 0);

    
    console.log(totalPopulation)

}
    

  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  