
const reservaForm = document.getElementById("reserva-form");

reservaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const people = document.getElementById("people").value;
    const date = document.getElementById("date").value;
    const comments = document.getElementById("comments").value;

    if (name === "" || phone === "" || people === "" || date === "") {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("people", people);
    formData.append("date", date);
    formData.append("comments", comments);

 
    alert("Reserva enviada com sucesso!");

   
    reservaForm.reset();
});


const contatoForm = document.getElementById("contato-form");

contatoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome === "" || telefone === "" || mensagem === "") {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("telefone", telefone);
    formData.append("mensagem", mensagem);

   
    alert("Mensagem enviada com sucesso!");

  
    contatoForm.reset();
});
