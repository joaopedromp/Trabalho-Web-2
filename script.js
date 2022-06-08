isLogin=false;

function handleRegister(){
  const email=document.getElementById('email').value;
  const nome=document.getElementById('nome').value;
  const data=document.getElementById('data').value;
  const senha=document.getElementById('senha').value;
  const senhaRep=document.getElementById('senhaRep').value;
  const text=document.getElementById('resultado')
  
  if (senha==senhaRep){
    localStorage.setItem('email',email);
    localStorage.setItem('nome',nome);
    localStorage.setItem('data',data);
    localStorage.setItem('senha',senha);
    alert('FUNCIONOUUUUUU!!!');
  }else{
    alert('as senhas não coicidem');
  }
}