import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import { Toaster } from 'sonner';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex h-screen flex-col">
        <Toaster />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    );
  }

console.log("root layout loaded");