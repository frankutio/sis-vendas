
/* ======================================================================================================================================
														Funções de Carregamento Automático
========================================================================================================================================= */

/*usado para controlar a integração entre duas modais */
var modalAnterior = "";
function controlaModal(){
	
	
	
}


$(document).ready(function(){
			   
///////////////////////////////////////////-------------					   
/*Exibindo a data de modificação do arquivo*/
/*
var data_i = new Date (document.lastModified);
var data_f = "Prototipo atualizado em:  ";
data_f += data_i.getDate();
data_f += "/";
data_f += data_i.getMonth() + 1;
data_f += "/";
data_f += data_i.getFullYear();

data_f += " as ";
data_f += data_i.getHours();
data_f += ":";
data_f += data_i.getMinutes();

data_f += "";
$('#atualizacao_prototipo').text(data_f);*/
///////////////////////////////////////////-------------
	
$(".campoInvalido").tooltip({
		track: true,
		delay: 0,
		showBody: " - ",
		top: -15,
		left: 5
	});
$(".calendario").datepicker({showOn: "button", buttonImage: "icones/Positivo/calendario/16x16.png", buttonImageOnly: true , showOtherMonths:true});


	$(".esconde").hide();
	
	
	

	$(".alertaEnvio").click(function(){
		

		alert("A notificação foi verificada e não existe pendência.");	
		
	});
	
$(".fatores").click(function(){
	
	if($(this).attr("checked")==true){
		$(".fatores_nulo").attr("checked",false);
	}
});

$(".mascaramento").click(function(){
	
	if($(this).attr("checked")==true){
		$(".mascara_nulo").attr("checked",false);
	}
});


/* ======================================================================================================================================
															Mascaras
========================================================================================================================================= */

$(".data").mask("99/99/9999");

});


/* ======================================================================================================================================
															Alertas de Modal - Inicio -
========================================================================================================================================= */

$('.avisoModalRotuloColeta2').click(function(){
	alert("Mantenha-o em seu poder. O arquivo digital com a c&oacute;pia do r&oacute;tulo poder&aacute; ser anexado ao final da notifica&ccedil;&atilde;o.")
	return false;
});

$('.avisoModalPossuiRotuloProduto2').click(function(){
	alert("O arquivo digital com a c&oacute;pia da rotulagem afixada na embalagem poder&aacute; ser anexado ao final da notifica&ccedil;&atilde;o.")
	return false;
});

$('.avisoModalNotaFiscal2').click(function(){
	alert("Mantenha-a em seu poder. O arquivo digital da nota fiscal  poder&aacute;  ser anexado ao final da notifica&ccedil;&atilde;o.")
	return false;
});

$('.avisoModalNotaFiscal_artigo2').click(function(){
	alert("Mantenha-a em seu poder. O arquivo digital da nota fiscal  poder&aacute;  ser anexado a esta notifica&ccedil;&atilde;o.")
	return false;
});

$('.avisoModalComunicaIndustria2').click(function(){
	alert("Caso possua comprovante, mantenha-o em seu poder e somente entregue &agrave; Vigil&acirc;ncia Sanit&aacute;ria quando solicitado.")
	return false;
});

$('.avisoModalEntregueQuandoSolicitado2').click(function(){
	alert("Mantenha-os em seu poder e somente os entregue &agrave; Vigil&acirc;ncia Sanit&aacute;ria quando solicitado.")
	return false;
});

$('.avisoModalPossuiLaudoMedico2').click(function(){
	alert("Caso voc&ecirc; possua laudo m&eacute;dico, o arquivo digital do mesmo poder&aacute; ser anexado ao final da notifica&ccedil;&atilde;o (Aba Anexos)")
	return false;
});

$('.avisoModalMedicamentosConcomitantes2').click(function(){
	alert("Adicione todos os medicamentos utilizados dentro de duas semanas anteriores &agrave; data de in&iacute;cio do evento adverso, incluindo por automedica&ccedil;&atilde;o, fitoter&aacute;picos, ch&aacute;s e outros. N&atilde;o incluir os medicamentos suspeitos e aqueles utilizados para tratar o evento adverso.")
	return false;
});

$('.avisoModalConhecimentoPaciente2').click(function(){
	alert("Por favor, cite a ocorr&ecirc;ncia de problemas pr&eacute;vios com o uso do(s) medicamento(s) suspeito(s) ou de medicamentos do mesmo grupo farmacol&oacute;gico, a exist&ecirc;ncia de doen&ccedil;as cr&ocirc;nicas ou alergias, o uso de &aacute;lcool e cigarro, al&eacute;m de outras condi&ccedil;&otilde;es cl&iacute;nicas consideradas relevantes.")
	return false;
});

$('.avisoModalResultadoExamesComplementares2').click(function(){
	alert("O formul&aacute;rio <strong>Anexos</strong> permite a inclus&atilde;o de exames complementares. Caso   n&atilde;o queira anexar a c&oacute;pia do exame, descreva a data de sua realiza&ccedil;&atilde;o, o   exame realizado, o resultado obtido (com unidade) e os valores de   refer&ecirc;ncia.")
	return false;
});

$('.avisoModalDocumentosAdicionais2').click(function(){
	alert("Por favor, insira a c&oacute;pia do(s) documento(s) na aba Anexos")
	return false;
	
});

$('.avisoModalDoenca_suspeita2').click(function(){
	alert("Recomenda-se que a investiga&ccedil;&atilde;o seja realizada de acordo com o Manual t&eacute;cnico para investiga&ccedil;&atilde;o da transmiss&atilde;o de doen&ccedil;as pelo sangue.")
	return false;
});

$('.avisoModalObito2').click(function(){
	alert("Anexar uma c&oacute;pia digitalizada da declara&ccedil;&atilde;o de &oacute;bito.")
	return false;
});

$('.avisoModalDeficiencia2').click(function(){
	alert("Anexar relat&oacute;rio ou uma c&oacute;pia do prontu&aacute;rio ou um resumo do rontu&aacute;rio.")
	return false;
});

$('.avisoModalAddProd2').click(function(){
	alert("Poder&atilde;o ser informados at&eacute; 3 produtos.")
	return false;
});

$('.avisoModalProdSemReg2').click(function(){
	alert("Preencher os campos com os dados que constam na rotulagem ou nota fiscal de compra.\n Anexar uma amostra do rotulo ou uma fotografia legivel.Anexar uma amostra do r&oacute;tulo ou uma fotografia leg&iacute;vel.")
	return false;
});

$('.avisoModalEmpresaRealizaAcaoCampo2').click(function(){
	alert("Anexe um resumo executivo com descri&ccedil;&atilde;o da ocorr&ecirc;ncia, da motiva&ccedil;&atilde;o, medidas adotadas e cronograma; e proceda a notifica&ccedil;&atilde;o em formul&aacute;rio espec&iacute;fico.")
	return false;
});

$('.avisoModalGerarAcao2').click(function(){
	alert("Anexar um resumo executivo do est&aacute;gio atual com a descri&ccedil;&atilde;o da notifica&ccedil;&atilde;o/justificativa, das medidas a serem implementadas, cronograma de execu&ccedil;&atilde;o, previs&atilde;o de conclus&atilde;o.")
	return false;
});


$('.avisoModalAnexoResumoExecultivo2').click(function(){
	alert("Anexar um resumo executivo das provid&ecirc;ncias.")
	return false;
});

$('.avisoModalRecomendaNotificante2').click(function(){
	alert("Recomenda-se que o notificante mantenha em seu poder um relat&oacute;rio que instrumentalize esta avalia&ccedil;&atilde;o. Se desejar, ele poder&aacute; ser anexado a esta notifica&ccedil;&atilde;o.")
	return false;
});

$('.avisoModalAnexoNecropsia2').click(function(){
	alert("Anexar o relat&oacute;rio de necropsia. ")
	return false;
});

$('.avisoModalSuspeita_desvio2').click(function(){
	alert("Diante da suspeita de desvio da qualidade, recomenda-se que ap&oacute;s o envio desta notifica&ccedil;&atilde;o, seja realizada tamb&eacute;m uma notifica&ccedil;&atilde;o de queixa t&eacute;cnica para este produto. ")
	return false;
});

$('.confCnpj').click(function(){
	if(confirm("O número <Número informado> é inválido ou não foi encontrado. Você confirma que o número digitado confere com o rótulo/embalagem/bula?")){
		return false;
	}
	
	return false;
});



/* ======================================================================================================================================
															Alertas de Modal - Fim -
========================================================================================================================================= */

//usado para fechar o colorbox 
$('.CloseModal').live('click', function (e) {
			if (e.button !== 0 && typeof e.button !== 'undefined') {// checks to see if it was a non-left mouse-click.
				return ;
			} else {
				$.fn.colorbox.close();			
				return ;
			}
		});


/* ======================================================================================================================================
														Funções do Menu
========================================================================================================================================= */

function imprimeNotificacao(){
	$.fn.modal({
		url:"modal_imprimir_notificacao.html",
		autoOpen: true
});
	
}

function imprimeCertificado(){
	$.fn.modal({
		url:"modal_imprimir_certificado.html",
		autoOpen: true
});
	
}


function seleciona_menu(div,div2){
	$("#"+div).toggle();
	
	//rola a página para a posição da div menos o tamanho da barra fixa
	var $target = $("#"+div2);
	var targetOffset = $target.offset().top - 60;
	$('html,body').animate({scrollTop: targetOffset});

}
		
		
		
function setaclass(id,img){
		$("span").removeClass("menu_marcado");
		$("#"+id).addClass("menu_marcado");
		
		if ($("#"+img).attr("alt")=='abrir'){
		$("#"+img).attr("src","img/mais_positivo.jpg");
		$("#"+img).attr("alt","fechar");
		}else{
		$("#"+img).attr("src","img/menos_negativo.jpg");
		$("#"+img).attr("alt","abrir");
		}

}

/* ======================================================================================================================================
														Funções Gerais
========================================================================================================================================= */	


function vaiVolta(origem,destino,qnt){
if(qnt=="tudo"){
	$("#"+origem+" > option").appendTo("#"+destino);
}else{
	$("#"+origem+" > option:selected").appendTo("#"+destino);
}
}
/**
 Preenche o campoDestino com o valor selecionado atualmente do comboOrigem
*/
function comboPreencheDadosCampo(comboOrigem ,campoDestino){
	comboOrigem = $('#'+comboOrigem);
	campoDestino = $('#'+campoDestino);
	
	
    if ((campoDestino.length>0)&&(comboOrigem.length>0)){
      var oSelecionados = campoDestino[0];
      var oOrigem = comboOrigem[0];
      //verifica se o value do campo é 0 , se for , nao faz nada 
	  if(oOrigem.options[oOrigem.selectedIndex].value!=0){
			  if(oSelecionados.value==""){
				oSelecionados.value = oOrigem.options[oOrigem.selectedIndex].text;
			  }
			  else{
				oSelecionados.value = oSelecionados.value + " + " + oOrigem.options[oOrigem.selectedIndex].text;
			  }
	  }
      
    }
}


function mostra(id){
	$(".esconde").hide();
	$("#"+id).show();
}
// pode-se passar quantos id's quiseres para a funçao , e todos serao exibidos
// exemplo mostrar('id01','id02','id03');
function mostrar(){
	for (var i=0; i<arguments.length; i++ ){
		$("#"+arguments[i]).show();
	}
}

// pode-se passar quantos id's quiseres para a funçao , e todos serao escondidos
function esconde(){
	for (var i=0; i<arguments.length; i++ ){
		$("#"+arguments[i]).hide();
	}
	
}


function escondeClass(){
	for (var i=0; i<arguments.length; i++ ){
		$("."+arguments[i]).hide();
	}
	
}
function mostraClass(){
	for (var i=0; i<arguments.length; i++ ){
		$("."+arguments[i]).show();
	}
}


/*Função para a seleção de Notificações*/

function menu(combo){

 var valor=$("#"+combo).attr("value");
 
 if(valor=="1"){
 	$(".ocultar").hide();
	$("#mostra_medicamento").show();
	$("#vaiprapagina").attr("alt","frmMedicamentoEA.html");
	$("#vaiprapaginaNao").attr("alt","frmMedicamentoMotivo.htm");
 }
 
 else if(valor=="2"){
 	$(".ocultar").hide();
	$("#mostra_vacina").show();
	$("#vaiprapagina").attr("alt","frmVacinaMotivo_sim.htm");
	$("#vaiprapaginaNao").attr("alt","frmVacinaMotivo.htm");
	}
	
 else if(valor=="3"){
 	$(".ocultar").hide();
	$("#mostra_pesquisa").show();
	}
	
 else if(valor=="4"){
 	$(".ocultar").hide();
	$("#mostra_artigo").show();
	$("#vaiprapagina").attr("alt","frmArtigoMotivo.htm");
	$("#vaiprapaginaNao").attr("alt","frmArtigoMotivo_nao.htm");
	$("#acaoCampo").attr("alt","AME_acao_campo.html");
	}
	
 else if(valor=="5"){
 	$(".ocultar").hide();
	$("#mostra_equipamento").show();
	$("#vaiprapagina").attr("alt","frmEquipamentoMotivo.htm");
	$("#vaiprapaginaNao").attr("alt","frmEquipamentoMotivo_nao.htm");
	$("#acaoCampo").attr("alt","AME_acao_campo.html");
	}
	
 else if(valor=="6"){
		$(".ocultar").hide();
		$("#mostra_produto_diagnostico").show();
		$("#btOK").attr("name","frmKitMotivo.htm");
	}
	
 else if(valor=="7"){
 	$(".ocultar").hide();
	$("#mostra_cosmetico").show();
	$("#vaiprapagina").attr("alt","frmCosmeticoMotivo.htm");
	$("#vaiprapaginaNao").attr("alt","frmCosmeticoMotivo_nao.htm");
	}
	
 else if(valor=="9"){
 	$(".ocultar").hide();
	$("#mostra_saneantes").show();
	$("#vaiprapagina").attr("alt","frmSaneanteMotivo.htm");
	$("#vaiprapaginaNao").attr("alt","frmSaneanteMotivo_nao.htm");
	}
	
 else if(valor=="10"){
 	$(".ocultar").hide();
	$("#mostra_agrotoxico").show();
	$("#vaiprapagina").attr("alt","frmAgrotoxicoMotivo.htm");
	$("#vaiprapaginaNao").attr("alt","frmAgrotoxicoMotivo_nao.htm");
	}

	
else if(valor=="8"){
	$(".ocultar").hide();
	$("#mostra_sangue").show();
	$("#vaiprapagina1-1").attr("alt","frmSangueMotivo2.htm");
	$("#vaiprapagina1-2").attr("alt","frmSangueMotivo.htm");
	}

else if(valor=="11"){
	$(".ocultar").hide();
	$("#btOK").attr("name","frmExposicaoHumana_paciente.htm");
	}
	
else if(valor=="12"){
	$(".ocultar").hide();
	$("#btOK").attr("name","frmCiatAnimal.htm");
	}

else if(valor=="13"){
	$(".ocultar").hide();
	$("#btOK").attr("name","frmCiatInformacaoToxicologica.htm");
	}
	
else if(valor=="14"){
	$(".ocultar").hide();
	$("#btOK").attr("name","frmInsumosLote.htm");
	}
	
else if(valor=="15"){	
	$(".ocultar").hide();
	$("#mostra_alimento").show();
	$("#vaiprapagina").attr("alt","frmEventoAdverso.htm");
	$("#vaiprapaginaNao").attr("alt","");
	}
	
else if(valor=="16"){
	$(".ocultar").hide();
	$("#cbx_inicio").show();
	$("#msg_sangue_celulas").hide();
	$("#btOK").attr("name","");
	$("#botoesNormal").hide();
	$("#botoesTransplante").show();
	$("#titulo_origial").show();
	$("#titulo_alerta").hide();
	$("#btOK_sangue").attr("name","frmSangueMotivo3.htm");
	}
	
else if(valor=="produtos_saude"){	
	$(".ocultar").hide();
	$("#mostra_prod_saude").show();
	$("#vaiprapagina").attr("alt","frmProdSaude_ea.htm");
	$("#vaiprapaginaNao").attr("alt","frmProdSaude_qt.htm");
	}
else if(valor=="saneantes_cidadao"){	
	$(".ocultar").hide();
	$("#btOK").attr("name","frmSaneanteMotivo_cid.htm");
	}
else if(valor=="cosm_cidadao"){	
	$(".ocultar").hide();
	$("#btOK").attr("name","frmCosmetico_cid.htm");
	}
else if(valor=="med_cidadao"){	
	$(".ocultar").hide();
	$("#btOK").attr("name","formMedicamento_cid.htm");
	}
	
	

else{
	$(".ocultar").hide();
	$("#vaiprapagina").attr("alt","");
	$("#vaiprapaginaNao").attr("alt","");
}

}





function preparaBotao(id,botao){
  valor = $("#"+id).attr("alt");  
  $("#"+botao).attr("name",valor);
}

function direciona(botao){
	pagina=$("#"+botao).attr("name");
	
	if(pagina !=""){
		window.location=pagina;
	}
	
	else{
		return false;
	}
	
}

function msgRegistro(){
	$("#msgRegistro").html("<br /> Anexar uma amostra do r&oacute;tulo ou uma fotografia leg&iacute;vel.");
}

function validaAcesso(combo,botao){

valor = $("#"+combo).attr("value");
	
	if(valor == "0"){
		$("#"+botao).attr("name","index_servicos.html");
	}
	
	else if(valor == "1"){
		$("#"+botao).attr("name","");
	}
	
	else if(valor == "2"){
		$("#"+botao).attr("name","index_servicos_cidadao.html");
	}
	
	else if(valor == "3"){
		$("#"+botao).attr("name","index_industria.html");
	}
	
	else{
		$("#"+botao).attr("name","");
	}
}



/* ======================================================================================================================================
														Validação de Combo
========================================================================================================================================= */

function validaCombo(combo,classe){
	var valor= $("#"+combo).attr("value");
	
	$("."+classe).hide();
	$("#"+valor).show();

}

function comboBloqueio(combo,classe){
	var valor= $("#"+combo).attr("value");
	
	if(valor=="sim"){
		$("."+classe).attr("disabled",true);
	}
	else{
		$("."+classe).attr("disabled",false);
	}
}

/* usado para definir a regra de negocio em frmArtigoMotivo_nao.htm (chama modal diferente)*/
/*
classes
motivoOutrasDesvio - 
motivoOutrasPraticas
*/
function validaComboArtigoQT(combo,local){ 
 var valor = $("#"+combo).attr("value");
 if(valor == "prodOutrasPraticas"){
	 $("#prodDesvioQualidade").show();//exibe o formulario 
	 $(".motivoOutrasDesvio").hide();//esconde o que for específico de desvio de qualidade
	 $(".motivoOutrasPraticas").show();//exibe o que é específico de outras praticas 
	  $(".motivoQueixa").show();//exibe o que é específico de outras praticas 
	 
 }else if(valor == "prodDesvioQualidade"){
	 $("#prodDesvioQualidade").show();//exibe o formulario 
	 $(".motivoOutrasDesvio").show();//exibe o que for específico de desvio de qualidade
	 $(".motivoOutrasPraticas").hide();//esconde o que é específico de outras praticas 
	  $(".motivoQueixa").show();//exibe o que é específico de outras praticas 
 } 

 
 
}


function validaComboPerfil(combo,local){
 
 var valor = $("#"+combo).attr("value");
 
 	if(local == "fora"){
		
		if(valor != "0"){
			
			if(valor == "snvs"){
				$("#formRechaco").show();
				
				$("#vaiprapagina").attr("alt","orgao_snvs.html");
				$("#vaiprapaginaNao").attr("alt","frm_rechaco_alimentos.html");
			}
			
			else if(valor == "outro_orgao"){
				
				$("#formRechaco").show();
				
				$("#vaiprapagina").attr("alt","outro_orgao.html");
				$("#vaiprapaginaNao").attr("alt","frm_rechaco_alimentos.html");
			
			}
			
			else{
				$("#formRechaco").hide();
				
				endereco = valor;
		
				$("#btOK").attr("name",endereco);
			}
		}
		else{
			$("#formRechaco").hide();
			$("#btOK").attr("name","");
		}
	}
	
	else{
		$("#formRechaco").hide();
		endereco = "";
		
		$("#btOK").attr("name",endereco);
	}
}


function validaTipoHemocomponente(combo){
	var valor = $("#"+combo).attr("value");
	
	if(valor != "outroTipoHemo"){
		
		if(valor == "0"){
			$(".bloco").hide();
			$(".qualificacao").attr("checked",false);
			
			$("#chx_01").attr("disabled",true);			
			$("#chx_02").attr("disabled",true);
			$("#chx_03").attr("disabled",true);
			$("#chx_04").attr("disabled",true);
			$("#chx_05").attr("disabled",true);
			$("#chx_06").attr("disabled",true);
			$("#chx_07").attr("disabled",true);
			$("#chx_08").attr("disabled",true);
			$("#chx_09").attr("disabled",true);
			$("#chx_10").attr("disabled",true);
			$("#chx_11").attr("disabled",true);
		}
		
		else if(valor == "concentrado_h"){
			$(".bloco").hide();
			$(".qualificacao").attr("disabled",false);
			$(".qualificacao").attr("checked",false);
			
			$("#chx_07").attr("disabled",true);
			$("#chx_08").attr("disabled",true);
			$("#chx_09").attr("disabled",false);
			$("#chx_10").attr("disabled",true);
		}
		
		else if(valor == "concentrado_p"){
			$(".bloco").hide();
			$(".qualificacao").attr("disabled",false);
			$(".qualificacao").attr("checked",false);
			
			$("#chx_01").attr("disabled",true);
			$("#chx_11").attr("disabled",true);
		}
		
		else if(valor == "plasma"){
			$(".bloco").hide();
			$(".qualificacao").attr("disabled",false);
			$(".qualificacao").attr("checked",false);
			
			$("#chx_02").attr("disabled",true);
			$("#chx_03").attr("disabled",true);
			$("#chx_04").attr("disabled",true);
			$("#chx_05").attr("disabled",true);
			$("#chx_06").attr("disabled",true);
			$("#chx_07").attr("disabled",true);
			$("#chx_08").attr("disabled",true);
			$("#chx_09").attr("disabled",true);
			$("#chx_10").attr("disabled",true);
			$("#chx_11").attr("disabled",true);
		}
		
		else if(valor == "outro_plasma"){
			$(".bloco").hide();
			$(".qualificacao").attr("disabled",false);
			$(".qualificacao").attr("checked",false);
			
			$("#chx_02").attr("disabled",true);
			$("#chx_03").attr("disabled",true);
			$("#chx_04").attr("disabled",true);
			$("#chx_05").attr("disabled",true);
			$("#chx_06").attr("disabled",true);
			$("#chx_07").attr("disabled",true);
			$("#chx_08").attr("disabled",true);
			$("#chx_09").attr("disabled",true);
			$("#chx_10").attr("disabled",true);
			$("#chx_11").attr("disabled",true);
		}
		
		else if(valor == "concnentrado_g"){
			$(".bloco").hide();
			$(".qualificacao").attr("disabled",false);
			$(".qualificacao").attr("checked",false);
			
			$("#chx_02").attr("disabled",true);
			$("#chx_03").attr("disabled",true);
			$("#chx_04").attr("disabled",true);
			$("#chx_06").attr("disabled",true);
			$("#chx_07").attr("disabled",true);
			$("#chx_08").attr("disabled",true);
			$("#chx_09").attr("disabled",true);
			$("#chx_10").attr("disabled",true);
			$("#chx_11").attr("disabled",true);
		}
		
		else if(valor == "crioprecipitado"){
			$(".bloco").hide();
			$(".qualificacao").attr("disabled",false);
			$(".qualificacao").attr("checked",false);
			
			$("#chx_01").attr("disabled",true);			
			$("#chx_02").attr("disabled",true);
			$("#chx_03").attr("disabled",true);
			$("#chx_04").attr("disabled",true);
			$("#chx_05").attr("disabled",true);
			$("#chx_06").attr("disabled",true);
			$("#chx_07").attr("disabled",true);
			$("#chx_08").attr("disabled",false);
			$("#chx_09").attr("disabled",true);
			$("#chx_10").attr("disabled",false);
			$("#chx_11").attr("disabled",true);
		}
		
		else if(valor == "sangue_total"){
			$(".bloco").hide();
			$(".qualificacao").attr("disabled",false);
			$(".qualificacao").attr("checked",false);
			
			$("#chx_01").attr("disabled",false);			
			$("#chx_02").attr("disabled",true);
			$("#chx_03").attr("disabled",false);
			$("#chx_04").attr("disabled",false);
			$("#chx_05").attr("disabled",false);
			$("#chx_06").attr("disabled",true);
			$("#chx_07").attr("disabled",true);
			$("#chx_08").attr("disabled",true);
			$("#chx_09").attr("disabled",true);
			$("#chx_10").attr("disabled",true);
			$("#chx_11").attr("disabled",true);
		}
		
		else if(valor == "sangue_total_recosn"){
			$(".bloco").hide();
			$(".qualificacao").attr("disabled",false);
			$(".qualificacao").attr("checked",false);
			
			$("#chx_01").attr("disabled",false);			
			$("#chx_02").attr("disabled",true);
			$("#chx_03").attr("disabled",false);
			$("#chx_04").attr("disabled",false);
			$("#chx_05").attr("disabled",false);
			$("#chx_06").attr("disabled",true);
			$("#chx_07").attr("disabled",true);
			$("#chx_08").attr("disabled",true);
			$("#chx_09").attr("disabled",true);
			$("#chx_10").attr("disabled",true);
			$("#chx_11").attr("disabled",true);
		}
		
	}
	else{
		$(".qualificacao").attr("disabled",false);
		$(".qualificacao").attr("checked",false);
		$("#"+valor).show();
	}
}


function comboValida_pais(pai,classe1,classe2){
	
	var valor= $("#"+pai).attr("value");
	
	if(valor != "Brasil"){
		$("."+classe1).hide();
		$("."+classe2).show();
	}
	
	else{
		$("."+classe1).show();
		$("."+classe2).hide();
	}

}

function travaAlocacao(){

$("#alocacaoOption").attr("selected",true);
$("#cbx_alocacao").attr("disabled",true);
}

function desTravaAlocacao(){

$("#alocacaoOption").attr("selected",false);
$("#cbx_alocacao").attr("disabled",false);
}
/* ======================================================================================================================================
														funçoes usadas em frmMedicamentoMotivo.htm
========================================================================================================================================= */
/* usado para exibir ou nao os anexos  */
function setaQueixaTecnica(combo){
 var valor=$("#"+combo).attr("value"); 
 if(
	valor=="queixaDesvioQualidade" || 
	valor=="queixaProdutoSemRegistro" || 
	valor=="queixaProdutoFalsificado" || 
	valor=="queixaEmpresaSemAFE" || 
	valor=="queixaOutras"  ){	  
	$("#anexos").show();
 }else{
	 $("#anexos").hide();
 }
 
}







/* ======================================================================================================================================
														funçoes usadas na modal_adicionar_agente_toxico_venenoso.html
========================================================================================================================================= */
/*  */
function setaAgenteToxico(combo){
 var valor=$("#"+combo).attr("value"); 
 if(
	valor=="agentePeconhaCobra" || 
	valor=="agentePeconhaAranha" || 
	valor=="agentePeconhaEscorpiao" || 
	valor=="agenteVenenoLonomia" || 
	valor=="agentePeconhaVeneno" || 
	valor=="agenteNaoPeconha" ){	  
	$("#houveMordidaPicada").show();
 }else{
	 $("#houveMordidaPicada").hide();
 }
 
}


function setaViaMordidaPicada(sim){  
$("#comboVia > option").attr("selected",false);
if(sim){	
	$("#comboViaMordeduraPicada").attr("selected",true);
	}
	validaCombo('comboVia','expVia');
}

function setaMedicamentoLegal(sim){  
$(".medicamento").hide();
if(sim=='sim'){	
	$(".medicamentoLegal").show();
	}
else{	
	$(".medicamento").show();
	}
}

/* ======================================================================================================================================
														Campos de texto
========================================================================================================================================= */
/* apaga o conteudo de um ou mais campo */
function limpaCampo(){
	for (var i=0; i<arguments.length; i++ ){
		$("#"+arguments[i]).attr("value","");
	}
		
}

/* apos digitar certa quantidade de caracteres , torna um um check ou radio que está habilitado Desabilitado  
exemplo em frmExposicaoHumana_paciente.htm - campo nome do paciente
*/
function escreveUncheckRadios(pai , qtdLetras , idsRadio){
	var valor = $("#"+pai).attr("value");
	if(valor.length >= qtdLetras){
		for (var i=2; i<arguments.length; i++ ){
			$("#"+arguments[i]).attr("checked",false);
		}
	}
		
}


/* ======================================================================================================================================
														Validação de Check
========================================================================================================================================= */

function checkBloqueia(pai,classe){
	if($("#"+pai).attr("checked")==true){
		$("."+classe).attr("disabled",true);
	}	
	
	else{
		$("."+classe).attr("disabled",false);
	}
}
/* usado quando existem mais de um check que precisam ser testados
 usando : checksBloqueia(new Array("id01","id02","id03"),'classe01')
*/


function checksBloqueia(listaChecks,classe){
	var checked = false;
	for (i = 0;i < listaChecks.length;i++)
	   {
		 if($("#"+listaChecks[i]).attr("checked")==true)	
			checked = true;
	   }
   
	if(checked){
		$("."+classe).attr("disabled",true);
	}	
	
	else{
		$("."+classe).attr("disabled",false);
	}
}

function checkMostrar(pai,id){
	if($("#"+pai).attr("checked")==true){
		$("#"+id).show();
	}
	else{
		$("#"+id).hide();
	}
}


/* usado quando existem mais de um check que precisam ser testados
 usando : checksBloqueia(classepai,'idMostar')
*/

function checksMostrar(classepai,id){
	var checked = false;
	var listaChecks = $("."+classepai+"[type|=checkbox]");
	
	listaChecks.each(function(index) {
		if( $(this).attr("checked")==true)
			checked = true;
	});
	
	if(checked)
		$("#"+id).show();			
	else
		$("#"+id).hide();
	
}


function checkEsconde(pai,id){
	if($("#"+pai).attr("checked")==true){
		$("#"+id).hide();
	}
	else{
		$("#"+id).show();
	}
}

function checkMarcaMostraDesmarcaEsconde(pai,marca,mostra){
	if($("#"+pai).attr("checked")==true){
		$("#"+marca).attr("checked",true);
		$("#"+mostra).show();
	}
	else{
		$("#"+marca).attr("checked",false);
		$("#"+mostra).hide();
	}
}

function desmarcaTodos(pai,classe){
	
	if($("#"+pai).attr("checked")==true){
	
		$("."+classe).attr("checked",false);
	}
}

function desmarcaVersa(pai,classe){
	
	if($("."+pai).attr("checked")==true){
	
		$("."+classe).attr("checked",false);
	}
}


function validaNotf_EA(pai){
	if($("#"+pai).attr("checked")==true){
		$("#alocacaoOption").attr("selected",true);
		$("#cbx_alocacao").attr("disabled",true);
	}
	
	else{
		$("#alocacaoOption").attr("selected",false);
		$("#cbx_alocacao").attr("disabled",false);
	}
}

/* ======================================================================================================================================
														Validação de Radios
========================================================================================================================================= */

function radioBloqueia(pai,classe,id,content){
	var valor = $("#"+pai).attr("value");
	
	
	if($("#"+pai).attr("checked")==true){
		
		if(valor == "sim"){
			$("."+content).hide();
			$("."+classe).attr("disabled",true);
			$("#"+id).show();
		}
		else{
			$("."+classe).attr("disabled",false);
			$("#"+id).hide();
		}
		
	}	
	
	else{
		
		$("."+classe).attr("disabled",false);
			$("#"+id).hide();
		
	}
}

function opcaoRario(div,classe){
	
	$("."+classe).hide();
	$("#"+div).show();
}

// 
// pode passar como argumento quantas ID'S quiseres , separados por virgula  
// exemplo : campoMarca('id01','id02','id03','id04'); , com isso ,
// marcaria todos os elementos que tem esses id .
function campoMarca(){
	
	for (var i=0; i<arguments.length; i++ ){
		
		$("#"+arguments[i]).attr("checked",true);
	}
	
}
function campoDesmarca(){
	for (var i=0; i<arguments.length; i++ ){
		$("#"+arguments[i]).attr("checked",false);
	}
}
function campoHabilita(){
	for (var i=0; i<arguments.length; i++ ){
		$("#"+arguments[i]).attr("disabled",false);
	}
}
function campoDesabilita(){
	for (var i=0; i<arguments.length; i++ ){
		$("#"+arguments[i]).attr("disabled",true);
	}	
}

function campoDesabilita_classe(){
	for (var i=0; i<arguments.length; i++ ){
		$("."+arguments[i]).attr("disabled",true);
	}	
}

function campoHabilita_classe(){
	for (var i=0; i<arguments.length; i++ ){
		$("."+arguments[i]).attr("disabled",false);
	}
}

function escondeClasse(classe){
	$("."+classe).hide();
}

function mostraClasse(classe){
	$("."+classe).show();
}





/* ======================================================================================================================================
														Pick List
========================================================================================================================================= */

function vaiVolta(origem,destino,qnt){
if(qnt=="tudo"){
	$("#"+origem+" > option").appendTo("#"+destino);
}else{
	$("#"+origem+" > option:selected").appendTo("#"+destino);
}
}

/* ======================================================================================================================================
														Pick List
========================================================================================================================================= */


function preencheDose(combo,alvo){

var valor = $("#"+combo).attr("value");
$("#oncologia").hide();

	if(valor == "1"){
		$("#"+alvo).attr("value","12");
		$("#outrosIntervalo").hide();
	}
	else if(valor == "2"){
		$("#"+alvo).attr("value","6");
		$("#outrosIntervalo").hide();
	}
	else if(valor == "3"){
		$("#"+alvo).attr("value","4");
		$("#outrosIntervalo").hide();
	}
	else if(valor == "4"){
		$("#"+alvo).attr("value","3");
		$("#outrosIntervalo").hide();
	}
	else if(valor == "5"){
		$("#"+alvo).attr("value","2");
		$("#outrosIntervalo").hide();
	}
	else if(valor == "6"){
		$("#"+alvo).attr("value","1");
		$("#outrosIntervalo").hide();
	}
	else if(valor == "oncologia"){
		$("#oncologia").show();
		$("#outrosIntervalo").hide();
	}
	else if(valor == "outrosIntervalo"){
		$("#outrosIntervalo").show();
	}
	else
	{
		$("#"+alvo).attr("value","");
	}
	
}


/* ======================================================================================================================================
														Janelas Avisos - Disparo de função
========================================================================================================================================= */

function janelaAviso(){
	$.fn.modal({
		url:"modal_aviso_tipoEvento.html",
		autoOpen: true
});
	
}

