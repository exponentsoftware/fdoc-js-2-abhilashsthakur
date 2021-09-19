// 1. Using the countries array create the following array of arrays.
// The country name, the first three letters of the country name and the length of the country name.

const countries = ['ALBANIA','BOLIVIA','CANADA',
                   'DENMARK','ETHIOPIA','FINLAND',
                   'GERMANY','HUNGARY','IRELAND',
                   'JAPAN','KENYA'
                ]

  function createArrayOfArrays(){
      
    var country=[]
    
    var len;


    for(let i=0;i<countries.length;i++){
    
      // getting First three letter 
        countryPart=countries[i].toString().slice(0,3)
        
        // getting the length of the name
        
        len=countries[i].length;

        country=[...country,[countries[i] , countryPart, len]]

    }
    
    return country
    
  }
  console.log(createArrayOfArrays(countries))