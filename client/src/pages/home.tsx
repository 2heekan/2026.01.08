import { useState } from "react";
import { ArrowUpRight, Mail, Github, Linkedin, Instagram } from "lucide-react";

const fontStyles = [
  { id: "gothic", name: "Gothic", display: "'Playfair Display', serif", body: "'Space Grotesk', sans-serif" },
  { id: "modern", name: "Modern", display: "'Space Grotesk', sans-serif", body: "'Space Grotesk', sans-serif" },
  { id: "elegant", name: "Elegant", display: "'Cormorant Garamond', serif", body: "'Cormorant Garamond', serif" },
  { id: "mono", name: "Mono", display: "'JetBrains Mono', monospace", body: "'JetBrains Mono', monospace" },
  { id: "classic", name: "Classic", display: "'Libre Baskerville', serif", body: "'Inter', sans-serif" },
  { id: "editorial", name: "Editorial", display: "'Lora', serif", body: "'Montserrat', sans-serif" },
  { id: "minimal", name: "Minimal", display: "'Inter', sans-serif", body: "'Inter', sans-serif" },
  { id: "bold", name: "Bold", display: "'Outfit', sans-serif", body: "'Outfit', sans-serif" },
];

const projects = [
  {
    id: 1,
    title: "Ethereal",
    category: "Brand Identity",
    year: "2025",
    description: "A luxury fragrance brand seeking timeless elegance",
  },
  {
    id: 2,
    title: "Nocturn",
    category: "Web Design",
    year: "2024",
    description: "Dark-mode first music streaming platform",
  },
  {
    id: 3,
    title: "Vesper",
    category: "Art Direction",
    year: "2024",
    description: "Editorial campaign for emerging fashion label",
  },
  {
    id: 4,
    title: "Monolith",
    category: "Typography",
    year: "2023",
    description: "Custom typeface design for architectural firm",
  },
];

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeFont, setActiveFont] = useState(fontStyles[0]);

  return (
    <div 
      className="min-h-screen bg-background text-foreground noise"
      style={{ fontFamily: activeFont.body }}
    >
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header */}
        <header className="mb-24 opacity-0 animate-fade-up">
          <nav className="flex items-center justify-between mb-20">
            <span 
              className="text-xl tracking-wide" 
              style={{ fontFamily: activeFont.display }}
              data-testid="logo"
            >
              A.
            </span>
            <div className="flex items-center gap-8">
              <a 
                href="#work" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                data-testid="link-work"
              >
                Work
              </a>
              <a 
                href="#about" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                data-testid="link-about"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                data-testid="link-contact"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        {/* Font Switcher */}
        <section className="mb-16 opacity-0 animate-fade-up delay-100">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Typography</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {fontStyles.map((font) => (
              <button
                key={font.id}
                onClick={() => setActiveFont(font)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeFont.id === font.id
                    ? 'bg-foreground text-background'
                    : 'glass-light text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
                style={{ fontFamily: font.display }}
                data-testid={`button-font-${font.id}`}
              >
                {font.name}
              </button>
            ))}
          </div>
        </section>

        {/* Hero */}
        <section className="mb-32">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground tracking-widest uppercase opacity-0 animate-fade-up delay-200" data-testid="text-role">
              Creative Director & Designer
            </p>
            <h1 
              className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight opacity-0 animate-fade-up delay-300" 
              style={{ fontFamily: activeFont.display }}
              data-testid="text-headline"
            >
              Crafting visual
              <br />
              <span className="italic">narratives</span> that
              <br />
              <span className="text-stroke">transcend</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed pt-4 opacity-0 animate-fade-up delay-400" data-testid="text-intro">
              Based in New York. Specializing in brand identity, 
              editorial design, and art direction for discerning clients.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="mb-32">
          <div className="flex items-center gap-4 mb-12 opacity-0 animate-fade-up delay-500">
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Selected Work</span>
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-xs text-muted-foreground">04</span>
          </div>

          <div className="space-y-1">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href="#"
                className={`group block py-6 border-b border-border/50 transition-all duration-500 opacity-0 animate-slide-in-left ${
                  hoveredProject !== null && hoveredProject !== project.id 
                    ? 'opacity-30' 
                    : ''
                }`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                data-testid={`card-project-${project.id}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-2">
                      <h3 
                        className="text-2xl md:text-3xl font-light group-hover:italic transition-all duration-300"
                        style={{ fontFamily: activeFont.display }}
                        data-testid={`text-project-title-${project.id}`}
                      >
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-sm" data-testid={`text-project-desc-${project.id}`}>
                      {project.description}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-muted-foreground tracking-wide block mb-1">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground/50">
                      {project.year}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-32 opacity-0 animate-fade-up delay-700">
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs text-muted-foreground tracking-widest uppercase">About</span>
              <div className="flex-1 h-px bg-border/50"></div>
            </div>
            <div className="space-y-6">
              <p 
                className="text-2xl md:text-3xl font-light leading-relaxed"
                style={{ fontFamily: activeFont.display }}
                data-testid="text-about-headline"
              >
                "Design is the silent ambassador of intention."
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-lg" data-testid="text-about-body">
                With over a decade of experience shaping visual identities 
                for brands across fashion, culture, and technology. I believe 
                in the power of restraint—letting negative space speak as 
                loudly as the elements themselves.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="glass-light px-4 py-2 rounded-full text-xs text-muted-foreground">
                  Brand Strategy
                </span>
                <span className="glass-light px-4 py-2 rounded-full text-xs text-muted-foreground">
                  Art Direction
                </span>
                <span className="glass-light px-4 py-2 rounded-full text-xs text-muted-foreground">
                  Typography
                </span>
                <span className="glass-light px-4 py-2 rounded-full text-xs text-muted-foreground">
                  Editorial
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Connect</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <div className="space-y-8">
            <a 
              href="mailto:2heekan@yonsei.ac.kr" 
              className="group flex items-center gap-4 text-2xl md:text-4xl font-light hover:italic transition-all duration-300"
              style={{ fontFamily: activeFont.display }}
              data-testid="link-email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span>2heekan@yonsei.ac.kr</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </a>

            <div className="flex items-center gap-6 pt-8">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-border/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span data-testid="text-copyright">© 2025</span>
            <span style={{ fontFamily: activeFont.display }} className="tracking-wide">New York, NY</span>
          </div>
        </footer>

      </div>
    </div>
  );
}