$(document).ready(function() {
    $('.itens-menu').hover( function(){
        $(this).toggleClass('menu-selecionado');
    });

    fetch('http://localhost:8000/proxy.php')
    .then(response => response.json())
    .then(produtos => {
        let divs1 = d3.select('.produtos-principal3')
        .selectAll('div.card')           // seleciona os cards
        .data(produtos)                  // associa os dados
        .enter()                         // cria os novos elementos
        .append('div')                   
        .classed('card produto me-3', true)
        .html((produto, i) => `
            <a href="produtos.html" class="text-decoration-none cor-fonte-padrao">
                <img src="https://picsum.photos/650/720?random=${i}" class="card-img-top">
                <div class="card-body">
                    <p class="card-text">${produto.descricaoProduto}</p>
                    <h5 class="card-value">R$ ${produto.valorProduto}</h5>
                    <p class="card-text fonte-desconto">ou 10x de R$ ${(produto.valorProduto / 10).toFixed(2)}</p>
                </div>
            </a>
        `);

        let divs2 = d3.select('.produtos-principal2')
        .selectAll('div.card')           // seleciona os cards
        .data(produtos)                  // associa os dados
        .enter()                         // cria os novos elementos
        .append('div')                   
        .classed('card produto me-3', true)
        .html((produto, i) => `
            <a href="produtos.html" class="text-decoration-none cor-fonte-padrao">
                <img src="https://picsum.photos/650/720?random=${i}" class="card-img-top">
                <div class="card-body">
                    <p class="card-text">${produto.descricaoProduto}</p>
                    <h5 class="card-value">R$ ${produto.valorProduto}</h5>
                    <p class="card-text fonte-desconto">ou 10x de R$ ${(produto.valorProduto / 10).toFixed(2)}</p>
                </div>
            </a>
        `);

        let divs3 = d3.select('.produtos-principal4')
        .selectAll('div.card')           // seleciona os cards
        .data(produtos)                  // associa os dados
        .enter()                         // cria os novos elementos
        .append('div')                   
        .classed('card produto me-3', true)
        .html((produto, i) => `
            <a href="produtos.html" class="text-decoration-none cor-fonte-padrao">
                <img src="https://picsum.photos/650/720?random=${i}" class="card-img-top">
                <div class="card-body">
                    <p class="card-text">${produto.descricaoProduto}</p>
                    <h5 class="card-value">R$ ${produto.valorProduto}</h5>
                    <p class="card-text fonte-desconto">ou 10x de R$ ${(produto.valorProduto / 10).toFixed(2)}</p>
                </div>
            </a>
        `);
    })
    .catch(error => console.error('Erro ao buscar produtos:', error));

});