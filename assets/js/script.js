
  document.querySelector('.choice').addEventListener('click', (el) => { //el = l'élément réel que l'on cible
  if(el.target.dataset.action !== undefined){
    
    let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
          console.log(this.responseText);
        }
  };
  xhttp.open("GET", "http://192.168.33.10/move/" + el.target.dataset.action , true);
  xhttp.send();
    } 
  
})


/*document.querySelector('.form-container input[type="submit"]').addEventListener('click', () => {
    const input = document.querySelector('.form-container input[type="text"]');
    if(input.value !== "") {
      const value = input.value;
      input.value = "";
      
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
          debugger;
        }
      };
      xhttp.open("GET", "http://192.168.33.10:80", true);
      xhttp.send('bouyou');
    }
  })*/
  