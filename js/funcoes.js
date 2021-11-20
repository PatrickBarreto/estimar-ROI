function calcula_retorno(){

    let cpa = Number(document.querySelector("#cpa").value)
    let fat_por_venda = Number(document.querySelector("#faturamento").value)
    let investimento = Number(document.querySelector("#investimento").value)
	
	let lucro_por_venda = 0
	let lucro_total = 0
	let vendas = 0
	let valor_pago = 0
	let lucro_liquido = 0


	let retorno_parcial = document.createElement(`div`)
	
	retorno.style.display="block"
	

	do{
		vendas++;
		lucro_por_venda = fat_por_venda - cpa;
		lucro_total = fat_por_venda * vendas;
		valor_pago += cpa;
		lucro_liquido = lucro_total - valor_pago;

		retorno_parcial = `
		<table>
		<tr>
			<th>Valor pago</th>
			<th>Vendas</th>
			<th>Lucro bruto</th>
			<th>Lucro líquido</th>
		</tr>
		<tr>
			<td>${valor_pago.toFixed(2)}</td>
			<td>${vendas.toFixed(2)}</td>
			<td>${lucro_total.toFixed(2)}</td>
			<td>${lucro_liquido.toFixed(2)}</td>
		</tr>
		<table>
		`;
		
		if( vendas <= 1) {
			retorno.innerHTML = retorno_parcial

		}else if (vendas > 1){
			retorno.innerHTML += retorno_parcial
		}
        

	}while (valor_pago < investimento)

	resumo(lucro_total, investimento, vendas, lucro_liquido)
}

function resumo (lucro_total, investimento, vendas, lucro_liquido) {
	let faturamento
	let p = document.createElement("p")
	
	if (lucro_total >= investimento)
	{
		p.innerHTML = `
		Total de vendas: ${vendas.toFixed(2)} <br> 
		Lucro bruto de: R$ ${lucro_total.toFixed(2)} <br> 
		Investimento: R$ ${investimento.toFixed(2)} <br>
		Lucro líquido de R$ ${lucro_liquido.toFixed(2)}
		`
		retorno.appendChild(p)
	} 
	if (lucro_total < investimento)
	{
		p.innerHTML = `
		Total de vendas: ${vendas.toFixed(2)} <br>
		Lucro bruto de: R$${lucro_total.toFixed(2)} <br>
		Investimento: R$ ${investimento.toFixed(2)} <br>
		Perda total R$ ${lucro_liquido.toFixed(2)}
		`
		retorno.appendChild(p)
	}

}

function adicionar_btn_limpar () {
	let btn_limpar = document.querySelector("#limpar")
	btn_limpar.style.display="inline-block"
}

function limpar (){
	retorno.style.display="none"


}

export {calcula_retorno, resumo, adicionar_btn_limpar, limpar}