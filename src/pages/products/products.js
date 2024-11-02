const productsFilterElement = document.getElementById("productsFilter");
const productsFilterTogglerElement = document.getElementById("productsFilterToggler");

function toggleProductsFilter(){
  if(productsFilterElement){
    productsFilterElement.classList.toggle("show")
  }  
}
if(productsFilterTogglerElement){
  productsFilterTogglerElement.addEventListener('click', toggleProductsFilter)
}
let totalResultsCountReturned = 200;
const data = Array.from({length:totalResultsCountReturned}, (_, i) => i+1);
$('#productsPagination').pagination({
  dataSource: data,
  pageRange:1,
  callback: function(data, pagination) {
      // template method of yourself
      // var html = template(data);
      // dataContainer.html(html);
  }
})