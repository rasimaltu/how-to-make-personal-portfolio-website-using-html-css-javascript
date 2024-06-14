var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // When window width is <= 640px
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // When window width is <= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  let typing_text = 'Al-Raza Coding';
  let empty_string = '';
  let target = document.querySelector(".typing");
  let char = 0;

  (()=>{
    let typeFun = function(){
        if(char<=typing_text.length){
            target.textContent += `${typing_text.charAt(char)}`;
            char++
            setTimeout(typeFun,150)
        }else{
            setTimeout(()=>{
                target.textContent = ''
                char=0;
                typeFun()
            })
        }
    }
    typeFun()
  })();

  let por_btn = document.querySelector(".btn-container").querySelectorAll(".btn");
  let por_item = document.querySelector(".grid-row").querySelectorAll(".col");
  
  por_btn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        por_btn.forEach((btn)=>{
            btn.classList.remove("active");
        })
        e.target.classList.add("active");
        let data_btn = btn.getAttribute("data-btn");
        por_item.forEach((item)=>{
            let data_item = item.getAttribute("data-item");
            if(data_btn== data_item || data_btn=="all"){
                item.classList.remove("hide");

            }else{
                item.classList.add("hide");
            }
        })
    })

  })


let burger_icon = document.querySelector(".responsive_icon");
let ul = document.querySelector("ul");
burger_icon.addEventListener("click",()=>{
    if(burger_icon.classList.contains("fa-bars-staggered")){
        burger_icon.classList.remove("fa-bars-staggered")
        burger_icon.classList.add('fa-xmark');
        ul.classList.add("active");
    }else{
        burger_icon.classList.add("fa-bars-staggered")
        burger_icon.classList.remove('fa-xmark');
        ul.classList.remove("active");
    }
})
