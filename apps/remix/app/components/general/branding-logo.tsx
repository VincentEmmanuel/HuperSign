import type { ImgHTMLAttributes } from 'react';

import { cn } from '@documenso/ui/lib/utils';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogo = ({ className, alt = 'HuperSign', ...props }: LogoProps) => {
  return (
    <>
      <img
        src="/static/logo.png"
        alt={alt}
        className={cn('block dark:hidden', className)}
        {...props}
      />
      <img
        src="/static/logo-dark.png"
        alt={alt}
        className={cn('hidden dark:block', className)}
        {...props}
      />
    </>
  );
};
