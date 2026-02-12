import Image from 'next/image';

export function RepfolioLogo({
  variant = 'primary',
  className = '',
  width = 150,
  height = 40,
}: {
  variant?: 'primary' | 'white' | 'single';
  className?: string;
  width?: number;
  height?: number;
}) {
  const logoSrc = {
    primary: '/logo/repfolio-logo-primary.svg',
    white: '/logo/repfolio-logo-white.svg',
    single: '/logo/repfolio-logo-charcoal.svg',
  };

  return (
    <Image
      src={logoSrc[variant]}
      alt="Repfolio"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
