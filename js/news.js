const loadCategories = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMenu(data.data.news_category));
}

const displayMenu = menus => {
    // console.log(menus);
    const mainMenu = document.getElementById('menu-id');
    // mainMenu.innerHTML = `
    // <li><a>${menu.category_name}</a></li>
    // `
    menus.forEach(menu => {
        // console.log(menu);
        const menuLi = document.createElement('li');
        menuLi.setAttribute("id", "liN");
        menuLi.innerHTML = `
        <li onclick="loadClickLi(${menu.category_id})">${menu.category_name}</li>
        `;
        mainMenu.appendChild(menuLi);
    })
}


    const loadClickLi = (id) => {
        const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayLiNews(data.data))
        // console.log(url);
        
    }
    
    const displayLiNews = newsItems => {
        console.log(newsItems.length);

        const totalNews = document.getElementById('numbers-news');
        totalNews.innerHTML = `
            <div class="stat">
                <div class=" text-black text-2xl font-bold">${newsItems.length} Items Found</div>
            </div>
        `;

        const displayCards = document.getElementById('display-card');
        displayCards.innerHTML = '';
        for(const item of newsItems){
            
            // console.log(item);
            const menuCards = document.createElement('div');
           menuCards.innerHTML = `
           <div class="md:h-full  items-center text-black">
           <div class="container px-5 py-24 mx-auto">
               <div class="flex flex-wrap -m-4">
                   <div class="p-4 sm:w-3/4 lg:w-3/4">
                       <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                           <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                               src="${item.image_url}" alt="blog">
                           <div class="p-6">
                               <h2 class="text-base font-medium text-indigo-400 mb-1">4 September, 2022</h2>
                               <h1 class="text-2xl font-semibold mb-3">${item.title}</h1>
                               <p class="leading-relaxed mb-3">${item.details}</p>
                               <div class="flex items-center flex-wrap ">
                                   <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                       <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                           fill="none" stroke-linecap="round" stroke-linejoin="round">
                                           <path d="M5 12h14"></path>
                                           <path d="M12 5l7 7-7 7"></path>
                                       </svg>
                                   </a>
                                   <span
                                       class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1  border-gray-200">
                                       <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                           stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                           <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                           <circle cx="12" cy="12" r="3"></circle>
                                       </svg>1.2K
                                   </span>
                                   <!-- <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                       <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                           stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                           <path
                                               d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                           </path>
                                       </svg>6
                                   </span> -->
                               </div>
                           </div>
                       </div>
                   </div>
   
               </div>
           </div>
       </div>
           `;
           displayCards.appendChild(menuCards);
        

        }
    }


loadCategories();

// <li><a>${menu.category_name}</a></li>