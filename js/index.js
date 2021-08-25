const modal = document.querySelector('.modal');
const addLocation = document.querySelector('a.location');
const closeModal = document.querySelector('.closeModal');

addLocation.addEventListener('click', function(event){
    event.stopPropagation()
    modal.showModal();
});


closeModal.addEventListener('click', function(event){
    event.stopPropagation()
    modal.close()
});