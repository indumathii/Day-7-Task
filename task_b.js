function reqListener() {
    let arr=JSON.parse(this.responseText);

    const result=arr.filter(value=>value.population<200000).map(elements=>elements.name.common)
        console.log(result)
    }



  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  