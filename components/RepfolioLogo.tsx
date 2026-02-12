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
    <span
      className={className}
      style={{ display: 'inline-block', width, height, maxWidth: '100%' }}
    >
      <Image
        src={logoSrc[variant]}
        alt="Repfolio"
        width={width}
        height={height}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
        priority
      />
    </span>
  );
}
