var httpRer= new XMLHttpRequest()
httpRer.open("GET","https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza")
httpRer.send()
var allRecipes=[]
httpRer.addEventListener("readystatechange",function(){
if (httpRer.readyState==4&&httpRer.status==200) {
    allRecipes=JSON.parse(httpRer.response).data.recipes                         
    displatRecipes()
}   
})
function displatRecipes(){
    var cartoona=``;
    for (let i = 0; i < allRecipes.length; i++) {
        cartoona+=`
                     <div class="col-lg-4">
                    <div class="card">
                        <img src="${allRecipes[i].image_url}" alt="">
                        <h4>${allRecipes[i].publisher}</h4>
                        <p>${allRecipes[i].title}</p>
                    </div>
                </div>
        
        
        `

        
    }
    document.getElementById("row").innerHTML=cartoona;
}