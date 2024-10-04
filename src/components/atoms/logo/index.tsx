import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/images/logo_text.svg"
      alt="logo"
      width="140"
      height="140"
    ></Image>
  );
}
