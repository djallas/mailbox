$(function(){
   $("#login").on('submit', function(e){
      e.preventDefault();
      var email = $("#email").val();
      var password = $("#password").val();
      if(email === 'kagarama@epicmail.com' && password === '123123'){
         message("We are logging you in, just wait...",'info');
         localStorage.setItem('auth', JSON.stringify({email:email,password:password}));
         setTimeout(() => {
            window.location.href = "inbox.html";            
         }, 2500);
      }else{
         message("Incorrect username or passowrd, try again!",'error');
      }      
   });
})