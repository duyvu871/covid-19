
function filterFunction(el) {
    var input, filter, ul, li, a, i ,lengths;
    input = el;
    filter = input.value.toLowerCase();
    a = document.querySelectorAll('[list-data]');
    lengths = a.length
    for (i = 0; i < lengths; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        if (txtValue.toLowerCase() === "") {
          a[i].style.display = "none";
        }else{
          a[i].style.display = "block";
        }
      } else {
        a[i].style.display = "none";
      }
    }
}
function handleEvent(data,arr) {
    let textValue
    const searchBox = document.querySelector('.box')
    const inputElement = document.querySelector('#search')
    const ulElement = document.querySelector('#listCountry')
    inputElement.addEventListener('keyup',(e)=>{
        filterFunction(inputElement)
    })
    inputElement.addEventListener('focus',(e)=>{
      ulElement.style.display = 'block'
    })
    document.querySelector('#checking').onchange =(e)=>{
      if (!e.target.checked) {
        ulElement.style.display = 'none'
      }else{
        document.querySelector('#listCountry').onclick=(e)=>{
          textValue = e.target.textContent || e. target.innerText
          handleRenderTotal(data,arr,textValue);
        }
      }
    }
}