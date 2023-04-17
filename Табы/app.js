
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems =document.querySelectorAll(".tabs__item");

// tabsBtn.forEach(function(item){
//     item.addEventListener("click", function(){
//         console.log("Clicked");
//     })
// });

tabsBtn.forEach(onTabClick);

//Вынисли в отдельную ф-цию
function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains("active")){
            tabsBtn.forEach(function(item){
                item.classList.remove("active");
        });
    
            tabsItems.forEach(function(item){
                item.classList.remove("active");
            });
    
            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        }
    });
}

//Имитируем клик на 1 таб
document.querySelector(".tabs__nav-btn").click();

//Можна сделать клик на 2 или 3 таб
// document.querySelector(".tabs__nav-btn:nth-child(2)").click();