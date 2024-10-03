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
        console.log(item);
        const section = document.getElementById('btn-container');
        const div = document.createElement('div');
        div.innerHTML = `
         <button class="btn">${item.category}</button>
        `;
        section.append(div);
    })

}


loadCategories();

// =============================== btn container=====================================