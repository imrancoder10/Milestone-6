// time setup section starts heres...................................
const timeSetup = (seconds) => {
    //get hour and rest seconds
    if (seconds >= 2592000) {
        const months = parseInt(seconds / 2592000);
        const remainingSecond = seconds % 2592000;
        const days = parseInt(remainingSecond / 86400);
        const lastRemainingSecond = remainingSecond % 86400;
        const hour = parseInt(lastRemainingSecond / 3600);
        const atLastRemainingSecond = lastRemainingSecond % 3600;
        const minute = parseInt(atLastRemainingSecond / 60);
        const lastSecond = atLastRemainingSecond % 60;

        return `${months} months ${days} days ${hour} hrs ${minute} mins ${lastSecond} secs ago`;
    } else if (seconds >= 86400) {
        const day = parseInt(seconds / 86400);
        // const hour = parseInt(seconds / 3600);
        let remainingSecond = seconds % 86400;
        let hour = parseInt(remainingSecond / 3600);
        let remainingSecond2 = remainingSecond % 3600;
        let minute = parseInt(remainingSecond2 / 60);
        let lastSecond = remainingSecond2 % 60;
        return `${day} days ${hour} hrs ${minute} mins ${lastSecond} secs ago`;

    } else {
        const hour = parseInt(seconds / 3600);
        let remainingSecond = seconds % 3600;
        let minute = parseInt(remainingSecond / 60);
        let lastSecond = remainingSecond % 60;
        return `${hour} hrs ${minute} mins ${lastSecond} secs ago`;
    }

}
// time setup section ends heres...................................



// Fetch, Load and show Categories on html

// create loadCategories

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(erro => console.log(erro));

}

// remove class 
const removeClass = () => {
    const buttons = document.getElementsByClassName("category-btn");
    // console.log(buttons);
    for (const btn of buttons) {
        btn.classList.remove("btn-success");
    }
}


// load Category Videos section by search

const loadCategoryVideos = async (id) => {
    // alert(id);
    // fetch the url by searching category ways videos
    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
    const data = await res.json();
    videosCategories(data.category);
    // console.log(data.category);

    // btn color starts here...........................
    removeClass();
    const activeBtn = document.getElementById(`btn-${id}`);
    // console.log(activeBtn);
    activeBtn.classList.add('btn-success');
    // activeBtn.classList.add("btn-success");

    // btn color ends here...........................
}


// create displayCategories

const displayCategories = (categories) => {
    const section = document.getElementById('btn-container');
    // console.log(data);
    categories.forEach(item => {
        // console.log(item);
        // create a button
        /*const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;
        section.append(button);*/

        const section = document.getElementById('btn-container');
        const div = document.createElement('div');
        div.innerHTML = `
         <button id="btn-${item.category_id}" class="btn category-btn" onclick="loadCategoryVideos(${item.category_id})">${item.category}</button>
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
    videosContainer.innerHTML = "";

    if (videos.length == 0) {
        videosContainer.classList.remove('grid');
        videosContainer.innerHTML = `
       <div class="flex flex-col justify-center items-center gap-5 mt-14">
             <img src="assets/Icon.png" alt="No Content">
            <h2 class="font-bold text-xl"> No Content Here In This Category</h2>
       </div>
        `;
        return;
    }

    videosContainer.classList.add('grid');
    videos.forEach(video => {
        // console.log(video.thumbnail);
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card bg-base-100 ">
                <figure class="h-[200px] relative">
                    <img src=${video.thumbnail} alt="Shoes" class="h-full w-full object-cover" />
                   
                     ${video.others.posted_date.length == 0 ? "" : ` <span class="absolute bg-gray-700 p-2 rounded-md text-white bottom-3 right-3 text-xs">${timeSetup(video.others.posted_date)}</span>`}
                     
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