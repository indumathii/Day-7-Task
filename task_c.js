   function reqListener() {
        const arrays=JSON.parse(this.responseText);
        console.log(arrays)
        // let arrays = {
        //     arr1: {
        //         name: { common: 'Moldova', official: 'Republic of Moldova' },
        //         car: { signs: ['MD'], side: 'right' },
        //         population: 1102011
        //     },
        //     arr2: {
        //         name: { common: 'Spain', official: 'Kingdom of Spain' },
        //         car: { signs: ['E'], side: 'right' },
        //         population: 4384734
        //     }
        // };
        const finalresult=[]
        Object.entries(arrays).forEach(([key, value]) => {
            
                Object.entries(value).forEach(([subKey, subValue]) => {
                    if(subKey==='name')
                        {
                            Object.entries(subValue).forEach(([subSubKey,subSubValue])=>{
                                if(subSubKey==='common')
                                finalresult.push(subSubValue)
                                else if(subSubKey==='capital')
                                finalresult.push()
                            });
                        }
                    else if(subKey ==='population') 
                        {
                            finalresult.push(subValue)
                        }
                     else if(subKey ==='capital') 
                            {
                                finalresult.push(...subValue)
                            }
                    else{}
                });
            
        });
        console.log(finalresult)
    }


    




  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  