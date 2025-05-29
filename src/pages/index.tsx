import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: { clientX: number; clientY: number }) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setMousePos({ x, y });
  }

  return (
    <div
      className="font-sans min-h-screen transition-colors duration-300"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%,rgb(22, 34, 75),rgb(15, 23, 36))`,
      }}
    >
      <main className="pt-24 space-y-32 px-6 max-w-4xl mx-auto ">
        {/* Hero */}
        <section className="mt-10 flex items-center space-x-6">
          {/* Foto */}
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg flex-shrink-0">
            <Image
              src="/foto.jpg"
              alt="Lucas Cavalcante"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-4xl font-bold text-white">Lucas Cavalcante</h2>
            <p className="mt-4 text-lg text-white">Desenvolvedor Backend</p>
            <p className="mt-2 text-base text-gray-400">
              Focado em backend, apaixonado por inovação.
            </p>
          </div>
        </section>

        {/* Sobre mim */}
        <section id="about">
          <h3 className="text-2xl font-semibold mb-4 text-white">Sobre mim</h3>
          <p className="leading-relaxed text-white">
            Sou desenvolvedor backend com experiência em Java, Spring Boot e AWS. Estou aprendendo Next.js e Tailwind para expandir minhas habilidades para o frontend.
          </p>
        </section>

        {/* Projetos */}
        <section id="projects">
          <h3 className="text-2xl font-semibold mb-4 text-white">Projetos</h3>
          <ul className="space-y-4">
            <li className="border p-4 rounded-lg shadow-sm bg-white bg-opacity-20">
              <h4 className="font-bold">Projeto 1</h4>
              <p>Descrição rápida do projeto.</p>
            </li>
            <li className="border p-4 rounded-lg shadow-sm bg-white bg-opacity-20">
              <h4 className="font-bold">Projeto 2</h4>
              <p>Descrição rápida do projeto.</p>
            </li>
          </ul>
        </section>

        {/* Contato */}
        <section id="contact">
          <h3 className="text-2xl font-semibold mb-4 text-white">Contato</h3>
          <p className="text-white">
            Você pode me encontrar no email:{" "}
            <a href="mailto:seuemail@exemplo.com" className="underline text-blue-300">
              seuemail@exemplo.com
            </a>
          </p>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="text-center text-sm text-gray-300 py-8 mt-16 border-t border-gray-600">
        © {new Date().getFullYear()} Lucas - Todos os direitos reservados.
      </footer>
    </div>
  );
}
