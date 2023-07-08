// Fungsi untuk mengambil data postingan dari file JSON
function getPostsFromJSON() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'posts.json', false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}

// Fungsi untuk menyimpan data postingan ke file JSON
function savePostsToJSON(posts) {
    let json = JSON.stringify(posts);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'save_posts.php', false);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
}

// Fungsi untuk menampilkan postingan yang disimpan di file JSON
function displayPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
    
    const posts = getPostsFromJSON();
    
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
    
    if (post.deletable) {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Hapus';
        deleteButton.addEventListener('click',function() {
            deletePost(post.id);
        });
        
        postElement.appendChild(deleteButton);
    }
    
    postElement.appendChild(imgElement);
    postElement.appendChild(titleElement);
    
    return postElement;
}

// Fungsi untuk menghapus postingan
function deletePost(postId) {
    const posts = getPostsFromJSON();
    
    const filteredPosts = posts.filter(post => post.id !== postId);
    
    savePostsToJSON(filteredPosts);
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
            image: image,
            deletable: true
        };
        
        savePost(post);
        clearForm();
    };
    
    reader.readAsDataURL(file);
});

// Fungsi untuk menyimpan postingan ke file JSON
function savePost(post) {
    const posts = getPostsFromJSON();
    posts.push(post);
    savePostsToJSON(posts);
    displayPosts();
}

function clearForm() {
    document.getElementById('postTitle').value = '';
    document.getElementById('imageUpload').value = '';
}

// Tampilkan postingan saat halaman dimuat
displayPosts();
