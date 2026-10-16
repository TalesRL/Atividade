const botao = document.getElementById('carregarBtn');
const grade = document.getElementById('produtos');
const mensagem = document.getElementById('mensagem');

// O botão inicia a consulta: nenhum produto é cadastrado manualmente no HTML.
botao.addEventListener('click', carregarProdutos);

async function carregarProdutos() {
  botao.disabled = true;
  botao.textContent = 'Carregando...';
  mensagem.textContent = 'Carregando produtos, aguarde...';
  mensagem.classList.remove('erro');
  grade.replaceChildren();

  try {
    const response = await fetch('https://dummyjson.com/products?limit=12');

    if (!response.ok) {
      throw new Error(`Erro HTTP ${response.status}: não foi possível carregar os produtos.`);
    }

    const dados = await response.json();
    if (!Array.isArray(dados.products)) {
      throw new Error('A API retornou um formato inesperado.');
    }

    if (dados.products.length === 0) {
      mensagem.textContent = 'Nenhum produto encontrado.';
      return;
    }

    for (const produto of dados.products) {
      const card = document.createElement('article');
      card.className = 'card';

      const imagem = document.createElement('img');
      imagem.src = produto.thumbnail || produto.images?.[0] || '';
      imagem.alt = produto.title || 'Imagem do produto';
      imagem.loading = 'lazy';

      const conteudo = document.createElement('div');
      conteudo.className = 'card-conteudo';

      const categoria = document.createElement('span');
      categoria.className = 'categoria';
      categoria.textContent = produto.category || 'Sem categoria';

      const titulo = document.createElement('h2');
      titulo.textContent = produto.title || 'Produto sem nome';

      const preco = document.createElement('p');
      preco.className = 'preco';
      preco.textContent = typeof produto.price === 'number'
        ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(produto.price)
        : 'Preço indisponível';

      conteudo.append(categoria, titulo, preco);
      card.append(imagem, conteudo);
      grade.append(card);
    }

    mensagem.textContent = `${dados.products.length} produtos carregados com sucesso.`;
  } catch (erro) {
    console.error('Falha na requisição:', erro);
    mensagem.textContent = `Não foi possível carregar os produtos. ${erro.message} Tente novamente.`;
    mensagem.classList.add('erro');
  } finally {
    botao.disabled = false;
    botao.textContent = 'Carregar produtos';
  }
}
