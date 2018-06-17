(function(){  
  let AnButton = document.getElementById('AnButton');
  let AnWork = document.getElementById('AnWork');
  let AnList = document.getElementById('AnList');
  let AnShown = false;

  let VolButton = document.getElementById('VolButton');
  let VolWork = document.getElementById('VolWork');
  let VolList = document.getElementById('VolList');
  let VolShown = false;

  AnButton.addEventListener('click', () => {
    if (AnShown === false){
      AnWork.style.height = `${AnList.offsetHeight}px`;
      AnShown = true;
    } else {
      AnWork.style.height = `0`;
      AnShown = false;
    }
  });

  VolButton.addEventListener('click', () => {
    if (VolShown === false){
      VolWork.style.height = `${VolList.offsetHeight}px`;
      VolShown = true;
    } else {
      VolWork.style.height = `0`;
      VolShown = false;
    }
  });

  $(".screenshots__item").click(function(){
    let img = $(this);  
    let src = img.attr('src'); 
    $("body").append(`<div class='popup'> 
                        <div class='popup_bg'></div> 
                        <img src=${src} class='popup_img' /> 
                      </div>`); 
    $(".popup").fadeIn(400); 
    $(".popup_bg").click(function(){       
      $(".popup").fadeOut(400); 
      setTimeout(function() { 
        $(".popup").remove(); 
      }, 400);
    });
  });
})();
