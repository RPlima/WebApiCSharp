
$(document).ready(function () {
  carregarGrid();

});





function cadastropag() {

  location.href = "cadastro.html";

}



function enviar() {
  /*  var pessoa = {};
    pessoa.Nome = $('#nome').val();
    pessoa.Email = $('#email').val();
    pessoa.Telefone = $('#telefone').val();
    pessoa.Idade = $('#idade').val();
    pessoa.Sexo = $('input[name="radionbutton"]:checked').val();
    pessoa.Cpf = $('#cpf').val();
    pessoa.Cep = $('#cep').val();
    pessoa.Rg = $('#rg').val();
  */

  var nome = $('#nome').val();
  var email = $('#email').val();
  var telefone = $('#telefone').val();
  var nasc = $('#idade').val();
  var sexo = $('input[name="radionbutton"]:checked').val();
  var cpf = $('#cpf').val();
  var cep = $('#cep').val();
  var rg = $('#rg').val();


  var Objeto = {
    Nome: nome,
    Email: email,
    Telefone: telefone,
    Nasc: nasc,
    Sexo: sexo,
    Cpf: cpf,
    Cep: cep,
    Rg: rg
  };


  if (Objeto.Nome == "" || Objeto.Email == "" || Objeto.Telefone == "" || Objeto.Nasc == "" || Objeto.Cpf == "" || Objeto.Cep == "" || Objeto.Rg == "") {
    alert('preencha os campos vazios!');
    return false;
  }

  GetPeloCpf(Objeto.Cpf).then(pessoa => {
      console.log(jQuery.type( pessoa ) === "null");
      if (jQuery.type( pessoa ) === "null" || jQuery.type( pessoa ) === "undefined") {
        Post(Objeto);
    }
    else {
      alert("Cpf inválido ou já existente no sistema!");
  
    }
  })




  //  Post(Objeto.Cpf, Objeto);

  // Post(pessoa);
  // Adiciona na lista a pessoa
  // Limpa as informações no cadastro
  // Carrega a lista com o novo registro 

}




function carregarGrid() {

  GetPessoas().then(pessoas => {

    gridCarregada(pessoas);
  });
}

function gridCarregada(obj) {
  console.log(obj);
  count = 0;
  obj.forEach(item => {
    console.log(item.Nasc);
    registro = (


      "</tr>" +
      "<tr>" +
      "<td>" + item.Nome + "</td>" +
      "<td>" + item.Email + "</td>" +
      "<td>" + item.Telefone + "</td>" +
      "<td>" + item.Idade + "</td>" +
      "<td>" + item.Sexo + "</td>" +
      "<td>" + item.Cep + "</td>" +
      "<td>" + item.Cpf + "</td>" +
      "<td>" + item.Rg + "</td>" +
      "<td><button class='btn btn-success' onclick='Edita(" + item.Id + ");'> Editar</button>" +
      " <button class='btn btn-danger' onclick='Excluir(" + item.Id + ");'> Excluir</button></td>" +
      "</tr>")



    count++;
    if (count == 0) { $("#tabela").html(registro); }
    else { $("#tabela").append(registro); }


  }
  )
}

function Edita(id) {
  GetPeloId(id).then(pessoas => {
    Editar(pessoas);
  });
}

function Editar(pessoa) {


  console.log(pessoa);


  console.log(pessoa.Nome);

  registro = ("<body class='container'>" +
    "<h3>Cadastro de Pessoas:</h3>" +
    "<div class='col-xs-5'>" +
    "<div class='container-fluid'>" +
    "<div class='form-group'>" +
    "<label >Nome:</label>" +
    "<input title='Insira seu nome' placeholder='Seu Nome' type='text' class='form-control' id='nome' name='nome' value='" + pessoa.Nome + "' required></input>" +
    "</div>" +

    "<div class='form-group'>" +
    "<label>Telefone:</label>" +
    "<input type='text' class='form-control' id='telefone' name='telefone' value='" + pessoa.Telefone + "' required>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "<div class='col-xs-5'>" +
    "<div class='container-fluid'>" +
    "<div class='form-group'>" +
    "<label>Email:</label>" +
    "<input type='email' class='form-control' id='email' name='email'  value='" + pessoa.Email + "' required>" +
    "</div>" +


    "<label>Sexo:</label>" +
    "<div>" +

    "<input type='radio' value='Masculino' name='radionbutton' required>" +
    "<label>Masculino</label>" +

    "</div>" +
    "<div>" +
    "<input type='radio' value='Feminino' name='radionbutton'  checked>" +
    "<label>Feminino</label>" +
    "</div>" +
    "</div>" +

    "</div>" +

    "<div class='col-xs-5'>" +
    "<div class='container-fluid'>" +
    "<div class='form-group'>" +
    "<label>Idade:</label>" +
    "<input type='text'class='form-control' id='idade' value='" + pessoa.Nasc + "' required >" +
    "</div>" +
    "</div>" +

    "<div class='container-fluid'>" +
    "<div class='form-group'>" +
    " <label>CPF:</label>" +
    "<input type='text' class='form-control' id='cpf' value='" + pessoa.Cpf + "' required>" +
    "</div>" +
    "</div>" +



    "</div>" +

    "<div class='col-xs-5'>" +
    "<div class='container-fluid'>" +
    "<div class='form-group'>" +
    "<label>CEP:</label>" +
    "<input type='text' class='form-control' id='cep' value='" + pessoa.Cep + "' required>" +
    "</div>" +
    "</div>" +

    "<div class='container-fluid'>" +
    "<div class='form-group'>" +
    "<label>RG:</label>" +
    " <input type='text' class='form-control' id='rg' value='" + pessoa.Rg + "' required>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "<div class='col-xs-10' id='botao'>" +
    "<button class='btn btn-warning btn-block' onclick='editando(" + pessoa.Id + ");'> Editar</button>" +
    "<div>" +
    "</body>")


  $("#campo").html(registro);







}

function editando(id) {
  console.log(id);
  var nome = $('#nome').val();
  var email = $('#email').val();
  var telefone = $('#telefone').val();
  var nasc = $('#idade').val();
  var sexo = $('input[name="radionbutton"]:checked').val();
  var cpf = $('#cpf').val();
  var cep = $('#cep').val();
  var rg = $('#rg').val();

  var Objeto = {
    Id: id,
    Nome: nome,
    Email: email,
    Telefone: telefone,
    Nasc: nasc,
    Sexo: sexo,
    Cpf: cpf,
    Cep: cep,
    Rg: rg
  };

  if (Objeto.Nome == "" || Objeto.Email == "" || Objeto.Telefone == "" || Objeto.Nasc == "" || Objeto.Cpf == "" || Objeto.Cep == "" || Objeto.Rg == "") {
    alert('preencha os campos vazios!');
    return false;
  }
  else {
    Put(id, Objeto);
  }

}


/*var pessoa = {
   Id:id,
   Nome: nome,
   Email: email,
   Telefone: telefone,
   Idade: idade,
   Sexo: sexo,
   Cpf: cpf,
   Cep: cep,
   Rg: rg
};*/





function limpar() {
  $('#id').val(null);
  $('#nome').val(null);
  $('#email').val(null);
}

function Excluir(Id) {
  var name = confirm("Deseja deletar esse cadastro?");
  if (name == true) {
    Delete(Id);
    alert("Operação Realizada com Sucesso!");
    

  }
  else {
    alert("Operação Cancelada!");
  }
}









function sendApi() {
  GetPessoas().then(retorno => {
    console.console('retorno ok');
    console.log(retorno);
  });
  console.log('terminou criacao do ajax.');
}









