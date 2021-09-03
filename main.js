const bckOff101 = document.querySelector(".bck_off_101");
const typOff100 = bckOff101.querySelector(".typ_off_100");
const brbShpr = document.querySelectorAll("[data-type='card']");
const  brbShpr__ = [];
brbShpr.forEach((e,index)=>{
    brbShpr__[index] = 
        {
        pic:e.querySelector("img").src,
        fname:e.querySelector("h4").innerHTML
        };
    e.querySelector("[data-role='chmod']").addEventListener("click",()=>{
        bckOff101.style.display = "block";
        const info = changeInformation(brbShpr__,index);
        setInterval(()=>{
            typOff100.style.width = "40vw";
            typOff100.style.height = "80vh";
            typOff100.style.opacity = "1"
        },1000);
        const picDir = document.createElement("img");
        picDir.src = info.pic;
        typOff100.appendChild(picDir)
    });
})

function changeInformation(inf,index){
    return inf[index];
}