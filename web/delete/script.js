// Fungsi untuk mengambil data postingan dari localStorage
function getPostsFromStorage() {
    let posts = localStorage.getItem('posts');
    if (posts) {
        return JSON.parse(posts);
    } else {
        return [];
    }
}

// Fungsi untuk menyimpan data postingan ke localStorage
function savePostsToStorage(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Fungsi untuk menampilkan postingan yang disimpan di localStorage
function displayPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
    
    const posts = getPostsFromStorage();
    
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
    
    const titleElement = document.createElement('h3');
    titleElement.classList.add('title');
    titleElement.textContent = post.title;
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Hapus';
    deleteButton.addEventListener('click', function() {
        deletePost(post.id);
    });
    
    postElement.appendChild(imgElement);
    postElement.appendChild(titleElement);
    postElement.appendChild(deleteButton);
    
    return postElement;
}

// Fungsi untuk menghapus postingan
function deletePost(postId) {
    const posts = getPostsFromStorage();
    
    const filteredPosts = posts.filter(post => post.id !== postId);
    
    savePostsToStorage(filteredPosts);
    displayPosts();
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
            id: Date.now(),
            title: title,
            image: image
        };
        
        savePost(post);
        clearForm();
    };
    
    reader.readAsDataURL(file);
});

// Fungsi untuk menyimpan postingan ke localStorage
function savePost(post) {
    const posts = getPostsFromStorage();
    posts.push(post);
    savePostsToStorage(posts);
    displayPosts();
}

function clearForm() {
    document.getElementById('postTitle').value = '';
    document.getElementById('imageUpload').value = '';
}

// Tampilkan postingan saat halaman dimuat
displayPosts();
