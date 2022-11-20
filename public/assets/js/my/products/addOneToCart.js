const addOneProductToCart = (btn) => {
  btn.addEventListener("click", async function (e) {
    if (e?.target?.dataset) {
      const productId = Number(e.target.dataset.product);
      const userId = e.target.dataset.user;
      const url = e.target.dataset.urlupdatecart;
      if (!state.cart) {
        const cartData = e.target.dataset.cart;
        state.cart = cartData
          ? JSON.parse(cartData).map((product) => ({
              id: product.product.id,
              amount: product.amount,
            }))
          : [];
      }
      const cart = state.cart;
      console.log("e", e);
      console.log("product_id: ", productId);
      console.log("user: ", userId);
      console.log("cart: ", cart);
      console.log("urlUpdateCart: ", url);
      btn.disabled = true;
      btn.setAttribute("data-kt-indicator", "on");
      const result = await updateUserCart(cart, productId, url, userId);
      btn.removeAttribute("data-kt-indicator");
      btn.disabled = false;
      if (result.error) {
        Swal.fire({
          title: result.error.status,
          text: result.error.message,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      }
      if (result.cart) {
        console.log("before:", state.cart);
        state.cart = result.cart;
        console.log("after:", state.cart);
        console.log("after:", state.cart.length);
        console.log("result:", result);
        const cartMenuItem = document.getElementById("cart-amount");
        cartMenuItem.textContent = state.cart.length;
        const btnClearCard = document.getElementById("btn-clear-card");
        const btnCheckout = document.getElementById("btn-checkout");
        btnClearCard.disabled = false;
        btnCheckout.disabled = false;

        Swal.fire({
          title: "Great choice",
          text: "You have successfully added an item to cart",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      }
    }
  });
};
