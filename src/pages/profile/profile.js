window.onload = () =>{
  const btnToggleMenu = document.getElementById("btnToggleMenu");
  const itemsList = document.getElementById("itemsList");
  if(btnToggleMenu && itemsList){
    btnToggleMenu.addEventListener('click', (e)=>{
      itemsList.scrollTo(0, 0)
      itemsList.classList.toggle("expanded")
    })
  }

  const btnTabs = itemsList.querySelectorAll(".list-group-item");
  if(btnTabs){
    for (const btn of btnTabs) {
      btn.addEventListener('click', (e)=>{
        const actor = e.currentTarget
        const num = actor.getAttribute("key");
        itemsList.scrollTo(0, 0)
        const parentRect = itemsList.getBoundingClientRect()
        const itemRect = actor.getBoundingClientRect()
        const position = itemRect.top - parentRect.top
        itemsList.classList.remove("expanded")
        
        setTimeout(()=>{ 
          itemsList.scrollTo(0, position)
        },250)
        
      })
    }
  }
}
