(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();


// new.ejs
function toggleOtherCategory() {
  const categorySelect = document.getElementById('category');
  const otherCategoryInput = document.getElementById('otherCategoryInput');
  if(categorySelect.value === 'Other') {
    otherCategoryInput.style.display = 'block';
    document.getElementById('other-category').setAttribute('required', 'true');
  }else{
    otherCategoryInput.style.display = 'none';
    document.getElementById('other-category').removeAttribute('required');
  }
}


//index.ejs
const filters = document.querySelectorAll('.filter');
const listings = document.querySelectorAll('.listing-card');

filters.forEach((filter)=>{
  filter.addEventListener('click',()=>{
    const selectedCategory = filter.getAttribute('data-category').toLowerCase();

    filters.forEach((f) => {
      f.classList.remove('active');
    });

    listings.forEach((listing) => {
      const listingCategory = listing.getAttribute('data-category').toLowerCase();
      if(selectedCategory === 'all' || listingCategory === selectedCategory) {
        listing.style.display = 'block'; //show the listing
      }else{
        listing.style.display = 'none'; //hide listing
      }
    });
    //layout after filtering
    setTimeout(() => {
      const row = document.querySelector('.row');
      row.style.display = 'flex';
    }, 100);
  });
});