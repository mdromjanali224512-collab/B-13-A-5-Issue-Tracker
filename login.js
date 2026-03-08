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




const loadIssues = async (status) => {

  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  const data = await res.json();

  let issues = data.data; 


  if (status !== "all") {
    issues = issues.filter(issue => issue.status === status);

  }

console.log(status);
//   displayIssues(issues);
};


// const displayIssues = (issues) => {

//   const container = document.getElementById("issues-container");
//   container.innerHTML = "";

//   issues.forEach(issue => {

//     const div = document.createElement("div");

//     div.innerHTML = `
//       <h3>${issue.title}</h3>
//       <p>Status: ${issue.status}</p>
//     `;

//     container.appendChild(div);

//   });

// };




//         const loadCategories = async () => {

//   const res = await fetch("https://openapi.programming-hero.com/api/categories");
//   const data = await res.json();

//   const container = document.getElementById("category-container");

//   data.categories.forEach(category => {

//     const btn = document.createElement("button");

//     btn.innerText = category.category_name;

//     btn.onclick = () => loadPlants(category.category_name);

//     container.appendChild(btn);

//   });

// }; const loadPlants = async (category = "all") => {

//   const res = await fetch("https://openapi.programming-hero.com/api/plants");
//   const data = await res.json();

//   let plants = data.plants;

//   if (category !== "all") {
//     plants = plants.filter(plant => plant.category === category);
//   }

//   displayPlants(plants);

// }; <button onclick="loadPlants('all')">All Trees</button>

// <button onclick="loadPlants('Fruit Tree')">Fruit Tree</button>

// <button onclick="loadPlants('Flowering Tree')">Flowering Tree</button>

// <button onclick="loadPlants('Medicinal Tree')">Medicinal Tree</button>