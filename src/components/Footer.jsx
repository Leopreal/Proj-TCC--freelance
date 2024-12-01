import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 flex flex-col items-center justify-center space-y-4">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/logo-circular-tcc.png"
          alt="Logo"
          width={120}
          height={120}
          className="rounded-full border-4 border-yellow-500 shadow-lg"
        />
        <h2 className="text-2xl font-extrabold text-yellow-500">Bald Troop</h2>
      </div>

      <p className="text-center text-sm text-gray-300">
        &copy; 2024 Bald Troop - Todos os direitos reservados
      </p>
      <p className="text-center text-sm text-gray-500">
        Desenvolvido por: Daniel Martins, João Alexandre, Nathan Alves, Cauan Kobo e Eric Gabriel
      </p>
    </footer>
  );
}
