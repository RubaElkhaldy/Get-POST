//edit your code 
fetch('http://localhost:3000/user?name=roba',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})

const data = { name : "roby" };
 fetch('http://localhost:3000/user', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})

