// 1. Using the countries array create the following array of arrays.
// The country name, the first three letters of the country name and the length of the country name.

const countries = ['ALBANIA','BOLIVIA','CANADA',
                   'DENMARK','ETHIOPIA','FINLAND',
                   'GERMANY','HUNGARY','IRELAND',
                   'JAPAN','KENYA'
                ]

  function createArrayOfArrays(countries){
    
   let x= countries.map(country=>[country.substr(0,3) , country.length, country])
    return x
  }
  console.log(createArrayOfArrays(countries));