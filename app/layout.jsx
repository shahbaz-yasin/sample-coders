import './globals.css'
import { ThemeProvider as MUIThemeProvider } from './providers/ThemeProvider';
import { ThemeProvider as ThemeContextProvider } from '../lib/context/ThemeContext';
import Header from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="emotion-insertion-point" content="" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="__next">
        <ThemeContextProvider>
          <MUIThemeProvider>
            <Header />
            {children}
          </MUIThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
} 