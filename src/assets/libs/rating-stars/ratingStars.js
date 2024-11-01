//#region Handle Total product rating stars percentage

function handleRatingStarsColorPercent(ratingElement, rateValue=null){
  if(!rateValue){
    rateValue = ratingElement.getAttribute("rating")
  }
  else if(rateValue){
    let ratepercent = rateValue / 5 * 100;
    // ratepercent = ratepercent > 50? ratepercent * 1.016 : ratepercent;
    
    ratingElement.style.backgroundImage  = `linear-gradient(90deg, var(--color-gold) ${ratepercent}%, transparent 0%) !important`
  }
  
}
const ratingStartsElements = document.querySelectorAll(".stars-container")
if(ratingStartsElements.length > 0){
  for (const ratingElement of ratingStartsElements) {
    if(ratingElement){
      rateValue = ratingElement.getAttribute("rating")
      handleRatingStarsColorPercent(ratingElement, rateValue)
      
    }
  }
}

const ratingHandlerElements = document.querySelectorAll(".rating-handler")
if(ratingHandlerElements.length > 0){
  for (const ratingHandlerElement of ratingHandlerElements) {
    if(ratingHandlerElement){
      const starsElements = ratingHandlerElement.querySelectorAll('.star');
      if(starsElements.length > 0){
        for (const star of starsElements) {
          star.addEventListener('mouseenter', e =>{
            const starValue = e.currentTarget.getAttribute("value")
            handleRatingStarsColorPercent(ratingHandlerElement, starValue)
          })

          star.addEventListener('mouseleave', e =>{
            const actualRate = e.currentTarget.parentElement.getAttribute("rating");
            handleRatingStarsColorPercent(ratingHandlerElement, actualRate)
          })

          star.addEventListener('click', e =>{
            const starValue = e.currentTarget.getAttribute("value")
            e.currentTarget.parentElement.setAttribute("rating", starValue);
            
            handleRatingStarsColorPercent(ratingHandlerElement, starValue)
          })
        }
      }
    }
  }
}