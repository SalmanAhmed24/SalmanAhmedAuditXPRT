function loadDoc(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(json=>{
    json.map(items=>{
      console.log(items);
    })
  })
}

  
  