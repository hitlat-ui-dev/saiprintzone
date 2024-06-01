import "./globals.css";

<link rel="icon" href="./favicon.ico" />;
export const metadata = {
  title: "Sai Print Zone",
  description: "All Type Of Printing Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
