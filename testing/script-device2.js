// Fungsi untuk menerima postingan dari device 1 dan menampilkan di device 2
function receivePostFromDevice1() {
    const post = JSON.parse(localStorage.getItem('post'));
    
    if (post) {
        const postsContainer = document.getElementById('posts');
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
        
        localStorage.removeItem('post');
    }
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

// Tampilkan postingan saat halaman dimuat
receivePostFromDevice1();
