const NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const PROGRESSIONS_DATA = [
  { 
    key: '[1, 2, 3, 4, 5, 6, 7]',
    label: 'Harmônico Maior',
    examples: [
      'Uso em improvisação modal (ex: jazz modal/modal interchange)',
      'Referências acadêmicas e composições clássicas : sem música pop específica',
      'Jon Hassell : improvisações modais',
      'Miles Davis : “So What” (escala dorica)',
      'Herbie Hancock : “Maiden Voyage” (modal)',
      'John Coltrane : “Impressions” (modal)',
      'Keith Jarrett : performances solo ao vivo',
      'Pat Metheny : composições modais',
      'Brad Mehldau : peças modais no piano jazz',
      'Chick Corea : “La Fiesta” (uso modal)'
    ]
  },
  { 
    key: '[1, 2, 3, 4, 5vii, 6, 7]',
    label: 'Harmônico Maior com 7',
    examples: [
      'Improvisação harmônica (jazz/fusion com sétimo grau alterado)',
      'Wayne Shorter : uso de VIIMaj7 ♯5 em “Footprints”',
      'Modern Jazz Quartet : trocas modais',
      'John Scofield : composições com graus alterados',
      'Miles Davis : passagem em “Freddie Freeloader” (versão ao vivo)',
      'Herbie Hancock : “Butterfly” (graus alterados)',
      'Pat Metheny : “Phase Dance” (variações modais)',
      'Keith Jarrett : improvisos com sétimo grau maior',
      'Chick Corea : “Spain” (passagens modais alteradas)',
      'Joe Zawinul : uso modal em Weather Report'
    ]
  },
  { 
    key: '[1, 6vii(-m), 2, 5vii]',
    label: 'Quadradinho',
    examples: [
      'Canta Canta Minha Gente : Martinho da Vila',
      'Malandragem : Cássia Eller',
      'Wave : Tom Jobim',
      'Agua de Beber : Tom Jobim',
      'Corcovado : Tom Jobim',
      'Samba de Uma Nota Só : Jobim',
      'Tarde em Itapoã : Toquinho',
      'Inútil Paisagem : Jobim/De Moraes',
      'Choro das Aguas Claras : Chiquinha Gonzaga',
      'Asa Branca : Luiz Gonzaga (interpretação jazzística)'
    ]
  },
  { 
    key: '[1, 6, 2, 5]',
    label: 'Samba 1',
    examples: [
      'Aquarela do Brasil : Ary Barroso (interpretação jazz/samba)',
      'Menino das Laranjeiras : Toquinho',
      'Só Danço Samba : Jobim (turnaround suave)',
      'Águas Claras : Choro/jazz',
      'Feitio de Oração : Noel Rosa (interpretação jazz)',
      'One Note Samba : Jobim (variações harmonizadas)',
      'Brasileirinho : Waldir Azevedo (versão jazz)',
      'Chega de Saudade : Jobim (versão instrumental)',
      'Rosa Morena : Jackson do Pandeiro (versão revisitada)',
      'Fotografia : Tom Jobim (interpretação instrumental)'
    ]
  },
  { 
    key: '[1, 5, 6vii, 4]',
    label: 'Samba 2',
    examples: [
      'Let It Be : The Beatles',
      'With or Without You : U2',
      'Someone Like You : Adele',
      'Im Yours : Jason Mraz',
      'No Woman, No Cry : Bob Marley',
      'Take Me Home, Country Roads : John Denver',
      'Can You Feel the Love Tonight : Elton John',
      'Hey, Soul Sister : Train',
      'She Will Be Loved : Maroon 5',
      'Perfect : P!nk'
    ]
  },
  { 
    key: '[2vii, 5vii, 1vii]',
    label: 'Samba - Cadência 2-5-1 (Clássica)',
    examples: [
      'Garota de Ipanema : Tom Jobim',
      'Desafinado : Tom Jobim',
      'Só Danço Samba : Jobim',
      'The Girl from Ipanema : Astrud Gilberto',
      'Fly Me to the Moon : Frank Sinatra',
      'Autumn Leaves : jazz standard',
      'All The Things You Are : standard jazz',
      'My Favorite Things : John Coltrane',
      'I Need You : The Beatles (ponte)',
      'Blue Bossa : Kenny Dorham'
    ]
  },
  { 
    key: '[1, 6vii, 2vii, 5vii]',
    label: 'Samba - Cadência Cíclica (Turnaround)',
    examples: [
      'Wave : Jobim (turnaround completo)',
      'Agua de Beber : Jobim (turnaround)',
      'Chovendo na Roseira : Jobim',
      'Dindi : Jobim',
      'Modinha : Jobim',
      'Luiza : Tom Jobim',
      'Fotografia : Jobim (versão completa)',
      'Corcovado : versão instrumental com turnaround',
      'Menino das Laranjeiras : Toquinho (com ciclo completo)',
      'Inútil Paisagem : Jobim (turnaround jazz)'
    ]
  },
  { 
    key: '[1, 6, 4, 5vii]',
    label: 'Samba - Cadência Romântica (Pagode 90)',
    examples: [
      'Telegrama : Zeca Pagodinho',
      'Exagerado : Cazuza (interpretação pagode)',
      'Me Leva : Exaltasamba',
      'Faz Parte : Negritude Jr.',
      'Mineirinho : Fundo de Quintal',
      'Faltando um Pedaço : O Rappa (cover)',
      'Linguiça com Rapadura : Zeca Pagodinho',
      'Quando Te Vi : Exaltasamba',
      'O Que Sobrou do Céu : Raça Negra',
      'Telegrama : Exaltasamba'
    ]
  },
  { 
    key: '[1, 3vii(-m), 6, 2vii(-m), 5vii, 1]',
    label: 'Samba - Encadeamento Tradicional (Choro)',
    examples: [
      'Tico-Tico no Fubá : Zequinha de Abreu',
      'Brasileirinho : Waldir Azevedo',
      'Carinhoso : Pixinguinha',
      'Noites Cariocas : Jacob do Bandolim',
      'Rosa : Pixinguinha (arranjos jazzísticos)',
      'Choro Negro : Pixinguinha',
      'Vou Vivendo : Pixinguinha',
      'Pedacinhos do Céu : Jacob do Bandolim',
      'Menino das Laranjeiras : Toquinho (versão choro)',
      'Flor Amorosa : Joaquim Antônio da Silva Callado'
    ]
  },
  { 
    key: '[6vii(-m), 2vii , 5vii, 1]',
    label: 'Samba - Cadência com Dominante Secundário',
    examples: [
      'Wave : Jobim (variações)',
      'Aquarela do Brasil : interpretação jazz',
      'One Note Samba : variação com A7:D7:G7:C',
      'Corcovado : versão com dominante secundário',
      'Dindi : jazz version',
      'Chega de Saudade : versão com dominantes',
      'Retrato em Branco e Preto : Jobim/Mendonça',
      'Inútil Paisagem : versão jazz',
      'Tarde em Itapoã : versão harmônica rica',
      'Chovendo na Roseira : versão jazz'
    ]
  },
  { 
    key: '[1, 2vii(-m), 4, 4(m), 1]',
    label: 'Samba - Cadência com IV menor (Modal)',
    examples: [
      'Sambinha de Uma Nota Só : variações modais',
      'Chega de Saudade : modulações de IV para iv',
      'Falando de Amor : João Bosco (modal)',
      'Saudosa Maloca : Adoniran Barbosa (modal)',
      'O Bêbado e a Equilibrista : Aldir Blanc / João Bosco',
      'Primeira Estrela : João Donato (modal)',
      'Águas de Março : Jobim (versão modal)',
      'Samba do Avião : Jobim (modalização)',
      'Segue o Som : Paulinho da Viola (modal)',
      'Dois para lá, Dois para cá : Mattos Nascimento (modal)'
    ]
  },
  { 
    key: '[1, 7(-°)(b), 4, 5]',
    label: 'Samba - Cadência Modal (Groove)',
    examples: [
      'Essa Tal Liberdade : Parametrô (groove/modal)',
      'O Show Tem Que Continuar : Fundo de Quintal (groove)',
      'É Hoje : Jorge Aragão (groove)',
      'O Barquinho : Jobim (versão groove)',
      'Casa Pré-fabricada : Casuarinas (groove)',
      'É de manhã : Edu Lobo (groove modulado)',
      'Tristeza Pé No Chão : Riachão (groove)',
      'Rei do Gado : Sergio Reis (versão pagode groove)',
      'Samba da Bênção : Baden Powell (groove modal)',
      'Sinal Fechado : Zeca Pagodinho (interpretação groove)'
    ]
  },
  { 
    key: '[1, 1vii, 4, 4(m), 1]',
    label: 'Samba - Cadência Clássica Brasileira (Pagode)',
    examples: [
      'O Show Tem Que Continuar : Fundo de Quintal',
      'A Amizade : Fundo de Quintal',
      'Toque de Amor : Grupo Raça',
      'Faz Gostoso Meu Pagode : Katinguelê',
      'Telegrama : Grupo Raça Negra',
      'Desliga e Vem : Negritude Jr.',
      'Fingimento : Exaltasamba',
      'Valeu : Soweto',
      'Livre Pra Voar : Soweto',
      'Cheia de Manias : Raça Negra'
    ]
  },
  { 
    key: '[1, 6, 2vii, 5vii, 1v]',
    label: 'Samba - Cadência Circular com VI menor',
    examples: [
      'Luiza : Tom Jobim (variação circular)',
      'Retrato em Branco e Preto : Jobim',
      'Chovendo na Roseira : Jobim (circular)',
      'Corcovado : versão estendida',
      'Inútil Paisagem : versão circular',
      'Garota de Ipanema : solo estendido',
      'Menino das Laranjeiras : versão completa',
      'Dindi : versão com ciclo completo',
      'Wave : versão com extensão circular',
      'Tarde em Itapoã : ciclo completo'
    ]
  },
  { 
    key: '[1, 5, 4]',
    label: 'Study',
    examples: [
      'Twist and Shout : The Beatles',
      'Louie Louie : The Kingsmen',
      'Blitzkrieg Bop : Ramones',
      'Twistin the Night Away : Sam Cooke',
      'Surfin Safari : The Beach Boys',
      'Hound Dog : Elvis Presley',
      'La Bamba : Ritchie Valens',
      'Great Balls of Fire : Jerry Lee Lewis',
      'Peggy Sue : Buddy Holly',
      'Be-Bop-A-Lula : Gene Vincent'
    ]
  },
  { 
    key: '[1, 1vii, 4, 4(m)]',
    label: 'Pagode 4',
    examples: [
      'Telegrama : Exaltasamba',
      'Sombrinha Para Dois : Molejo',
      'Valeu Verão : Grupo Soweto',
      'Pra minha alegria : Raça Negra',
      'Faz Parte : Negritude Jr.',
      'Fingimento : Exaltasamba',
      'Toque de Amor : Grupo Raça',
      'Livre Pra Voar : Soweto',
      'A Gente se Dá Bem : Raça Negra',
      'Tá Escrito : Revelação'
    ]
  },
  { 
    key: '[1, 5, 6, 4]',
    label: 'MPB',
    examples: [
      'Let It Be : The Beatles',
      'No Woman, No Cry : Bob Marley',
      'Im Yours : Jason Mraz',
      'With or Without You : U2',
      'Someone Like You : Adele',
      'She Will Be Loved : Maroon 5',
      'Perfect : P!nk',
      'Where Is the Love : Black Eyed Peas',
      'Always : Bon Jovi',
      'When I Come Around : Green Day'
    ]
  },
  { 
    key: '[1, 4, 6, 5]',
    label: 'MPB',
    examples: [
      'Que Sorte a Nossa : Matheus & Kauan',
      'Unwell : Matchbox Twenty',
      'Love the Way You Lie : Rihanna & Eminem',
      'Viva la Vida : Coldplay',
      'Stitches : Shawn Mendes',
      'Breakeven : The Script',
      'Memories : Maroon 5',
      'With You : Chris Brown',
      'Photograph : Ed Sheeran',
      'Half of My Heart : John Mayer'
    ]
  },
  { 
    key: '[6, 4, 1, 5]',
    label: 'Emo',
    examples: [
      'Complicated : Avril Lavigne',
      'À Sua Maneira : Capital Inicial',
      'Basket Case : Green Day',
      'Welcome to My Life : Simple Plan',
      'All the Small Things : Blink-182',
      'Misery Business : Paramore',
      'The Middle : Jimmy Eat World',
      'Im Just a Kid : Simple Plan',
      'Sugar, Were Goin Down : Fall Out Boy',
      'Ohio Is for Lovers : Hawthorne Heights'
    ]
  },
  { 
    key: '[1, 4, 5]',
    label: 'Sertanejo',
    examples: [
      'Fico Assim Sem Você : Adriana Calcanhotto',
      'Evidências : Chitãozinho & Xororó',
      'Te Amo Demais : Banda Calypso',
      'No Rancho Fundo : Chitãozinho & Xororó',
      'Romaria : Renato Teixeira',
      'Moreninha Linda : Pescuma e Adair',
      'Saudade da Minha Terra : Sérgio Reis',
      'Tocando em Frente : Almir Sater',
      'Fui Fiel : Milionário & José Rico',
      'Vida Vazia : Zezé Di Camargo & Luciano'
    ]
  },
  { 
    key: '[1, 6, 4, 5]',
    label: 'Sertanejo',
    examples: [
      'É o Amor : Zezé Di Camargo & Luciano',
      'Aí Já Era : Jorge & Mateus',
      'Caso Indefinido : Marília Mendonça',
      'Você Não Vale Nada : Banda Calypso',
      'Medida Certa : Bruno & Marrone',
      'Espelho : Chitãozinho & Xororó',
      'Seu Polícia : Zé Neto & Cristiano (cover)',
      'A Rosa e o Beija-flor : Jorge & Mateus',
      'Ficha Limpa : Gusttavo Lima',
      'Tá Vendo Aquela Lua : Sandy & Junior'
    ]
  }
];



const PROGRESSIONS = Object.fromEntries(
  PROGRESSIONS_DATA.map(({ key }) => [key, key.slice(1, -1).split(', ')])
);

const PROGRESSION_OPTIONS = PROGRESSIONS_DATA.map(({ key, label, examples }, index) => ({
  value: key,
  label: `${index + 1}. ${label}: ${key}`,
  examples : examples,
}));

export { NOTES, PROGRESSIONS, PROGRESSION_OPTIONS };
