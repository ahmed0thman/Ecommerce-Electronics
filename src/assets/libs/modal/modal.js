
const btnsOpenModal = document.querySelectorAll(".btn-open-modal")
  const btnsCloseModal = document.querySelectorAll(".btn-close-modal")
  console.log(btnsOpenModal)
  if(btnsOpenModal.length){
    for (const btnOpen of btnsOpenModal) {
      btnOpen.addEventListener('click', (e)=>{
        const target = e.currentTarget.getAttribute('target')
        if (target) {
          const modal = document.getElementById(target);
          if(modal){
            modal.classList.add("show")
          }
        }
      })
    }
  }

  if(btnsCloseModal.length){
    for (const btnClose of btnsCloseModal) {
      btnClose.addEventListener('click', (e)=>{
        const target = e.currentTarget.getAttribute('target')
        if (target) {
          const modal = document.getElementById(target);
          if(modal){
            modal.classList.remove("show")
          }
        }
      })
    }
  }
