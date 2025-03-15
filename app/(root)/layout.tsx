import header from "@/components/shared/header";
import footer from "@/components/shared/footer";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex h-screen flex-col">
        <header />
        <main className="flex-1">{children}</main>
        <footer />
      </div>
    );
  }
  

  console.log("root layout loaded");