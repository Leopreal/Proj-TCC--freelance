import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto py-4">
        <nav>
          <div className="flex justify-center items-center mb-4">
            <div className="bg-white rounded-full p-4 flex items-center justify-center shadow-lg">
              <Image
                src="/images/logo-circular-tcc.png"
                alt="Logo"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          </div>
          <ul className="flex justify-center space-x-8 text-lg font-bold">
            <li>
              <Link href="/" className="hover:text-gray-400">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/produtos" className="hover:text-gray-400">
                PRODUTOS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
