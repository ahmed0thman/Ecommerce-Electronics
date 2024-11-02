window.onload = () =>{
  const stepper = document.getElementById("stepper")
  const tabNavBtns = stepper.querySelectorAll(".tab-nav-btn");

  if(tabNavBtns.length){
    for (const navBtn of tabNavBtns) {
      navBtn.addEventListener('click', e=>{
        const target = e.currentTarget.getAttribute("target");
        if(target){
          const tabTarget = document.getElementById(target)
          tabTarget.click()
        }
      })
    }
  }
}