import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaAws, FaJava } from "react-icons/fa";
import {
  SiSpringboot,
  SiDocker,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: { clientX: number; clientY: number }) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setMousePos({ x, y });
  }

  // Dados dos projetos
  const projects = [
    {
      title: "Backend Estoque",
      description: "Backend completo de um app real de controle de estoque.",
      image: "/estoque.jpg",
      link: "https://github.com/LucasCva/estoque-backend",
    },
    {
      title: "Projeto 2",
      description: "Descrição rápida e objetiva do projeto 2.",
      image: "/projeto2.jpg",
      link: "https://github.com/LucasCva/portfilio-website",
    },
    {
      title: "Projeto 3",
      description: "Descrição rápida e objetiva do projeto 3.",
      image: "/projeto3.jpg",
      link: "https://github.com/LucasCva/portfilio-website",
    },
  ];

  return (
    <div className="font-sans">
      {/* Seção Hero com fundo dinâmico */}
      <div
        className="min-h-screen transition-colors duration-300 flex items-center justify-center"
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgb(22, 34, 75), rgb(15, 23, 36))`,
        }}
      >
        <main className="px-6 max-w-4xl mx-auto">
          <section className="flex flex-col items-center text-center space-y-6">
            {/* Foto */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl">
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
              <h2 className="text-6xl font-serif font-bold text-white">Lucas Cavalcante</h2>
              <p className="mt-4 text-2xl text-white">Desenvolvedor Java</p>
              <p className="mt-2 text-lg text-gray-400">
                Focado em backend, apaixonado por inovação.
              </p>
            </div>

            <div className="flex space-x-6 mt-4">
              <a
                href="https://github.com/LucasCva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://linkedin.com/in/lucasCva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </section>
        </main>
      </div>

      <div className="bg-gray-950">
        <main className="space-y-32 px-6 max-w-4xl mx-auto pt-24">
          {/* Sobre mim */}
          <section id="about">
            <h3 className="text-2xl font-semibold mb-4 text-white text-center">Sobre mim</h3>
            <div className="max-w-2xl mx-auto">
              <p className="leading-relaxed text-white text-justify">
                Sou um desenvolvedor apaixonado por tecnologia e pelo desafio constante de aprender e criar soluções inovadoras.

                Tenho foco no desenvolvimento backend, trabalhando com tecnologias como Java, SpringBoot, PostgreSQL, AWS, Docker. Acredito que um bom software nasce de uma arquitetura sólida, eficiente e escalável, que garante desempenho e segurança.

                Neste portfólio, você encontrará projetos que refletem meu compromisso com qualidade, aprendizado contínuo e atenção aos detalhes. Estou sempre aberto a novas oportunidades de colaboração e crescimento profissional.
              </p>
            </div>
          </section>

          {/* Tecnologias */}
          <section id="technologies" className="mb-32">
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">Tecnologias</h3>
            <div className="flex flex-wrap justify-center gap-12">
              {/* Java */}
              <div className="flex flex-col items-center space-y-2">
                <FaJava size={64} className="text-orange-500" />
                <span className="text-white">Java</span>
              </div>

              {/* Spring Boot */}
              <div className="flex flex-col items-center space-y-2">
                <SiSpringboot size={64} className="text-green-500" />
                <span className="text-white">Spring Boot</span>
              </div>

              {/* AWS */}
              <div className="flex flex-col items-center space-y-2">
                <FaAws size={64} className="text-yellow-500" />
                <span className="text-white">AWS</span>
              </div>

              {/* Docker */}
              <div className="flex flex-col items-center space-y-2">
                <SiDocker size={64} className="text-blue-400" />
                <span className="text-white">Docker</span>
              </div>

              {/* PostgreSQL */}
              <div className="flex flex-col items-center space-y-2">
                <SiPostgresql size={64} className="text-blue-600" />
                <span className="text-white">PostgreSQL</span>
              </div>

              {/* MySQL */}
              <div className="flex flex-col items-center space-y-2">
                <SiMysql size={64} className="text-sky-500" />
                <span className="text-white">MySQL</span>
              </div>
            </div>
          </section>

          {/* Projetos */}
          <section id="projects">
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">Projetos</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map(({ title, description, image, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="relative w-full h-48 overflow-hidden mb-4 rounded-lg shadow-md">
                    <Image
                      src={image}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
                  <p className="text-gray-300">{description}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Contato */}
          <section id="contact">
            <h3 className="text-2xl font-semibold mb-4 text-white">Contato</h3>
            <p className="text-white">
              Você pode me encontrar no email:{" "}
              <a href="mailto:seuemail@exemplo.com" className="underline text-blue-300">
                lucasilva.cavalcant3@gmail.com
              </a>
            </p>
          </section>
        </main>

        {/* Rodapé */}
        <footer className="text-center text-sm text-gray-300 py-8 mt-16 border-t border-gray-600">
          © {new Date().getFullYear()} Lucas - Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}
