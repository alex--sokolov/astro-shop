const loginUser = async (login, password) => {
  const data = {
    identifier: login, password,
  };
  const response = await fetch(window.urlLogin, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const getCookie = (cookieName) => {
  let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + cookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const setCookie = (cookieName, cookieValue, expiresInDays) => {
  const date = new Date();
  const expiresInMillis = expiresInDays * 86400000;
  date.setTime(date.getTime() + expiresInMillis);
  document.cookie = cookieName + "=" + cookieValue + ";expires=" + date.toUTCString() + ";path=/";
};

const logout = async (cookieName) => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

const registerNewUser = async (username, email, password) => {
  const data = {
    username, email, password,
  };
  const response = await fetch(window.urlRegister, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const updateUserCart = async (prevValue, productId, url, user) => {
  const token = getCookie('astro-shop-token');
  const cart = prevValue.map(product => product.id).includes(productId) ? prevValue.map(product => product.id === productId ? {
    ...product, amount: product.amount + 1
  } : product) : [...prevValue, {id: productId, amount: 1}];
  const cartData = cart.map(product => ({
    amount: product.amount,
    product: {
      id: product.id
    }
  }));
  const data = {
    Cart: cartData
  }
  const endpoint = url + '/' + user;
  const response = await fetch(endpoint, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return {...await response.json(), cart};
};
