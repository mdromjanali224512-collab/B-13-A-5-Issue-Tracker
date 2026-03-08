const loadAllIssues=async (status='all')=>{
     spinner(true)
    activeBTN(status)
    const res=await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data=await res.json()
    let issues=data.data
    
if(status!='all'){
    issues=issues.filter(issue=>issue.status===status)
}
 spinner(false)
        displayIssues(issues)
    
}

const displayIssues=(issues)=>{
   
    const countIssues=document.getElementById('countIssues').innerText=issues.length;

    const issuesContainer=document.getElementById("issuesContainer");
issuesContainer.innerHTML=""
issues.map(issue=>{
  
    const card=document.createElement("div")
    card.innerHTML=`
    <div onclick="my_modal_3.showModal();shoDetails(${issue.id})" class="bg-white p-5 rounded-md shadow-xl ${issue.status==='open' ? 'border-t-6 border-green-700': 'border-t-6 border-[#A855F7]'} h-full">
     
<div class="flex justify-between items-center">
${issue.status==='open' ?
 '<img src="./assets/Open-Status.png" alt="">' :
 '<img src="./assets/Status.png" alt="">'}
<h1 class="rounded-full bg-red-100 text-red-500 px-5 py-2 w-25 text-center">${issue.priority}</h1>
</div>
<h1 class="font-semibold mt-3 text-[#1F2937] text-[14px]">${issue.title}</h1>
<p class="text-[12px] text-[#64748B] mt-3 line-clamp-2" title="${issue.description}">${issue.description}</p>
 <div class="flex items-center  border-b-2 border-gray-300 mt-3 pb-3">
${
issue.labels.map(lebel=>`
   
   <h1 class="${lebel==='enhancement' ? 'bg-green-200 rounded-full text-green-600 px-4 py-1' : 
   'bg-blue-300 rounded-full text-blue-600 px-4 py-1'}">${lebel}</h1>

`
)
}
</div>
      <p class="text-[12px] mt-5 mb-2 text-[#64748B]">#1
by ${issue.author}</p>
      <p class="text-[12px] text-[#64748B]">${issue.createdAt}</p>
    </div>
    `;
    issuesContainer.append(card)
})
}
const shoDetails=(id)=>{
fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
.then(res=>res.json()).then(data=>{
    displayDetails(data.data);
    
})
}
const displayDetails=(issue)=>{
const detailsContainer=document.getElementById("detailsContainer")
detailsContainer.innerHTML=""

    
    const card=document.createElement('div')
    card.innerHTML=`
    <div class="bg-white p-5 rounded-md shadow-xl ${issue.status==='open' ? 'border-t-6 border-green-700': 'border-t-6 border-[#A855F7]'}">
     <h1 class="font-semibold mt-3 text-[#1F2937] text-[14px]">${issue.title}</h1>
<div class="flex gap-2 items-center">
    <h1 class="rounded-full bg-red-100 text-red-500 px-3 py-1 text-center">${issue.status}</h1>*
    <p class="text-[12px] text-[#64748B]">${issue.status}
by ${issue.author}</p>*
 <p class="text-[12px] text-[#64748B]">${issue.createdAt}</p>
</div>
<div class="flex items-center  border-b-2 border-gray-300 mt-3 pb-3">
${
issue.labels.map(lebel=>`
   
   <h1 class="${lebel==='enhancement' ? 'bg-green-200 rounded-full text-green-600 px-4 py-1' : 
   'bg-blue-300 rounded-full text-blue-600 px-4 py-1'}">${lebel}</h1>`)
}
</div>
<p class="text-[12px] text-[#64748B] mt-3">${issue.description}</p>
 <div class="bg-gray-200 p-5 flex justify-between items-center rounded-xl mt-5">
    <div>
        <h1 class="text-[#64748B] text-[16px]">Assignee:</h1>
        <h1>${issue.assignee}</h1>
    </div>
    <div>
        <h1 class="text-[#64748B] text-[16px]">Priority:</h1>
        <h1>${issue.priority}</h1>
    </div>
    <div></div>
</div>
      
     </div>
    </div>
    `;
    detailsContainer.append(card)
}

const activeBTN=(status)=>{
const getBtn=document.querySelectorAll('.issueBtn')
getBtn.forEach(btn=>btn?.classList.remove('active'));
document.getElementById(status)?.classList.add('active')
}

const findIssue= async()=>{
const input=document.getElementById('input').value.toLowerCase()

const res=await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${input}`)
const datas=await res.json();
const alldata=datas.data
const peram=alldata?.filter(data=>data.description.toLowerCase().includes(input))

displayIssues(peram)
}

const spinner=(valie)=>{
if(valie){
    document.getElementById("loadingContainer").classList.remove('hidden')
    document.getElementById("issuesContainer").classList.add('hidden')
}else{
    document.getElementById("loadingContainer").classList.add('hidden')
    document.getElementById("issuesContainer").classList.remove('hidden')
}
}
loadAllIssues()