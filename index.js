window.onload = function() {
    func();
};

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e) => {
    setTimeout(()=>{
        splash.classList.add('display-none');
    },1000);
})


function func(){

    var theme = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("App").style.backgroundColor = theme;   
    document.getElementById("new-quote").style.backgroundColor= theme;
    document.getElementById("tweet-quote").style.backgroundColor= theme;
    document.getElementById("tumblr-button").style.backgroundColor= theme;
    document.getElementById("quotes-on-quotes").style.color = theme;
    document.getElementById("text").style.color = theme;
    document.getElementById("author").style.color = theme;


    
    fetch('https://api.quotable.io/random')
      .then(function (response) {
      // The API call was successful!
      return response.json();
  })
      .then(function (data) {
      // This is the JSON from our response
      document.getElementById("text").innerHTML = data.content;
      document.getElementById("author").innerHTML = data.author;
  }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
  });
  
  
  
    
  }