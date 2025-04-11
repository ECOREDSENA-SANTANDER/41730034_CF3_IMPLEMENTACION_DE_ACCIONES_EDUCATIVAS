export default {
  global: {
    Name: 'Integración EES-AIEPI según modelo de gestión local',
    Description:
      'La promoción de la salud busca capacitar a las personas para ejercer control sobre su salud y mejorarla, promoviendo el bienestar físico, mental y social. En este componente formativo se abordarán la promoción y educación en salud como acciones clave para incursionar en la integración de la estrategia de entornos saludables (EES) y la atención integrada a las enfermedades prevalentes de la infancia (AIEPI).',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Desarrollo humano sostenible y calidad de vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Los derechos humanos y su aporte al desarrollo humano',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Promoción de la salud, determinantes sociales y su relación con el desarrollo humano',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Políticas que favorecen los entornos saludables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Directrices nacionales que favorecen el desarrollo de las estrategias',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Educación y promoción de la salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Marco normativo de la promoción de la salud en colombia',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Modelo de promoción de la salud',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Estrategia de atención integrada a las enfermedades prevalentes de la infancia (AIEPI)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Integración de la estrategia de entornos saludables (EES) y la estrategia AIEPI',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Lineamientos nacionales para la aplicación y el desarrollo de las EES. Ministerio de salud y protección social de Colombia.',
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Lineamientos nacionales para la aplicación y el desarrollo de las EES. Ministerio de salud y protección social de Colombia.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-nacionales-para-la-aplicacion-y-el-desarrollo-de-las-ees.pdf',
    },
    {
      tema: '18 prácticas claves en AIEPI.',
      referencia:
        'Nacer SSR UDEA. (2014, 31 marzo). 18 prácticas claves en AIEPI [Vídeo].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qIhY7mFNvpw',
    },
    {
      tema:
        'Determinantes sociodemográficos de aplicación de prácticas clave AIEPI para prevenir enfermedades.',
      referencia:
        'Castillo, I. Y., González, Y. M., & Gutiérrez, N. (2016). Determinantes sociodemográficos de aplicación de prácticas clave AIEPI para prevenir enfermedades. Área rural, Cartagena, Colombia.',
      tipo: 'PDF',
      link: 'Determinantes Sociodemográficos.pdf',
    },
    {
      tema: 'Niñez protegida con estrategia AIEPI.',
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Niñez protegida con estrategia AIEPI. Ministerio de Salud y Protección Social de Colombia.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=k0-hkZI8oyE',
    },
  ],
  glosario: [
    {
      termino: 'Salud',
      significado: 'bienestar físico, mental y social.',
    },
    {
      termino: 'Promoción',
      significado: 'fomentar capacidades para cuidar salud.',
    },
    {
      termino: 'Prevención',
      significado: 'evitar aparición de enfermedades.',
    },
    {
      termino: 'Educación',
      significado: 'enseñar prácticas saludables.',
    },
    {
      termino: 'Entorno',
      significado: 'espacio donde vivimos y convivimos.',
    },
    {
      termino: 'Cuidado',
      significado: 'atención y protección de la salud.',
    },
    {
      termino: 'Bienestar',
      significado: 'estado de equilibrio general.',
    },
    {
      termino: 'Participación',
      significado: 'involucrarse en acciones de salud.',
    },
    {
      termino: 'Familia',
      significado: 'núcleo básico de apoyo social.',
    },
    {
      termino: 'Niñez',
      significado: 'etapa temprana de la vida.',
    },
    {
      termino: 'Hábitos',
      significado: 'comportamientos adquiridos diariamente.',
    },
    {
      termino: 'AIEPI',
      significado: 'atención integral a la infancia.',
    },
    {
      termino: 'EES',
      significado: 'crear espacios físicos y sociales saludables.',
    },
    {
      termino: 'Riesgo',
      significado: 'probabilidad de daño o enfermedad.',
    },
    {
      termino: 'Protección',
      significado: 'acciones para evitar problemas de salud.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de la protección social, ministerio de educación nacional & ministerio de ambiente, vivienda y desarrollo territorial. (2006). Lineamientos nacionales para la aplicación y el desarrollo de las estrategias de entornos saludables: escuela saludable y vivienda saludable. Bogotá, Colombia. ISBN 978-958-97582-5-0.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-nacionales-para-la-aplicacion-y-el-desarrollo-de-las-ees.pdf',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). Artículo 49 – Atención en salud y saneamiento ambiental. Constitución Política de Colombia. Recuperado de',
      link:
        'https://www.constitucioncolombia.com/titulo-2/capitulo-2/articulo-49',
    },
    {
      referencia:
        'Giraldo, A., Toro, M., Macías, A., Valencia, C., & Palacio, S. (2010). La promoción de la salud como estrategia para el fomento de estilos de vida saludables. Hacia la promoción de la salud, 15(1), 128-143. Recuperado de',
      link: 'http://www.scielo.org.co/pdf/hpsal/v15n1/v15n1a09.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Experta temática',
          centro:
            'Centro de gestión de mercados, logística y tecnologías de la información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Paola Gelvez Monsalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Terán Carvajal',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
