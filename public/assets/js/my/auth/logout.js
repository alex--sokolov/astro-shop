const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', async function (e) {
        await logout('astro-shop-token');
        location.reload()
      }
  )
}
