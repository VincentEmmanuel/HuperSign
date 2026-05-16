import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogo = ({ alt = 'HuperSign', ...props }: LogoProps) => {
  return <img src="/static/logo.png" alt={alt} {...props} />;
};
