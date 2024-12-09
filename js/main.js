let elItemsList = document.querySelector(".list")
let searchInput = document.querySelector(".search-input")
let elModal = document.querySelector(".modal")
let elCount = document.querySelector(".count")

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function renderAllItems(arr, list){
    list.innerHTML = null
    arr.map(item=>{
        elCount.textContent = arr.length
        let listItems = document.createElement("li")
        listItems.className = "ant-col first-element ant-col-xs-12 ant-col-sm-8 ant-col-md-12 ant-col-xl-8 css-ed5zg0 pl-[12px] w-[239px] h-[239px] mb-[30px] pr-[12px] " 
        listItems.id = "item"
        listItems.innerHTML = `
                <img class="max-h-[96px] scale-90 md:scale-100 xl:scale-[115%] mb-[0px] duration-300 mt-[-100px] group-hover:scale-125 w-[63px] w-full flex justify-center xl:mb-3" src="${item.img}" alt="${item.name}}">
                <strong class="text-gray-500" mt-[50px] text-center>#${item.id}</strong>
                <h2 class="font-extrabold uppercase">${item.name}</h2>
        ` 
        list.append(listItems)
        function weak(arr, list){
            const createnWeakList = document.createElement("ul")
            createnWeakList.className = "flex mb-[-30px] items-center gap-[10px]"
            arr.weaknesses.forEach(element => {
                const createnWeak = document.createElement("li")
                createnWeak.className = "text-white  w-[50px] h-[24px] flex flex-wrap justify-center items-center rounded-md text-[9px]"
                createnWeak.textContent = element.toUpperCase()
                list.append(createnWeakList)
                createnWeakList.append(createnWeak)
                createnWeak.style.backgroundColor = getRandomColor()    
            });
        }
        function types(arr, list){
            const createnTypeList = document.createElement("ul")
            createnTypeList.className = "flex mb-[-30px] items-center gap-[10px]"
            arr.type.forEach(element => {
                const createnType = document.createElement("li")
                createnType.className = "text-white  w-[50px] h-[24px] flex flex-wrap justify-center items-center rounded-md text-[9px]"
                createnType.textContent = element.toUpperCase()
                list.append(createnTypeList)
                createnTypeList.append(createnType)
                if(createnType.textContent == "Grass"){
                    createnType.classList = "bg-green-500 text-white w-[50px] h-[24px] flex justify-center items-center rounded-md"
                }else if(createnType.textContent == "Poison"){
                    createnType.className = "bg-[purple] text-white w-[50px] h-[24px] flex justify-center items-center rounded-md"
                }else if(createnType.textContent == "Fire"){
                    createnType.className = "bg-[orange] text-white  w-[50px] h-[24px] flex justify-center items-center rounded-md"
                }else if(createnType.textContent == "Flying"){
                    createnType.className = "bg-purple-400 text-white  w-[50px] h-[24px] flex justify-center items-center rounded-md"
                }
                else{
                    createnType.style.backgroundColor = getRandomColor()
                }
            });
        }
        types(item, listItems)
        listItems.addEventListener("click", function(evt){
          elModal.innerHTML = `
            <img class="max-w-[350px] fixed right-[200px] top-[5px] lg:max-h-[20vh] max-h-[18vh] h-[200px] object-contain image-rendering" src="${item.img}" alt="${item.name}">
            <div class="flex items-center justify-between">
                <button class="px-3 py-1 rounded-lg border bg-gray-200 font-semibold">${item.height}</button>
                <button class="px-3 py-1 rounded-lg border bg-gray-200 font-semibold">${item.weight}</button>
            </div>
            <strong class="text-[#919191] text-center mt-[60px] text-sm font-semibold">#${item.id}</strong>
            <h2 class="uppercase text-extrabold md:text-sm mt-[20px] text-center">${item.name}</h2>
            <div class="flex items-center justify-between block mt-[20px]">
                <div class="types-found flex flex-col item-center">
                    <h3 class="text-center">Types:</h3>
                </div>           
                <div class="weaks-found">
                    <h3 class="text-center">Weakness</h3>
                </div>
             </div>
          `  
          let modalTypes = document.querySelector(".types-found")
          types(item, modalTypes)
          let modalWeak = document.querySelector(".weaks-found")
          weak(item, modalWeak)
          

        })
    })
    
}

renderAllItems(pokemons, elItemsList)

searchInput.addEventListener("input", function(evt){
    let value = evt.target.value
    let searched = pokemons.filter(item=> item.name.toLowerCase().includes(value.toLowerCase()) ||"00" +value == item.num + "" || "0" +value == item.num + "" || ""+value == item.num + "")
    renderAllItems(searched, elItemsList)
})
      
