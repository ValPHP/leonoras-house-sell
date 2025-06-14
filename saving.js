// Load posts from server
async function loadPosts() {
    try {
        const response = await fetch('http://localhost:3000/posts');
        posts = await response.json();
    } catch {
        posts = [];
    }
}

// Save posts to server
async function savePosts() {
    try {
        await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(posts),
        });
    } catch (error) {
        console.error('Error saving posts:', error);
    }
}

// Delete post from server
async function deletePost(index) {
    try {
        await fetch(`http://localhost:3000/posts/${index}`, {
            method: 'DELETE',
        });
        posts.splice(index, 1);
        renderPosts();
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}
