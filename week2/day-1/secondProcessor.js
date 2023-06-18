fetch("http://localhost:3000/handleSum",{method:"Post",headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },body:JSON.stringify({
    "num":10
})}).then((data)=>{
    data.json().then((res)=>{
        console.log(res);
    })
})