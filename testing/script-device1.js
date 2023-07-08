// Fungsi untuk mengirim postingan ke device 2
function sendPostToDevice2(post) {
    localStorage.setItem('post', JSON.stringify(post));
}

document.getElementById('newPostForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('postTitle').value;
    const fileInput = document.getElementById('imageUpload');
    
    if (!fileInput.files[0]) {
        alert('Silakan pilih gambar.');
        return;
    }
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const image = e.target.result;
        
        const post = {
            title: title,
            image: image
        };
        
        sendPostToDevice2(post);
        clearForm();
    };
    
    reader.readAsDataURL(file);
});

function clearForm() {
    document.getElementById('postTitle').value = '';
    document.getElementById('imageUpload').value = '';
}
