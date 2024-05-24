function reqListener() {
    let arr=JSON.parse(this.responseText);

    const result=arr.filter(value=>value.region=='Asia')
        console.log(result)
    }



  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  