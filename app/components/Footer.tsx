import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/logo.png"
            alt="Frontier's Outing Logo"
            width={160}
            height={110}
            className="opacity-90"
          />
        </div>
        <h3 className="text-xl font-bold mb-1">Frontier Team Outing 2026</h3>
        <p className="text-white/60 text-sm mb-6">
          THANN Pool Villa Khaoyai · June 6–7, 2026
        </p>
        <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary/40 mx-auto mb-6 rounded-full" />
        <p className="text-white/40 text-xs">
          Made with ❤️ for the best team in the world
        </p>
      </div>
    </footer>
  );
}
