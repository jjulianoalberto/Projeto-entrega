const movies = [
  {
    img: 'https://img.youtube.com/vi/aJ-HZuLcKeA/sddefault.jpg',
    title: 'Growcast #00 - Conheça a Growdev',
    link: 'https://www.youtube.com/embed/aJ-HZuLcKeA?si=8mYIpe6U_iZJoHej',
    category: 'growcast'
  },
  {
    img: 'https://img.youtube.com/vi/7OWT3lfHYvE/sddefault.jpg',
    title: 'Growcast #01 - As profissões do futuro',
    link: 'https://www.youtube.com/embed/7OWT3lfHYvE?si=Bqf9mmqiDDNcT8Q3',
    category: 'growcast'
  },
  {
    img: 'https://img.youtube.com/vi/ci1eQGPK89o/sddefault.jpg',
    title: 'Growcast #02 - Como seguir a carreira internacional?',
    link: 'https://www.youtube.com/embed/ci1eQGPK89o?si=YsRp3BcZWy7-qj8u',
    category: 'growcast'
  },
  {
    img: 'https://img.youtube.com/vi/WM7pGG7OicQ/sddefault.jpg',
    title: 'Growcast #03 - Superando os desafios da carreira de Dev!',
    link: 'https://www.youtube.com/embed/WM7pGG7OicQ?si=Mkcuxh_bbHD-hzRw',
    category: 'growcast'
  }
  ,
  {
    img: 'https://img.youtube.com/vi/2c8VOBZ160Y/sddefault.jpg',
    title: 'Growcast #04 - Agile Master: tudo sobre a profissão!',
    link: 'https://www.youtube.com/embed/2c8VOBZ160Y?si=Lvriy2Ii63EKXpA2',
    category: 'growcast'
  },
  {
    img: 'https://img.youtube.com/vi/mxnEm03cYPc/sddefault.jpg',
    title: 'Growcast #05 - Como iniciar na carreira em Desenvolvimento de Softwares?',
    link: 'https://www.youtube.com/embed/mxnEm03cYPc?si=PKPg2r28VGgZxwu3',
    category: 'growcast'
  },
  {
    img: 'https://img.youtube.com/vim7DyR07KrOE/sddefault.jpg',
    title: 'Growcast #06 - Mulheres e inclusão na tecnologia',
    link: 'https://www.youtube.com/embed/m7DyR07KrOE?si=T6YHPeS6pz_t1Lzf',
    category: 'growcast'
  },
  {
    img: 'https://img.youtube.com/vi/vW8G9KPwRL0/sddefault.jpg',
    title: 'Growcast #07 - Desenvolvendo profissionais na área de TI',
    link: 'https://www.youtube.com/embed/vW8G9KPwRL0?si=lIStH8KLYFTLQuwz',
    category: 'growcast'
  },
  {
    img: 'https://img.youtube.com/vi/_Ut2KqAqPyk/sddefault.jpg',
    title: 'Growcast #08 - A solução que está transformando o mercado de TI no Brasil',
    link: 'https://www.youtube.com/embed/_Ut2KqAqPyk?si=2R1zSI54zn_vNLeV',
    category: 'growcast'
  },
  {
    img: 'https://img.youtube.com/vi/dfDgs0Ive2Q/sddefault.jpg',
    title: 'Growcast #09 - Acompanhe com quem realmente entende, tudo sobre o mercado de trabalho no mundo da TI',
    link: 'https://www.youtube.com/embed/dfDgs0Ive2Q?si=yfj88hVp2-sFuw_V',
    category: 'growcast'
  },
  {
    img: 'https://img.youtube.com/vi/WKbLXuP9S-c/sddefault.jpg',
    title: 'Webinar - Recriando a interface do Linkedin com Flutter',
    link: 'https://www.youtube.com/embed/WKbLXuP9S-c?si=jwEqiPCfthm1hBU6',
    category: 'webinar'
  },
  {
    img: 'https://img.youtube.com/vi/dJ6y1zMjVXU/sddefault.jpg',
    title: 'Webinar - Recriando a interface do Instagram com Flutter',
    link: 'https://www.youtube.com/embed/dJ6y1zMjVXU?si=8oEFk6Kl767PG3ee',
    category: 'webinar'
  },
  {
    img: 'https://img.youtube.com/vi/8rdJsqUjsGg/sddefault.jpg',
    title: 'Webinar - Recriando a interface do iFood com Flutter',
    link: 'https://www.youtube.com/embed/8rdJsqUjsGg?si=vuhvNosWK6HLs4w-',
    category: 'webinar'
  }
  ,
  {
    img: 'https://img.youtube.com/vi/C4p_7qBsECw/sddefault.jpg',
    title: 'Webinar - Recriando a interface do PicPay com Flutter',
    link: 'https://www.youtube.com/embed/C4p_7qBsECw?si=bXdiQFcLFUQfQnc3',
    category: 'webinar'
  },
  {
    img: 'https://img.youtube.com/vi/L1pKoMC6hWk/sddefault.jpg',
    title: 'Webinar - Recriando o layout do WhatsApp com Flutter',
    link: 'https://www.youtube.com/embed/L1pKoMC6hWk?si=Th5BZFUZzyzoUMRC',
    category: 'webinar'
  },
  {
    img: 'https://img.youtube.com/vi/FiZMowbaiJA/sddefault.jpg',
    title: 'Live #5 Jornada UX/UI: O UX/UI Design é para todos?',
    link: 'https://www.youtube.com/embed/FiZMowbaiJA?si=-AJ7dLyormWc-3tM',
    category: 'jornada'
  },
  {
    img: 'https://img.youtube.com/vi/cwqDu0ZzbYE/sddefault.jpg',
    title: 'Live #4 Jornada UX/UI: Como migrar para o UX/UI Design: a trajetória de uma designer - Growdev',
    link: 'https://www.youtube.com/embed/cwqDu0ZzbYE?si=29Wl98AevAVFbM7G',
    category: 'jornada'
  },
  {
    img: 'https://img.youtube.com/vi/ZMZjQ9aRuIY/sddefault.jpg',
    title: 'Live #3 Jornada UX/UI: As oportunidades de estudar um programa de formação pagando após formado',
    link: 'https://www.youtube.com/embed/ZMZjQ9aRuIY?si=hFvKr_wqrXrQuXG4',
    category: 'jornada'
  }
  ,
  {
    img: 'https://img.youtube.com/vi/8sd3wuKTZMA/sddefault.jpg',
    title: 'Live #2 Jornada UX/UI: O profissional de UX/UI Design no mercado digital - Growdev',
    link: 'https://www.youtube.com/embed/8sd3wuKTZMA?si=npUQe7an94aZcIGC',
    category: 'jornada'
  },
  {
    img: 'https://img.youtube.com/vi/-26aqPtgoEY/sddefault.jpg',
    title: 'Live #1 Jornada UX/UI: O papel do UX/UI Designer no desenvolvimento de um produto digital - Growdev',
    link: 'https://www.youtube.com/embed/-26aqPtgoEY?si=Q7E-bPQhrKMH3MkQ',
    category: 'jornada'
  },
  {
    img: 'https://img.youtube.com/vi/QsuhYgsSYQo/sddefault.jpg',
    title: 'Célula de talentos - Uma solução Growdev',
    link: 'https://www.youtube.com/embed/QsuhYgsSYQo?si=0y0-NpbHX7mWJ_Nf',
    category: 'diversos'
  },
  {
    img: 'https://img.youtube.com/vi/ouDn8z3PSqs/sddefault.jpg',
    title: 'Como é o dia a dia de um dev? Live Growdev com Marcelo Eltz',
    link: 'https://www.youtube.com/embed/ouDn8z3PSqs?si=Z_yq5iJSMLaeWlQG',
    category: 'diversos'
  },
  {
    img: 'https://img.youtube.com/vi/cQDQNX6NXYo/sddefault.jpg',
    title: 'Onde trabalhar com qualidade de software? Conheça a Testing Company, empresa parceira da Growdev',
    link: 'https://www.youtube.com/embed/cQDQNX6NXYo?si=HfivBYE9HWY03qwr',
    category: 'diversos'
  }
  ,
  {
    img: 'https://img.youtube.com/vi/nKGbolkirBM/sddefault.jpg',
    title: 'WEBINAR ANALISTA DE DADOS - com Paulo Marcon da Arezzo&Co',
    link: 'https://www.youtube.com/embed/nKGbolkirBM?si=la4cQMuNYAxKnpKg',
    category: 'diversos'
  },
  {
    img: 'https://img.youtube.com/vi/6sZPsqNjeek/sddefault.jpg',
    title: 'Tecnologia trazendo soluções para a Arezzo & CO | Ricardo Pinho',
    link: 'https://www.youtube.com/embed/6sZPsqNjeek?si=UD44GFuzzdEw1Y3V',
    category: 'diversos'
  }
]

