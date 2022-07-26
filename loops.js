//NOTE This is stressful
function luggageLoader(a) {
let luggageInput = []
    let sum = 0;
    let container = [];
    for (let i = 0; i < a.length; i++) {
      let maximum = 40;
      sum += a[i]
      if ( sum <= maximum) {
        container.push(a[i])
      }
      else if (sum > maximum){
        luggageInput.push([a[i]])
        
      }
      
      
    }
    luggageInput.push(container)
    console.log(luggageInput)
    
  }
  luggageLoader([30, 5, 6])