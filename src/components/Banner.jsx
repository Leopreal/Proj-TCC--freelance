import Image from 'next/image';

export default function Banner() {
  return (
    <div>
      <Image src="/images/BARBER-SHOP-BANNER.jpg" alt="Banner" layout="responsive" width={1920} height={600} />
    </div>
  );
}