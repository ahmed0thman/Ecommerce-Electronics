

function toggleNavBar(){
  const navbarContentElement = document.getElementById("navbarContent");
  
  if(navbarContentElement){
    const children = navbarContentElement.children;
    let totalHeight = 0;
    Array.from(children).forEach(element => {
      totalHeight += element.clientHeight;
    });
    
    if(navbarContentElement.classList.contains("expand")){
      navbarContentElement.classList.remove("expand")
      navbarContentElement.style.height = "0px"
    }
    else{
      navbarContentElement.classList.add("expand")
      navbarContentElement.style.height = `${totalHeight}px`
    }
  }
}