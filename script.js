document.addEventListener('DOMContentLoaded', function() {  
    const imageUrlInput = document.getElementById('imageUrl');  
    const addImageBtn = document.getElementById('addImageBtn');  
    const deleteImageBtn = document.getElementById('deleteImageBtn');  
    const gallery = document.getElementById('gallery');  
  
    let selectedImage = null;  
  
    addImageBtn.addEventListener('click', addImage);  
    deleteImageBtn.addEventListener('click', deleteSelectedImage);  
  
    function addImage() {  
        const imageUrl = imageUrlInput.value;  
        if (imageUrl) {  
            const img = document.createElement('img');  
            img.src = imageUrl;  
            img.alt = 'Imagen de la galería';  
            img.addEventListener('click', selectImage); // Agregar evento de click  
            gallery.appendChild(img);  
            imageUrlInput.value = ''; // Limpiar el campo de entrada  
        } else {  
            alert('Por favor, ingresa una URL de imagen válida.');  
        }  
    }  
  
    function selectImage(event) {  
        // Deseleccionar la imagen previamente seleccionada  
        if (selectedImage) {  
            selectedImage.classList.remove('selected');  
        }  
  
        // Seleccionar la nueva imagen  
        selectedImage = event.target;  
        selectedImage.classList.add('selected');  
    }  
  
    function deleteSelectedImage() {  
        if (selectedImage) {  
            gallery.removeChild(selectedImage);  
            selectedImage = null; // Limpiar la selección  
        } else {  
            alert('Por favor, selecciona una imagen para eliminar.');  
        }  
    }  
  
    // Evento para eliminar con la tecla delete o backspace  
    document.addEventListener('keydown', function(event) {  
        if (event.key === 'Delete' || event.key === 'Backspace') {  
            deleteSelectedImage();  
        }  
    });  
});  