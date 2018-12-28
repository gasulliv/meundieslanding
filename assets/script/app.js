window.onscroll = function() {
  scrollAppear();
};

function scrollAppear() {
  adventurousUndies();
  blueUndies();
  classyUndies();
  dimSumUndies();

  var x = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;;
  console.log(x);

  function adventurousUndies (){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("dimSumUndies").className = "adventurous appearRight";
      } else {
        document.getElementById("dimSumUndies").className = "adventurous hideRight";
    }
};
  function blueUndies() {
    if (document.body.scrollTop > 650|| document.documentElement.scrollTop > 650){
        document.getElementById("blueUndies").className = "bold appearLeft";
      }
    else {
      document.getElementById("blueUndies").className = "bold boldres";
    }
};
  function classyUndies() {
    if (document.body.scrollTop > 1100|| document.documentElement.scrollTop > 1100){
        document.getElementById("classyUndies").className = "classy appearRight";
      }
    else {
      document.getElementById("classyUndies").className = "classy";
    }
  };
  function dimSumUndies() {
    if (document.body.scrollTop > 1680|| document.documentElement.scrollTop > 1680){
        document.getElementById("dimSum").className = "dimSum botToTop";
      }
    else {
      document.getElementById("dimSum").className = "dimSum";
    }
  };

}
