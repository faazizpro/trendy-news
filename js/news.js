const loadCategories = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMenu(data.data.news_category));
}

const displayMenu = menus => {
    console.log(menus);
    const mainMenu = document.getElementById('menu-id');
    menus.forEach(menu => {
        console.log(menu);
        const menuLi = document.createElement('li');
        menuLi.innerHTML = `
        
        <li><a>${menu.category_name}</a></li>
        `;
        mainMenu.appendChild(menuLi);
    })
   
}

loadCategories();