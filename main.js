var link = document.querySelector('.link');
  
function getData(){
  url = "https://sbtx.ga/api/maker?url="
  url2 = link.value;
  url3 = url + url2;
  fetch(url3).then((response)=>{
    return response.json()
  }).then((data)=>{
    console.log(data.response);
    document.querySelector('.results').value = data.response;
  });
}

function Shortener(){
     if(link.value!=""){
        getData();
     }
     else{
       alert('Enter Your Url');
     }
 }
 
var result = document.querySelector('.results');

function clipboard() {
  if (result.value != "") {
  const textarea = document.createElement('textarea');
  const resultE = result.value;
  if (!result) { return; }
  textarea.value = resultE;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('URL Copied to Clipboard');
  }
}