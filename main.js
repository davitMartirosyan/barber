const bckOff101 = document.querySelector(".bck_off_101");
const typOff100 = bckOff101.querySelector(".typ_off_100");
const pic = typOff100.querySelector(".typ_off_99").querySelector("img");
const fname = typOff100.querySelector(".f_98");
const brbShpr = document.querySelectorAll("[data-type='card']");
const  brbShpr__ = [];
brbShpr.forEach((e,index)=>{
    brbShpr__[index] = 
        {
        pic:e.querySelector("img").src,
        fname:e.querySelector("h4").innerHTML
        };
    e.querySelector("[data-role='chmod']").addEventListener("click",()=>{
        document.body.style.overflow = "hidden";
        bckOff101.style.display = "block";
        const info = changeInformation(brbShpr__,index);
        fname.value = info.fname;
        pic.src = info.pic;
            typOff100.style.width = "80%";
            typOff100.style.height = "90vh";
            typOff100.style.opacity = "1"
        
    });
})
typOff100.querySelector(".cl").addEventListener("click",function(){
    document.body.style.overflow = "visible";
    bckOff101.style.display = "none";
    typOff100.style.width = "0";
    typOff100.style.height = "0";
    typOff100.style.opacity = "0";
    pic.src = "";
    fname.value = "";
})
function changeInformation(inf,index){
    return inf[index];
}
const stuff = document.querySelector(".br_shp_20");
const tabs = stuff.querySelectorAll("[data-target='tab']");
const siblings = Array.prototype.slice.call(tabs);
const context = stuff.querySelectorAll("[data-target='tab-context']");
const contextSiblings = Array.prototype.slice.call(context);
tabs[0].classList.add("active");
context[0].classList.add("active")
tabs.forEach((tab,index) => {
    tab.addEventListener("click",(e)=>{
        e.preventDefault();
        replace(tab,siblings,context,contextSiblings,index);
    })
})

function replace(tab,siblings,context,contextSiblings,index){
    for(let i=0, j=0; i<siblings.length, j<contextSiblings.length; i++, j++){
        if(siblings[i] != tab && siblings[i].classList.contains("active") && contextSiblings[j] != context[index] && contextSiblings[j].classList.contains("active")){
            siblings[i].classList.remove("active");
            contextSiblings[j].classList.remove("active");
            tab.classList.add("active");
            context[index].classList.add("active");
        }
    }
}
