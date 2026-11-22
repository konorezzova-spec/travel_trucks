import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: '../fonts/inter/InterRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/inter/InterMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/inter/InterSemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--inter',
  display: 'swap',
});

export const manrope = localFont({
  src: [
    {
      path: '../fonts/manrope/ManropeRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/manrope/ManropeMedium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--manrope',
  display: 'swap',
});
