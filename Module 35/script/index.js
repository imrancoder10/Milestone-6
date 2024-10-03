// Fetch, Load and show Categories on html

// create loadCategories

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(erro => console.log(erro));

}

// create displayCategories

const displayCategories = (categories) => {
    // console.log(data);
    categories.forEach(item => {
        // console.log(item);
        const section = document.getElementById('btn-container');
        const div = document.createElement('div');
        div.innerHTML = `
         <button class="btn">${item.category}</button>
        `;
        section.append(div);
    })

}

// loadVideos
const loadVideos = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
    const data = await res.json();
    videosCategories(data.videos);
}

// videosCategories

const videosCategories = (videos) => {
    // console.log(videos);
    const videosContainer = document.getElementById('videos-cotainer');
    videos.forEach(video => {
        // console.log(video.thumbnail);
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card bg-base-100">
                <figure class="h-[200px]">
                    <img src=${video.thumbnail} alt="Shoes" class="h-full w-full object-cover" />
                </figure>

                <div class="px-0 py-2 flex gap-2">
                    <div>
                        <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} alt="profile img">
                    </div>
                    <div class="text-left">
                        <h2 class="font-extrabold">${video.title}</h2>
                        
                            <div class="flex gap-3 items-center">
                            <p class="text-gray-400 font-normal">${video.authors[0].profile_name}</p>
                            
                            ${video.authors[0].verified == true? ` <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="blue"/>`: " "}
                            </div>
                        <p>
                             Imran
                        </p>                    
                    </div>
                </div>
            </div>
        `;
        videosContainer.appendChild(card);
    })
}


loadCategories();
loadVideos();

// =============================== btn container=====================================