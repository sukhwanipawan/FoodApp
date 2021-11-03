import getNavbar from "./navbar.js"
        window.addEventListener("load", function(){
            const commonNavbar = getNavbar();
            document.body.style = "background-image: url(./backImage.jpg);"
            document.body.innerHTML = commonNavbar;
            const searchBtn = document.getElementById("searchBtn");
            searchBtn.addEventListener("click", searchingFoodReceipe);
        })
        async function searchingFoodReceipe(){
            const input = document.getElementById("search").value;
            const resultOfFetch = await fetchReceipe(input);
            if(resultOfFetch.meals === null){
                alert("Nothing found for this search");
                return
            }
            else{
                displayResults(resultOfFetch.meals[0]);
            }
            
        }

        function fetchReceipe(name){
            return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(res => res.json())
        }
        
        function displayResults(foodData){
            const container = document.getElementById("container");
            container.innerHTML = null;
            //creating image to append inside container
            var img = document.createElement("img");
            img.src = foodData.strMealThumb;

            //creating recipe instructions to append inside container
            const instructions = document.createElement("div");
            instructions.innerText = "INSTRUCTIONS TO MAKE THE RECIPE";
            instructions.innerHTML += '<br/>'
            var arr = foodData.strInstructions.split(".");
            for(let i = 0; i < arr.length; i++){
                var eachLine = document.createElement("p");
                eachLine.textContent = arr[i];
                instructions.innerHTML += '<br/>';
                instructions.innerHTML += '<br/>'
                instructions.append(eachLine);
            }
            container.append(img, instructions);
        }