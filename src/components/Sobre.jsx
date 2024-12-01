import Image from 'next/image';

export default function Sobre() {
  return (
    <section className="container mx-auto py-12 px-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-yellow-500">
        Sobre a Barbearia Bald Troop
      </h2>
      <div className="flex flex-col items-center space-y-6">
        <Image
          src="/images/eric.jpg"
          alt="Eric"
          width={250}
          height={250}
          className="rounded-full shadow-xl border-4 border-yellow-500"
        />
        <p className="text-lg leading-relaxed text-justify text-gray-300">
          Seja bem-vindo à Bald Troop, a barbearia onde a tradição encontra a ousadia e o estilo é
          uma declaração de atitude, onde o Barbeiro traz ao mercado o que há de melhor para seu
          cabelo e barba. Fundada em 2024, a Barbearia já é destaque na cidade e conquista novos
          clientes a cada dia.
        </p>
        <p className="text-lg leading-relaxed text-justify text-gray-300">
          Em nosso ambiente, você é imediatamente recebido por um ambiente que combina o charme
          vintage com toques modernos. As paredes são adornadas com quadros e fotos de ícones da
          moda masculina, enquanto as cadeiras de barbearia em couro de alta qualidade proporcionam
          um conforto imbatível. O aroma de loção pós-barba e o som de uma seleção eclética de
          músicas criam uma atmosfera relaxante e energizante ao mesmo tempo.
        </p>
        <p className="text-lg leading-relaxed text-justify text-gray-300">
          Em nossos serviços, oferecemos uma gama completa de serviços de barbearia, desde cortes
          clássicos até estilos contemporâneos e ousados. Nossos barbeiros são mestres em suas
          artes, treinados para realizar desde o corte impecável até a barbearia tradicional com
          navalha. Além disso, oferecemos tratamentos de cuidados com a pele e a barba, garantindo
          que cada cliente saia não apenas com um novo visual, mas também com uma sensação renovada
          de confiança e bem-estar.
        </p>
        <p className="text-lg leading-relaxed text-justify text-gray-300">
          O compromisso da Bald Troop vai além do simples corte de cabelo. Nós acreditamos que cada
          visita deve ser um momento de escape do cotidiano, um tempo para relaxar e se cuidar. Por
          isso, oferecemos bebidas refrescantes, um café especial e até mesmo uma seleção de revistas
          e livros para tornar sua visita ainda mais agradável.
        </p>
        <blockquote className="text-center text-xl italic font-semibold text-yellow-500">
          "Proporcionar aos clientes autoestima e qualidade de vida."
        </blockquote>
      </div>
    </section>
  );
}
