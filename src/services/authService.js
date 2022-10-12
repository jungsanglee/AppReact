export const logIn = (username, password) => (
  new Promise((resolve, reject) => {
    if (username === 'admin' && password === '12345'){
      resolve();
    } else {
      reject(new Error('Неправильное имя пользователя или пароль.'));
    }
  })
);


