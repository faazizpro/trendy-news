const loadCategories = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMenu(data.data.news_category))
    .catch(err => alert(err.message))
    
}

const displayMenu = menus => {
    
    const mainMenu = document.getElementById('menu-id');

    menus.forEach(menu => {
        console.log(menu.category_id);
        const menuLi = document.createElement('li');
        menuLi.setAttribute("id", "liN");
        menuLi.innerHTML = `
        <li onclick="loadClickLi(${menu.category_id})">${menu.category_name}</li>
        `;
        mainMenu.appendChild(menuLi);
    })
}


    const loadClickLi = (id) => {
        document.getElementById('loader').classList.remove('hidden')
        const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayLiNews(data.data))

    }
    
    const displayLiNews = newsItems => {
        document.getElementById('loader').classList.add('hidden')

        

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
           <div class="container px-11 py-24 mx-auto">
               <div class="flex flex-wrap -m-4">
                   <div class="p-4 sm:w-3/4 lg:w-3/4">
                       <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                           <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                               src="${item.image_url}" alt="blog">
                           <div class="p-6">
                               <h2 class="text-base font-medium text-indigo-400 mb-1">${item.author.published_date}</h2>
                               <h1 class="text-2xl font-semibold mb-3">${item.title}</h1>
                               <p class="leading-relaxed mb-3">${item.details.slice(0, 200)+ '...'}</p>

                               
                               
                               <div class="flex items-center justify-center ">

                                <!-- The button to open modal -->
                                    <label for="my-modal-4" class="btn modal-button">
                                        <a 
                                            class="text-indigo-500 font-bold inline-flex items-center md:mb-2 lg:mb-0">Read More
                                                <svg 
                                                    class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                        </a>
                                    </label>
                                
                                        <!-- Put this part before </body> tag -->
                                    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                                    <label for="my-modal-4" class="modal cursor-pointer">
                                            <label class="modal-box relative" for="">
                                            <h3 class="text-lg font-bold">Do You Want More Information?</h3>
                                            <p class="py-4">If you want to know more information, Please check our blog section.</p>
                                            </label>
                                    </label>

                                    
                               
                                    <span 
                                        class="text-gray-400 mr-3 inline-flex items-center text-sm pr-3 py-1      border-gray-200">
                                        <div class="inline-flex items-center justify-center flex-wrap">
                                            <img src="${item.author.img}" class="rounded w-10 ml-10 mr-3">
                                            <div>
                                                <p>${item.author.name}</p>
                                            </div>
                                        </div>
                                    </span> 

                                    <span
                                       class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1  border-gray-200">
                                       <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                           stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                           <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                           <circle cx="12" cy="12" r="3"></circle>
                                       </svg>${item.total_view}
                                    </span>
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

loadCategories(loadClickLi(08));

