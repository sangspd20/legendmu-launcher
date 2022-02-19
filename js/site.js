// When the DOM is ready, run this function
$(document).ready(function () {
  //Set the carousel options
  $("#featured").carousel({
    pauseOnHover: true,
    interval: 5000,
  });
  $("#galery").carousel({
    pauseOnHover: true,
    interval: 3000,
  });

  $(".account-link").click(function () {
    window.open("https://dr.legendmu.vn", "_blank");
  });

  $(".napthe-link").click(function () {
    window.open("https://napthe.legendmu.vn", "_blank");
  });
});
