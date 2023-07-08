// Fungsi untuk mengambil data postingan dari local storage
function getPostsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

// Fungsi untuk menyimpan data postingan ke local storage
function savePostsToLocalStorage(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Fungsi untuk menampilkan postingan yang disimpan di local storage
function displayPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
    
    const posts = getPostsFromLocalStorage();
    
    posts.forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
}

// Fungsi untuk membuat elemen postingan
function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    const imgElement = document.createElement('img');
    imgElement.src = post.image;
    
    const titleElement = document.createElement('p');
    titleElement.classList.add('title');
    titleElement.textContent = post.title;
    
    postElement.appendChild(imgElement);
    postElement.appendChild(titleElement);
    
    return postElement;
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
        
        savePost(post);
        clearForm();
    };
    
    reader.readAsDataURL(file);
});

// Fungsi untuk menyimpan postingan ke local storage
function savePost(post) {
    const posts= getPostsFromLocalStorage();
    posts.push(post);
    savePostsToLocalStorage(posts);
    displayPosts();
}

function clearForm() {
    document.getElementById('postTitle').value = '';
    document.getElementById('imageUpload').value = '';
}

// Tampilkan postingan saat halaman dimuat
displayPosts();
