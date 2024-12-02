'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'

const Produtos = () => {
  // Estado para armazenar os itens do carrinho
  const [carrinho, setCarrinho] = useState([])

  // Função para adicionar um item ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto])
  }

  // Função para gerar o link do WhatsApp com todos os itens do carrinho
  const handleFinalizarPedido = () => {
    const mensagem = carrinho.map(item => `*${item.nome}* - ${item.preco}`).join('\n');
    const total = carrinho.reduce((acc, item) => acc + parseFloat(item.preco.replace('$', '').replace(',', '.')), 0).toFixed(2);
    const mensagemFinal = `Olá! Gostaria de solicitar os seguintes itens:\n\n${mensagem}\n\nTotal: $${total} \nPoderia me dizer seus Horários Disponíveis?`;

    const numeroWhatsApp = '5518996863834';
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemFinal)}`;
    window.open(linkWhatsApp, '_blank');
  }

  return (
    <div>
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Produtos Principais:</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Cabelo</h3>
              <img src="/images/cabelo.png" alt="Cabelo" className="w-full h-auto mb-4" />
              <p className="text-gray-800 mb-4">Em tesoura ou máquina. Como o cliente preferir</p>
              <p className="text-xl font-semibold text-gray-800">$ 25,00</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                onClick={() => adicionarAoCarrinho({ nome: 'Cabelo', preco: '$ 25,00' })}
              >
                Adicionar ao Carrinho
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Barba</h3>
              <img src="/images/barba.png" alt="Barba" className="w-full h-auto mb-4" />
              <p className="text-gray-800 mb-4">Corte e desenho profissional de barba</p>
              <p className="text-xl font-semibold text-gray-800">$ 15,00</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                onClick={() => adicionarAoCarrinho({ nome: 'Barba', preco: '$ 15,00' })}
              >
                Adicionar ao Carrinho
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Cabelo e Barba</h3>
              <img src="/images/cabelo_e_barba.png" alt="Cabelo e Barba" className="w-full h-auto mb-4" />
              <p className="text-gray-800 mb-4">Pacote completo de cabelo e barba</p>
              <p className="text-xl font-semibold text-gray-800">$ 35,00</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                onClick={() => adicionarAoCarrinho({ nome: 'Cabelo e Barba', preco: '$ 35,00' })}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mt-16 mb-8 text-center">Adicionais:</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Pezinho</h3>
              <img src="/images/pezinho.jpg" alt="Pezinho" className="w-full h-auto mb-4" />
              <p className="text-gray-800 mb-4">Na navalha ou máquina, a preferência é do cliente</p>
              <p className="text-xl font-semibold text-gray-800">$ 10,00</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                onClick={() => adicionarAoCarrinho({ nome: 'Pezinho', preco: '$ 10,00' })}
              >
                Adicionar ao Carrinho
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Luzes</h3>
              <img src="/images/luzes.jpg" alt="Luzes" className="w-full h-auto mb-4" />
              <p className="text-gray-800 mb-4">Aplicação de luzes no cliente, com descolorante e matizador</p>
              <p className="text-xl font-semibold text-gray-800">$ 30,00</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                onClick={() => adicionarAoCarrinho({ nome: 'Luzes', preco: '$ 30,00' })}
              >
                Adicionar ao Carrinho
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Hidratação</h3>
              <img src="/images/hidratacao.jpg" alt="Hidratação" className="w-full h-auto mb-4" />
              <p className="text-gray-800 mb-4">Pacote completo de hidratação para o cabelo</p>
              <p className="text-xl font-semibold text-gray-800">$ 25,00</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                onClick={() => adicionarAoCarrinho({ nome: 'Hidratação', preco: '$ 25,00' })}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>


          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-4 text-center">Carrinho:</h2>
            {carrinho.length > 0 ? (
              <div className="bg-white rounded-lg shadow-lg p-4">
                <ul>
                  {carrinho.map((item, index) => (
                    <li key={index} className="flex justify-between py-2">
                      <span className="text-gray-800">{item.nome}</span>
                      <span className="text-gray-800">{item.preco}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded mt-4 block mx-auto"
                  onClick={handleFinalizarPedido}
                >
                  Finalizar Pedido
                </button>
              </div>
            ) : (
              <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Produtos;
