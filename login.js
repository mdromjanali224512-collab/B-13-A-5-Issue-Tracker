  const loginBtn=()=>{
            const username=document.getElementById("username").value;
            const password=document.getElementById("password").value;
            console.log(username,password);
            if(username!=='admin'){
                alert('invalid username')
            }
            else if(password!=='admin123'){
                alert('invalid Password')
            }
            else{
                alert('login successful')
                window.location.assign('home.html')
            }
        }



