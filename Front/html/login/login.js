const labels = document.querySelectorAll(".form-control label");
const url = 'http://localhost:3002/users'


labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

const loginUser = async function(form){
  try {       
    const response = await fetch(url + '/login', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: form.username.value,
          password: form.password.value
      })
  });
  const data = await response.json()
  console.log(date)
  if (data.result === 'SUCCESS') {
    window.location.href = '/user/' + data.id +
        '/user_name/' + data.name +
        '/login/' + data.login +
        '/isadmin/' + data.isadmin
    ;
} else {
    $.notify('Ошибка входа (message: ' + data.message + ').', "error");
}
  }catch(e)
  {
    $.notify('Ошибка входа (message: ' + e + ').', "error");
  }
}