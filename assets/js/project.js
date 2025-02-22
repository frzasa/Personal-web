let blogs = [];

function addBlog(event) {
    event.preventDefault();

    let name = document.getElementById('project-name').value;
    let start = document.getElementById('start-date').value;
    let end = document.getElementById('end-date').value;
    let description = document.getElementById('description').value;
    let image = document.getElementById('image');
    
    let technologies = [];
    document.querySelectorAll('input[name="technologies"]:checked').forEach((checkbox) => {
        technologies.push(checkbox.labels[0].innerText);
    });

    let imageFileName = "assets/img/default.png";
    if (image.files.length > 0) {
        let file = image.files[0];
        if (file.type.startsWith("image/")) {
            imageFileName = URL.createObjectURL(file);
        } else {
            alert("Please upload a valid image file!");
            return;
        }
    }

    let newBlog = {
        name: name,
        duration: end ? `${start} - ${end}` : `${start}`,
        description: description,
        technologies: technologies.join(', '),
        image: imageFileName,
        author: "Feby Zasa",
        postedAt: new Date()
    };

    blogs.push(newBlog);
    renderBlog();
}

function renderBlog() {
    let containerElement = document.getElementById('projectList');
    containerElement.innerHTML = firstBlogContent();

    containerElement.innerHTML = blogs.map(blog => `
<article class="project-item"> 
                <div class="project-item-img">
                    <img src="${blog.image}" alt="blog image">
                </div>

                <div class="project-item-text">
                    
                    <a href="project-detail.html" style="text-decoration: none;">
                        <h1>${blog.name}</h1>
                    </a>

                    <i> ${blog.duration} | ${blog.technologies} | ${blog.author}</i>

                    <p>${blog.description}</p>
                
                    <div>
                    <ul class="project-icons">
                        <li>
                            <a href="#"><img src="assets/img/play.png" alt=""></a>
                        </li>
                        <li>
                            <a href="#"><img src="assets/img/android.png" alt=""></a>
                        </li>
                        <li>
                            <a href="#"><img src="assets/img/java.png" alt=""></a>
                        </li>
                    </div>

                    <div><p>${timeAgo(blog.postedAt)}</p></div>

                    <div class="project-item-buttons">
                        <button class="project-edit-button">Edit Blog</button>
                        <button class="project-post-button">Post Blog</button>
                    </div>
                </div>
            </article>
    `).join('');
}

function firstBlogContent() {
    return `
    <article class="project-item"> 
                <div class="project-item-img">
                    <img src="assets/img/blog-img.png" alt="blog image">
                </div>

                <div class="project-item-text">
                    
                    <div class="project-item-buttons">
                        <button class="project-edit-button">Edit Blog</button>
                        <button class="project-post-button">Post Blog</button>
                    </div>
                    
                    <a href="project-detail.html" style="text-decoration: none;">
                        <h1 class="project-item-title">Dumbways App 2021</h1>
                    </a>

                    <i> 30-01-2024-2025-02-28 | Node Js | Feby Zasa</i>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore et consectetur labore. Iste, illum. Dolores illo quibusdam impedit molestias, necessitatibus consectetur nisi laborum nam doloribus vitae exercitationem error provident!</p>
                
                    <p class="project-item-relative-time">1 day ago</p>
                </div>
            </article>
    `
}

function timeAgo(postDate) {
    const now = new Date();
    const past = new Date(postDate);
    const seconds = Math.floor((now - past) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} days ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} weeks ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} months ago`;
    const years = Math.floor(days / 365);
    return `${years} years ago`;
}
