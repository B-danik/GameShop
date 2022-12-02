const labels = document.querySelectorAll(".form-control label");
const url = 'http://localhost:3001'


labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

async function test(form)
{
   const check = await user.check_user(form.username.value,form.password.value);
   if(check === 0)
   {
    console.log('try');
   }
}


const loginUser = async function(form){
  try {       
    const response = await fetch(url + '/login', {
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
  }catch(e)
  {
    $.notify('Ошибка входа (message: ' + e + ').', "error");
  }
}