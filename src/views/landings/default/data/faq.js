// @project
import branding from '@/branding.json';

export const faq = {
  heading: 'Perguntas Frequentes',
  caption: `Respostas sobre o ${branding.brandName}.`,
  defaultExpanded: 'Fees & Charges',
  faqList: [
    {
      question: `Como a IA sabe montar um plano com o meu estilo?`,
      answer: `Você configura suas preferências uma única vez: estilo de comunicação, tipos de dieta, protocolos de treino, suplementos e mais. A IA segue essas diretrizes para gerar planos sob medida, com a sua assinatura profissional.`,
      category: 'Gerais'
    },
    {
      question: `Preciso entender de tecnologia para usar a plataforma?`,
      answer: `Não. A AIFit.pro foi feita para coaches e profissionais da saúde. A interface é simples, em português e orientada por passos claros. Você foca na estratégia e deixa a tecnologia cuidar da execução.`,
      category: 'Gerais'
    },
    {
      question: `A plataforma é indicada apenas para profissionais da saúde ou também para empresas?`,
      answer: {
        content: `A AIFit.pro é ideal para nutricionistas e profissionais de educação física, mas também pode ser utilizada por empresas que oferecem saúde e bem-estar como benefício corporativo — desde que contem com profissionais credenciados responsáveis pelas prescrições. A plataforma se adapta tanto a atendimentos individuais quanto a programas em larga escala com personalização via IA.`,
        type: 'list',
        data: [
          
        ]
      },
      category: 'Gerais'
    },
    {
      question: `A plataforma serve para qualquer tipo de cliente?`,
      answer:
        'Sim. Você pode atender desde iniciantes até atletas avançados. Os protocolos são gerados com base no perfil individual de cada cliente e nas suas preferências como profissional.',
      category: 'Gerais'
    },
    {
      question: 'Preciso seguir um modelo fixo de dieta ou treino?',
      answer: 'De forma alguma. A AIFit.pro permite que você crie seus próprios protocolos, defina divisões de treino, estratégias nutricionais, suplementos e orientações específicas. A IA respeita essas diretrizes e aplica automaticamente nos planos dos seus clientes — ou seja, o modelo é seu, a escala é da IA.',
      category: 'Gerais'
    },
    {
      question: `Existe um plano gratuito para começar?`,
      answer: {
        content: 'Sim. Oferecemos um plano gratuito com limite de atendimentos e funcionalidades reduzidas, ideal para quem está testando a plataforma ou atendendo poucos clientes.',
        type: 'list',
        data: [
         ]
      },
      category: 'Preços e Licenças'
    },
    {
      question: ` Como funcionam os planos pagos?`,
      answer: {
        content:
          'Os planos são escaláveis conforme seu número de clientes e uso da IA. Você paga de acordo com o volume de atendimento, e pode ampliar ou reduzir a qualquer momento.',
        type: 'list',
        data: [
          
        ]
      },
      category: 'Preços e Licenças'
    },

    {
      question: 'Posso cancelar a qualquer momento?',
      answer:
        'Sim. Não há fidelidade. Você pode cancelar, migrar ou pausar seu plano a qualquer momento diretamente pelo painel da plataforma.',
      category: 'Preços e Licenças'
    },
    {
      question: 'Posso montar planos em segundos?',
      answer: {
        content:
          'Sim. Depois de configurar suas preferências, você pode gerar dietas e treinos completos com um clique. Tudo adaptado ao perfil do cliente, pronto para revisão ou envio.',
        type: 'list',
        data: []
      },
      category: 'Funcionalidades & Atrações'
    },
    {
      question: 'A plataforma envia os planos automaticamente pelo WhatsApp?',
      answer: {
        content:
          'Sim! O chatbot integrado envia os planos diretamente ao cliente via WhatsApp, garantindo praticidade e profissionalismo sem que você precise fazer isso manualmente.',
        type: 'list',
        data: []
      },
      category: 'Funcionalidades & Atrações'
    }
  ],
  getInTouch: {
    link: { children: 'Adquire Agora!', href: branding.company.socialLink.support, target: '_blank', rel: 'noopener noreferrer' }
  },
  categories: ['Gerais', 'Preços e Licenças', 'Funcionalidades & Atrações'],
  activeCategory: 'Gerais'
};
