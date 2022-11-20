const handleCheckout = (e) => {
  var menuEl = document.querySelector("#btn-cart-menu");
  var menu = KTMenu.getInstance(menuEl);
  menu.on("kt.menu.dropdown.hide", function () {
    return false;
  });
  e.preventDefault;
  e.stopPropagation();
  Swal.fire({
    text: "Here you will see checkout page later",
    icon: "success",
    allowOutsideClick: false,
    buttonsStyling: false,
    confirmButtonText: "Ok, got it!",
    customClass: {
      confirmButton: "btn btn-primary",
    },
  }).then(() => {
    e.preventDefault;
    e.stopPropagation();
  });
};
