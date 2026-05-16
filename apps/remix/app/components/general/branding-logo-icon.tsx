import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogoIcon = ({ alt = 'HuperSign', ...props }: LogoProps) => {
  return <img src="/apple-touch-icon.png" alt={alt} {...props} />;
};
