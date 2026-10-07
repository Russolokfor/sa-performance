# S.A Performance — Site Institucional & Portfólio

Este projeto é o site institucional com portfólio da **S.A Performance**, empresa de estratégia digital liderada por **Sabino Filho**.

O site foi concebido como uma plataforma de posicionamento premium que conecta **comunicação**, **tráfego pago** e **acompanhamento de oportunidades comerciais**, respeitando rigorosamente a diferenciação entre objetivos estratégicos e resultados mensurados.

---

## 📁 Estrutura de Arquivos

```text
/
├── index.html                           # Página principal institucional (Início, Soluções, Projetos, Sobre, Processo, Contato)
├── css/
│   ├── main.css                         # Design system, variáveis de cor (#09187A), tipografia e responsividade
│   └── project-detail.css               # Estilos específicos para páginas de projetos (fluxo comercial, destaques, etc.)
├── js/
│   ├── site-config.js                   # Configurações centralizadas (dados de contato, status e projetos)
│   └── main.js                          # Comportamento, menu móvel acessível, rolagem suave e sincronização
├── projetos/
│   ├── kamilla-gondim/
│   │   └── index.html                   # Página do projeto Kamilla Gondim
│   ├── bruna-soutello/
│   │   └── index.html                   # Página do projeto Bruna Soutello (com fluxo da jornada comercial)
│   └── isotech-isolamentos/
│       └── index.html                   # Página do projeto Isotech Isolamentos (com nota de transparência)
├── assets/
│   └── favicon.svg                      # Favicon vetorial com a identidade visual da marca
└── README.md                            # Documentação técnica e checklist de lançamento
```

---

## 🚀 Como Executar Localmente

Como o projeto é construído em padrões web modernos (HTML5, CSS3 e JavaScript Vanilla sem dependências externas complexas), você pode executá-lo imediatamente utilizando o servidor nativo do Python 3 no macOS:

```bash
# Na raiz da pasta do projeto:
python3 -m http.server 8080
```

Em seguida, abra o navegador em:
`http://localhost:8080`

O site é 100% compatível com qualquer hospedagem estática ou tradicional (Vercel, Netlify, Cloudflare Pages, GitHub Pages, Hostinger, cPanel, Apache, Nginx).

---

## ⚙️ Como Atualizar Contatos e Redes Sociais

Todos os canais de contato estão centralizados no arquivo [`js/site-config.js`](file:///Users/sabinofilho/Documents/S.A%20Perfomance/js/site-config.js).

Quando os canais oficiais estiverem definidos, basta atualizar os campos e alterar `ativo: true`:

```javascript
contato: {
  status: "ativo",
  whatsapp: {
    ativo: true,
    numeroFormatado: "+55 (11) 99999-9999",
    link: "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20estrat%C3%A9gia%20digital."
  },
  email: {
    ativo: true,
    endereco: "contato@saperformance.com.br",
    link: "mailto:contato@saperformance.com.br"
  },
  instagram: {
    ativo: true,
    usuario: "@saperformance",
    link: "https://instagram.com/saperformance"
  }
}
```

---

## 📋 Lista de Materiais Pendentes para Publicação Definitiva

Para a publicação definitiva em domínio próprio, os seguintes materiais devem ser fornecidos e integrados:

1. **Definição dos Canais Oficiais de Contato:**
   - Número de WhatsApp comercial e mensagem padrão de abertura.
   - Endereço de e-mail corporativo institucional.
   - Perfil oficial do Instagram da S.A Performance.
2. **Logotipo Vetorial Oficial (opcional):**
   - Substituição da assinatura tipográfica provisória por arquivo SVG/PNG caso exista vetor finalizado.
3. **Fotografia / Retrato Oficial de Sabino Filho (opcional):**
   - Retrato profissional para a seção "Sobre", caso deseje substituir o cartão de monograma institucional.
4. **Materiais Reais dos Projetos (Imagens e Criativos):**
   - Peças visuais e prints de criativos reais para preenchimento das áreas reservadas em cada uma das páginas de projeto.
5. **Métricas Verificadas Consolidadas (futuro):**
   - Indicadores com período apurado, contexto e fonte para ativação das seções de métricas consolidadas.
6. **Domínio e DNS:**
   - Apontamento de DNS para a hospedagem escolhida.
