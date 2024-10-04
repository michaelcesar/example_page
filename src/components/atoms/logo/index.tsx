import Image from 'next/image';

interface LogoProps {
  url: string;
  width?: number;
  height?: number;
}

export default function Logo({ url, width = 140, height = 140 }: LogoProps) {
  return <Image src={url} alt="logo" width={width} height={height} />;
}
