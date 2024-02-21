
(function () {
  'use strict'
  console.log(a);
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault()
        if (!form.checkValidity()) {
          event.stopPropagation()

        }else{
        	validacao2();
        }
        form.classList.add('was-validated')
      }, false)
    })

/*
		
	    //verificarExistenciaID(numeroAleatorio);

		//=============================
		//GLOBARIAR VARIAVEIS
		//=============================	
		var primeiro_nome="";
		var nome_meio="";
		var ultimo_nome="";
		var sexo='';
		var telefone="";
		var morada="";
		var cidade="";
		var inputImagem = document.querySelector('input[name="pic_perfil"]');
		var imagemPreview = document.getElementById('imagem-preview');	
		var arquivoImagem="";
		var nivel="";
		var email="";
		var senha="";
		var pergunta_recuperacao="";
		var resposta_recuperacao="";		

*/
		//========================================
		//IA de NOME
		//=======================================

		// Lista de nomes masculinos
		var nomesMasculinos = [
		"João", "Pedro", "Lucas", "Miguel", "Arthur",
		"Gabriel", "Enzo", "Matheus", "Heitor", "Davi"
		];



		var paragrafo = document.getElementById('nomesFemininos');
		if (paragrafo) {	
			 const nomesFemininos = paragrafo.textContent.trim().split(',');
		}


















		// Lista de nomes femininos
		var nomef=["Ana", "Joana", "Sofia", "Beatriz", "Laura", "Camila", "Isabella", "Gabriela", "Manuela", "Juliana", "Carolina", "Mariana", "Eduarda", "Valentina", "Letícia", "Natália", "Fernanda", "Vitória", "Amanda", "Fatima", "Aisha", "Salomé", "Adélia", "Mónica", "Anabela", "Gracinda", "Clarisse", "Ivone", "Edite", "Alice", "Luísa", "Elvira", "Ilda", "Celeste", "Zulmira", "Isabel", "Hortênsia", "Ester", "Jacinta", "Maria", "Ana", "Sofia", "Beatriz", "Joana", "Laura", "Inês", "Carolina", "Matilde", "Mariana", "Diana", "Filipa", "Leonor", "Rita", "Sara", "Catarina", "Margarida", "Mafalda", "Isabel", "Francisca", "Madalena", "Luísa", "Andreia", "Bruna", "Patrícia", "Débora", "Vanessa", "Cláudia", "Tânia", "Eduarda", "Helena", "Daniela", "Débora", "Telma", "Lídia", "Ana Rita", "Bárbara", "Soraia", "Vera", "Juliana", "Adriana", "Nicole", "Andreia", "Mónica", "Eliana", "Carla", "Marisa", "Ângela", "Joaquina", "Fernanda", "Célia", "Solange", "Vânia", "Fátima", "Patrícia", "Vanessa", "Cristiana", "Raquel", "Susana", "Sónia", "Lorena", "Carolina", "Yara", "Camila", "Lara", "Ema", "Rosana", "Dalila", "Bia", "Alice", "Clara", "Ester", "Flor", "Letícia", "Milena", "Lúcia", "Ivone", "Júlia", "Odete", "Tereza", "Nádia", "Paula", "Silvia", "Tânia", "Vitória", "Yara", "Zara", "Miriam", "Noélia", "Odete", "Rosário", "Sandra", "Teresa", "Ulrika", "Vera", "Ximena", "Yolanda", "Zélia", "Zilda", "Zuleica", "Adrielle", "Alana", "Alice", "Alícia", "Alina", "Alissa", "Althea", "Amália", "Amara", "Amélia", "Amora", "Anabela", "Anamar", "Ananda", "Andreza", "Antonella", "Arabela", "Ariadna", "Ariana", "Ayla", "Belinda", "Bianca", "Branca", "Brisa", "Calista", "Camile", "Cassandra", "Cecília", "Celina", "Clarice", "Cloé", "Dália", "Dandara", "Dani", "Dara", "Dayane", "Dora", "Dulce", "Érica", "Elisa", "Elvira", "Elza", "Ema", "Emanuela", "Erika", "Estela", "Esther", "Eva", "Fabiana", "Fábia", "Fernanda", "Flávia", "Francisca", "Gabriela", "Gaela", "Geórgia", "Giovanna", "Gisela", "Glória", "Graça", "Greta", "Helena", "Heloísa", "Hera", "Irene", "Irina", "Isa", "Isadora", "Iva", "Ivone", "Izabela", "Janaína", "Jéssica", "Júlia", "Juliana", "Jussara", "Kátia", "Kélia", "Laís", "Lara", "Larissa", "Lavinia", "Leandra", "Leticia", "Lia", "Liliana", "Lívia", "Lorena", "Lorraine", "Luana", "Luciana", "Ludmila", "Lurdes", "Luzia", "Madalena", "Magda", "Malu", "Manoela", "Marcele", "Marilene", "User", "continua", "ChatGPT", "Claro", "Maristela", "Marlene", "Marli", "Marta", "Márcia", "Mayara", "Melissa", "Micaela", "Milena", "Miriam", "Mirela", "Muriel", "Nara", "Natacha", "Natália", "Nayara", "Neide", "Neusa", "Nicole", "Noemi", "Norma", "Odete", "Olga", "Olívia", "Paola", "Patrícia", "Paula", "Paulina", "Poliana", "Priscila", "Rafaela", "Raquel", "Rayane", "Rebeca", "Regina", "Renata", "Rita", "Roberta", "Rúbia", "Sabrina", "Samara", "Samantha", "Sandra", "Sara", "Sibele", "Sílvia", "Simone", "Sofia", "Solange", "Stella", "Suzana", "Talita", "Tamara", "Tânia", "Tarsila", "Tereza", "Thais", "Thereza", "Túlia", "Úrsula", "Valéria", "Vanessa", "Verônica", "Vânia", "Vitória", "Viviane", "Walquiria", "Wanessa", "Yara", "Yasmin", "Yolanda", "Yonara", "Zaira", "Zara", "Zélia", "Zenaide", "Zilda", "Zuleica", "Zuleide", "Zulmira", "Zuma", "Zuri", "Zuleika", "Zuriel", "Zulima", "Zarah", "Zanele", "Zabana", "Zinat", "Zerlina", "Zaraí", "Zaira", "Zélia", "Zita", "Zoraida", "Zulena", "Zinia", "Zelia", "Zane", "Zitkala", "", "User", "continua", "ChatGPT", "", "Zayna", "Zuzana", "Zorica", "Zalika", "Zola", "Zabel", "Zelma", "Zafira", "Zinnia", "Zorina", "Zophia", "Zulema", "Zariya", "Zivanka", "Zephyra", "Zabrina", "Zefira", "Zsuzsa", "Zemfira", "Zuliana", "Zaneta", "Zelinda", "Zulekha", "Zoraida", "Zephyrine", "Zamina", "Zerina", "Zsuzsanna", "Zuzanna", "Zabelina", "Zuwena", "Zelinda", "Zaviera", "Zaynab", "Zephyrine", "Zelena", "Zsófia", "Zoraya", "Zareen", "Zelia", "Zsuzsanna", "Zipporah", "Zlata", "Zana", "Zinovia", "Zorica", "Zelma", "Zsazsa", "Zofia", "Zivanka", "Zabrina", "Zafira", "Zephyra", "Zulaika", "Zulma", "Zosia", "Zena", "Zula", "Zetta", "Zafira", "Zoraida", "Zabana", "Zeline", "Zola", "Zephyrine", "Zarah", "Zuleika", "Zada", "Zephyra", "Zuzela", "Zelma", "Zelenia", "Zasha", "Zarah", "Zoraya", "Zahirah", "Zephyrine", "Zoriana", "Zenda", "Zosima", "Zuma", "Zaida", "Zelinda", "Zuleika", "Zabel", "Zaira", "Zsuzsanna", "Ziv", "Zana", "Zella", "Zora", "Zoya", "Zafira", "Zuleika", "Zenaide", "Zinia", "Zelpha", "Zelphia", "Zoraida", "Zariya", "", "", "User", "contua", "ChatGPT", "", "Zula", "Zelena", "Zabel", "Zuzanna", "Zena", "Zola", "Zephyrine", "Zara", "Zuzana", "Zulaika", "Zandra", "Zephyra", "Zadie", "Zenaide", "Zephyrine", "Zuzanna", "Zelpha", "Zelia", "Zosia", "Zuzela", "Zephyra", "Zabina", "Zoraida", "Zulaika", "Zanna", "Zabrina", "Zelma", "Zulaika", "Zephyra", "Zara", "Zelinda", "Zorica", "Zephyrine", "Zaida", "Zuleika", "Zara", "Zelena", "Zsuzsanna", "Zephyrine", "Zora", "Zephyra", "Zulma", "Zena", "Zora", "Zephyrine", "Zuzana", "Zenaide", "Zelma", "Zulma", "Zephyra", "Zoraida", "Zelma", "Zuzanna", "Zuleika", "Zosia", "Zephyra", "Zulaika", "Zana", "Zephyrine", "Zora", "Zelpha", "Zulema", "Zelena", "Zephyra", "Zara", "Zelma", "Zelma", "Zosia", "Zephyrine", "Zara", "Zelena", "Zephyra", "Zelma", "Zuzanna", "Zenaide", "Zephyrine", "Zephyra", "Zephyrine", "Zaida", "Zuzana", "Zephyra", "Zephyra", "Zuleika", "Zephyra", "Zephyrine", "Zephyra", "Zelma", "Zelma", "Zephyra", "Zuleika", "Zosia", "Zephyra", "Zuzana", "Zara", "Zephyra", "Zephyra", "Zephyrine", "Zara", "Zuleika", "Zephyra"];

		// Função para verificar o gênero de um nome
		function verificarGeneroDoNome(nome_verificar) {
			let sexo = "-";
			let nome = "";

			// Verifica se o nome está na lista de nomes femininos
			nomef.forEach(function(nome_lista) {
				if (nome_verificar.toLowerCase() === removerAcento(nome_lista.toLowerCase()).toLowerCase()) {
					sexo = "F";
					nome = nome_lista;
				}else{
					// Se o gênero ainda for desconhecido, verifica se o nome está na lista de nomes masculinos
					if (sexo === "-") {
						nomesMasculinos.forEach(function(nome_lista) {
							if (nome_verificar.toLowerCase() === removerAcento(nome_lista.toLowerCase()).toLowerCase()) {
								sexo = "M";
								nome = nome_lista;
							}
						});
					}
				}
			});
			
		    // Se não encontrou o nome em nenhuma lista, retorna como desconhecido
		    return { sexo: sexo, nome: nome};
		}

		function removerAcento(palavra) {
		// Objeto com as letras acentuadas e suas correspondentes sem acento
		const letrasSemAcento = {
		'á': 'a', 'à': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
		'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i', 'ó': 'o', 'ò': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o',
		'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u', 'ç': 'c'
		};

		// Substitui cada letra acentuada pela sua correspondente sem acento
		let palavraSemAcento = "";
		for (let i = 0; i < palavra.length; i++) {
		const letra = palavra.charAt(i);
		if (letrasSemAcento.hasOwnProperty(letra)) {
		palavraSemAcento += letrasSemAcento[letra]; // Se a letra for acentuada, substitui pela correspondente sem acento
		} else {
		palavraSemAcento += letra; // Se não for acentuada, mantém a letra original
		}
		}

		return palavraSemAcento;
		}


/*

		inputImagem.onchange = function() {
			arquivoImagem = inputImagem.files[0];

	        // Atualize a imagem de preview com a URL do arquivo selecionado
	        const urlImagem = URL.createObjectURL(arquivoImagem);
	        imagemPreview.src = urlImagem;

	        // Exiba a imagem de preview
	        imagemPreview.style.display = 'block';
	    };
*/
		function validacao2() {
			var dados = {
			    primeiro_nome: document.querySelector('input[name="primeiro_nome"]').value,
			    nome_meio: document.querySelector('input[name="nome_meio"]').value,
			    ultimo_nome: document.querySelector('input[name="ultimo_nome"]').value,  
			    sexo: document.querySelector('input[name="sexo"]').value,
			    telefone: document.querySelector('input[name="telefone"]').value,
			    morada: document.querySelector('input[name="morada"]').value,
			    cidade: document.querySelector('input[name="cidade"]').value,
			    nivel: document.querySelector('select[name="nivel"]').value,
			    email: document.querySelector('input[name="email"]').value,
			    senha: document.querySelector('input[name="senha"]').value,
			    pergunta_recuperacao: document.querySelector('select[name="pergunta_recuperacao"]').value,
			    resposta_recuperacao: document.querySelector('input[name="resposta_recuperacao"]').value
			    if (!(inputImagem.files.length > 0)) {
					alert("Nenhum arquivo de imagem selecionado.\n submeter messageassim");
			    }	
			};

			localStorage.setItem('dados', JSON.stringify(dados));
		}




//===================================
//ESCUTA DE TODOS OS INPUT
//====================================
// Seleciona todos os elementos de entrada na página
document.querySelectorAll('input').forEach((input) => {
	
	// Adiciona um ouvinte de eventos para o evento 'input'
	input.addEventListener('input', () => {
		let nomeattr=input.getAttribute('name');
		
		if(nomeattr==="primeiro_nome"){
			var nome_encontrado=verificarGeneroDoNome(input.value).nome;
			let nome_organizado=nome_encontrado.charAt(0).toUpperCase() + nome_encontrado.slice(1);
			if(verificarGeneroDoNome(input.value).sexo==="M"){						
				input.value=nome_organizado;
				input.classList.remove('is-invalid');
				input.classList.add('is-valid');
				alert(input.classList.contains('is-valid'));document.querySelector('input[name="sexo"]').value="Masculino";


			}else if(verificarGeneroDoNome(input.value).sexo==="F"){						
				input.value=nome_organizado;
				input.classList.remove('is-invalid');
				input.classList.add('is-valid');document.querySelector('input[name="sexo"]').value="Feminino";
			}else{						
				input.classList.remove('is-valid');
				input.classList.add('is-invalid');
			}
		}else if( nomeattr==="nome_meio" ){	
			var nome_encontrado=verificarGeneroDoNome(input.value).nome;
			let nome_organizado=nome_encontrado.charAt(0).toUpperCase() + nome_encontrado.slice(1);
			if(verificarGeneroDoNome(input.value).sexo==="M"){				
				input.value=nome_organizado;
				input.classList.remove('is-invalid');
				input.classList.add('is-valid');
			}else{							
				input.classList.remove('is-valid');
				input.classList.add('is-invalid');
			}

		}else if( nomeattr==="ultimo_nome" ){	
			var nome_encontrado=verificarGeneroDoNome(input.value).nome;
			let nome_organizado=nome_encontrado.charAt(0).toUpperCase() + nome_encontrado.slice(1);
			if(verificarGeneroDoNome(input.value).sexo==="M"){				
				input.value=nome_organizado;
				input.classList.remove('is-invalid');
				input.classList.add('is-valid');
			}else{							
				input.classList.remove('is-valid');
				input.classList.add('is-invalid');
			}

		}else if( nomeattr==="telefone" ){
			var inputString = input.value.toString();
			
			if( !(inputString.substring(0, 2)=='82' || inputString.substring(0, 2)=='83' || inputString.substring(0, 2)=='84' || inputString.substring(0, 2)=='85' || inputString.substring(0, 2)=='86' || inputString.substring(0, 2)=='87')){
					document.getElementById('spantelefone').innerHTML="Telefone deve linha mocambicana.";
				input.classList.remove('is-valid');
				input.classList.add('is-invalid');
  			} else if (isNaN(input.value)) {

					document.getElementById('spantelefone').innerHTML="Telefone nao deve conter alguma letra.";
				input.classList.remove('is-valid');
				input.classList.add('is-invalid');
  			}else if(input.value.length<9){

				input.classList.remove('is-valid');
				input.classList.add('is-invalid');

  					document.getElementById('spantelefone').innerHTML="Telefone deve ter nove numeros.";	

			}else{
				input.classList.remove('is-invalid');
				input.classList.add('is-valid');
			}
		}else if( nomeattr==="distrito" ){	
			if(input.value.length<6){
				input.classList.remove('is-valid');
				input.classList.add('is-invalid');
					document.getElementById('spansenha').innerHTML="A senha deve ser de 6 digitos.";

			}else{
				input.classList.remove('is-invalid');
				input.classList.add('is-valid');
			}
			if(input.classList.contains('is-valid')){
					document.querySelector('div[espacamento="morada"]').style.display="block";

			}
		}else if( nomeattr==="morada" ){	
			if(input.value.length<6){
				input.classList.remove('is-valid');
				input.classList.add('is-invalid');
					document.getElementById('spansenha').innerHTML="A senha deve ser de 6 digitos.";

			}else{
				input.classList.remove('is-invalid');
				input.classList.add('is-valid');
			}
		}else if( nomeattr==="pic_perfil"){
				if(input.value==null){
					input.classList.remove('is-valid');
					input.classList.add('is-invalid');
  					document.getElementById('spansenha').innerHTML="Selecione uma imagem do perfils.";

				}else{
					input.classList.remove('is-invalid');
					input.classList.add('is-valid');
						document.querySelector('button[name="btn_no_pic"]').innerHTML="Confirmar a imagem";  							
						document.querySelector('button[name="btn_no_pic"]').setAttribute('name','btn_yes_pic');
				}

		}else if( nomeattr==="email" ){	
			if(!(input.value.includes("@gmail.com") || input.value.includes("@ucm.ac.mz"))){
				input.classList.remove('is-valid');
				input.classList.add('is-invalid');
					document.getElementById('spansenha').innerHTML="Prefixo valido '@gmail.com ou @ucm.ac.mz'.";

			}else{

				var emailSemDominio = removerDepoisDoCaractere(input.value, "@", 1);

				input.classList.remove('is-invalid');
				input.classList.add('is-valid');
				var i=0;
				var estadouser=isExistUserByEmail(emailSemDominio);
				while(estadouser==1){
					estadouser=isExistUserByEmail(emailSemDominio);
					i++;
					if(i==10000){
						break;
					}
				}
			}
			
		}else if( nomeattr==="senha" ){	
			if(input.value.length<6){
				input.classList.remove('is-valid');
				input.classList.add('is-invalid');
					document.getElementById('spansenha').innerHTML="A senha deve ser de 6 digitos.";

			}else{
				input.classList.remove('is-invalid');
				input.classList.add('is-valid');
			}
			if(input.classList.contains('is-valid')){
			}
		}else if(nomeattr==="resposta_recuperacao"){
			if(input.value.length<=2){
				input.classList.remove('is-valid');
				input.classList.add('is-invalid');

					document.getElementById('span_resposta_recuperacao').innerHTML="A resposta deve ter no minimo 3 letras e no maximo 30 letras";  					


			}else{	
				input.classList.remove('is-invalid');
				input.classList.add('is-valid');
			}
		}
	});
});



/*

// Seleciona todos os elementos de entrada na página
document.querySelectorAll('select').forEach((select) => {
	
	// Adiciona um ouvinte de eventos para o evento 'input'
	select.addEventListener('input', () => {
		var nomeattr=select.getAttribute('name');

		if( nomeattr==="nivel" ){	
			if(select.value===""){
				select.classList.remove('is-valid');
				select.classList.add('is-invalid');
					document.getElementById('spansenha').innerHTML="A senha deve ser de 6 digitos.";

			}else{
				select.classList.remove('is-invalid');
				select.classList.add('is-valid');
			}
			if(select.classList.contains('is-valid')){
					document.querySelector('div[espacamento="email"]').style.display="block";
				document.getElementById('formParteInferior').style.display="block";
			}
		}else if( nomeattr==="pergunta_recuperacao" ){	
			if(select.value===""){
				select.classList.remove('is-valid');
				select.classList.add('is-invalid');
					document.getElementById('spansenha').innerHTML="A senha deve ser de 6 digitos.";

			}else{
				select.classList.remove('is-invalid');
				select.classList.add('is-valid');
			}
			if(select.classList.contains('is-valid')){
					document.querySelector('div[espacamento="resposta_recuperacao"]').style.display="block";
			}
		}

	});
});

document.querySelectorAll('button').forEach((button)=>{
	button.addEventListener('click',()=>{
			var nomeattr=button.getAttribute('name');
			console.log(nomeattr);
		if(nomeattr==="btn_no_pic"){
			document.getElementById(button.parentNode.parentNode.id).style.display="none";
			document.getElementById('formParteInferior').style.display="block";
				document.querySelector('div[espacamento="nivel"]').style.display="block";
		}
	});
});

//==================================================================================================
//ESCUTA DE TODOS OS SPAN ou invalid-feedback com valid-feedback
//===================================================================================================
// Seleciona todos os elementos de entrada na página



// Função para criar um usuário com e-mail e senha e associar dados adicionais



// Example starter JavaScript for disabling form submissions if there are invalid fields



 * 
 * REMOCAO DE TODOS
 * 

function removerDepoisDoCaractere(str, caractere, valor) {
    var index = str.indexOf(caractere);
    if (index !== -1) {
        return str.substring(0, index + valor);
    }
    return str;
}

*/




})()