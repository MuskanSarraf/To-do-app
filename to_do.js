//Building TO DO with DOM
let btn=document.querySelector("button");
let ol=document.querySelector("ol");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ol.appendChild(item);

    let del=document.createElement("button");
    del.innerText="Completed";
    item.appendChild(del);
    del.classList.add("delete")

    console.log(inp.value);
    inp.value="";
});
ol.addEventListener("click",function(event){
if(event.target.nodeName=="BUTTON"){
    let listitem=event.target.parentElement;
    listitem.remove();
    console.log("delete");
}
});

//THiS WILL WORK FOR ALREADY EXISTING LIST I.E IT WILL NOT DELETE THE NEW ELEMENT ADDED TO THE LIST
let delbtn=document.querySelectorAll(".delete");
for(del of delbtn){
    del.addEventListener("click",function(){
      let par= this.parentElement;
      console.log(par);
      par.remove();
});
}