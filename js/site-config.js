/**
 * S.A PERFORMANCE — CONFIGURAÇÕES E DADOS CENTRAIS DO SITE
 * -------------------------------------------------------------
 * Este arquivo centraliza informações institucionais, projetos,
 * canais de contato e parâmetros de marca.
 *
 * Para atualizar os contatos ou adicionar novos projetos,
 * edite as constantes abaixo.
 */

const SITE_CONFIG = {
  empresa: {
    nome: "S.A Performance",
    lider: "Sabino Filho",
    segmento: "Estratégia Digital & Inteligência Comercial",
    corPrimaria: "#09187A",
    anoFundacao: "2025",
    slogan: "Estratégia digital para aproximar sua empresa das oportunidades certas.",
    missaoCurta: "A S.A Performance conecta posicionamento, tráfego pago e acompanhamento comercial para fortalecer sua presença digital e apoiar o crescimento do seu negócio."
  },

  /**
   * CANAIS DE CONTATO
   * Nota: Os dados oficiais ainda serão fornecidos.
   * Quando disponíveis, preencha os valores e altere 'ativo' para true.
   */
  contato: {
    status: "ativo",
    mensagemStatus: "Atendimento direto via WhatsApp.",
    whatsapp: {
      ativo: true,
      numeroFormatado: "(62) 99222-8280",
      link: "https://wa.me/5562992228280?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20estrat%C3%A9gia%20digital.",
      orientacao: "Atendimento direto e imediato via WhatsApp."
    },
    email: {
      ativo: false,
      endereco: "", // Ex: "contato@saperformance.com.br"
      link: "", // Ex: "mailto:contato@saperformance.com.br"
      orientacao: "Canal de correspondência corporativa em ativação."
    },
    instagram: {
      ativo: false,
      usuario: "", // Ex: "@saperformance"
      link: "", // Ex: "https://instagram.com/saperformance"
      orientacao: "Perfil institucional oficial em breve."
    }
  },

  /**
   * SOLUÇÕES OFERECIDAS
   */
  solucoes: [
    {
      id: "estrategia-posicionamento",
      numero: "01",
      titulo: "Estratégia e posicionamento digital",
      descricao: "Planejamento da comunicação para tornar mais claros os serviços, os diferenciais e a proposta de valor da empresa.",
      beneficioChave: "Clareza na mensagem e diferenciação competitiva no mercado."
    },
    {
      id: "gestao-trafego-pago",
      numero: "02",
      titulo: "Gestão de tráfego pago",
      descricao: "Planejamento, organização e acompanhamento de campanhas, com análise de indicadores e ajustes alinhados ao objetivo de cada negócio.",
      beneficioChave: "Distribuição qualificada da comunicação para públicos prioritários."
    },
    {
      id: "crescimento-perfil",
      numero: "03",
      titulo: "Crescimento de perfil",
      descricao: "Direcionamento da presença digital, dos temas de conteúdo e dos caminhos de contato, buscando atrair um público relevante e fortalecer o relacionamento.",
      beneficioChave: "Construção de autoridade consistente e canais fluidos de contato."
    },
    {
      id: "gestao-leads",
      numero: "04",
      titulo: "Gestão de leads",
      descricao: "Organização das oportunidades geradas, acompanhamento das etapas de atendimento e análise dos motivos que facilitam ou dificultam a conversão.",
      beneficioChave: "Visão analítica do funil comercial para tomada de decisão fundamentada."
    }
  ],

  /**
   * PROCESSO DE TRABALHO
   */
  processo: [
    {
      etapa: "01",
      nome: "Diagnóstico",
      resumo: "Compreender o negócio, o público e os objetivos prioritários."
    },
    {
      etapa: "02",
      nome: "Planejamento",
      resumo: "Definir prioridades estratégicas, mensagens e ações coordenadas."
    },
    {
      etapa: "03",
      nome: "Execução",
      resumo: "Colocar as ações planejadas em prática com método e controle."
    },
    {
      etapa: "04",
      nome: "Acompanhamento",
      resumo: "Analisar indicadores e orientar os próximos ajustes contínuos."
    }
  ],

  /**
   * PROJETOS EM DESTAQUE (PORTFÓLIO)
   */
  projetos: [
    {
      slug: "kamilla-gondim",
      titulo: "Kamilla Gondim",
      subtitulo: "Presença digital e tráfego pago com foco em crescimento de perfil.",
      apresentacao: "Atuação voltada ao crescimento do perfil e à gestão de tráfego pago, conectando comunicação, descoberta da marca e oportunidades de contato.",
      categoria: "Estratégia & Anúncios",
      destaques: [
        "Posicionamento do perfil",
        "Comunicação e conteúdo",
        "Planejamento de campanhas",
        "Acompanhamento de indicadores"
      ],
      linkReferencia: "https://www.instagram.com/p/DdjMjqQx8l8/",
      textoBotao: "Ver publicação de referência",
      notaReferencia: "O link acima corresponde a uma publicação de referência no Instagram, e não ao perfil confirmado da profissional. Métricas e informações de perfil não são presumidas.",
      caminhoDetalhes: "projetos/kamilla-gondim/"
    },
    {
      slug: "bruna-soutello",
      titulo: "Bruna Soutello",
      subtitulo: "Tráfego pago, crescimento de perfil e gestão de leads.",
      apresentacao: "Uma atuação que conecta a atração de público ao acompanhamento das oportunidades comerciais, considerando tanto a presença digital quanto o atendimento aos contatos gerados.",
      categoria: "Tráfego & Funil Comercial",
      destaques: [
        "Aquisição de oportunidades",
        "Presença digital",
        "Organização do atendimento",
        "Acompanhamento comercial"
      ],
      fluxoComercial: [
        "Atração",
        "Contato",
        "Atendimento",
        "Agendamento",
        "Fechamento"
      ],
      linkReferencia: "https://www.instagram.com/brunasoutelloo/",
      textoBotao: "Conhecer o perfil",
      notaReferencia: "Link direto para o perfil oficial no Instagram da profissional.",
      caminhoDetalhes: "projetos/bruna-soutello/"
    },
    {
      slug: "isotech-isolamentos",
      titulo: "Isotech Isolamentos",
      subtitulo: "Estratégia de crescimento empresarial, planejamento de palestras e tráfego pago.",
      apresentacao: "Atuação estratégica voltada à comunicação da empresa, ao planejamento de palestras e à gestão de tráfego pago, com foco no desenvolvimento de oportunidades de negócio.",
      categoria: "B2B & Crescimento Empresarial",
      destaques: [
        "Posicionamento empresarial",
        "Planejamento de palestras",
        "Comunicação comercial",
        "Campanhas e oportunidades"
      ],
      linkReferencia: "https://www.isotechisolamentos.com.br/",
      textoBotao: "Conhecer a empresa",
      notaReferencia: "O endereço acima é uma referência institucional da Isotech Isolamentos. A S.A Performance atua no escopo estratégico de comunicação e tráfego, sem atribuição de autoria sobre o desenvolvimento do website do cliente.",
      caminhoDetalhes: "projetos/isotech-isolamentos/"
    }
  ]
};

// Exportação compatível com ambientes browser globais e módulos ES
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
