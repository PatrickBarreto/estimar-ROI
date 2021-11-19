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
			<td>${valor_pago}</td>
			<td>${vendas}</td>
			<td>${lucro_total}</td>
			<td>${lucro_liquido}</td>
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
		faturamento = ("Lucro Bruto: R$ " + lucro_total)
		p.innerHTML = `Total de vendas: ${vendas} <br> ${faturamento} <br> Investimento: R$ ${investimento} <br> Lucro líquido de R$ ${lucro_liquido}`
		retorno.appendChild(p)
	} 
	if (lucro_total < investimento)
	{
		faturamento = ("Perda de lucro: R$" + lucro_total)
		p.innerHTML = `Total de vendas: ${vendas} <br> ${faturamento}, Investimento: R$ ${investimento}, Perda total R$ ${lucro_liquido}`
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