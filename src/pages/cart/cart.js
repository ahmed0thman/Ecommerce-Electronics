window.onload = () =>{
  const cartItemsElements = document.getElementById("cartItems")?.querySelectorAll(".cart-item")
  if(cartItemsElements.length){
    for (const element of cartItemsElements) {
      const countValueElement = element.querySelector(".count-value");
      const quantityElement = element.querySelector(".quantity");
      const btnPlus = element.querySelector(".btn-plus");
      const btnMinus = element.querySelector(".btn-minus");
      if(countValueElement && btnPlus && btnMinus){
        btnPlus.addEventListener('click', e =>{
          const quantity = quantityElement.value;
          quantityElement.value = +quantity + 1
          countValueElement.textContent = +quantity + 1
        })

        btnMinus.addEventListener('click', e =>{
          const quantity = quantityElement.value;
          if(quantity > 1){
            quantityElement.value = +quantity - 1
            countValueElement.textContent = +quantity - 1
          }
        })
      }
    }
  }

}