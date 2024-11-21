const postData = document.getElementById('post-data');

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?limit=10');
        const data = await response.json();
        console.log(data);

        postData.innerHTML = `
            <ul>
                ${data
                    .map(
                        (post) => `
                        <li style="width: 75%; margin-bottom: 10px;">
                            <strong>${post.title}</strong><br>
                            ${post.body}
                        </li>
                    `
                    )
                    .join(' ')}
                
            </ul>
        `;
    } catch (error) {
        console.error('Hay un error:', error);
    }
}
