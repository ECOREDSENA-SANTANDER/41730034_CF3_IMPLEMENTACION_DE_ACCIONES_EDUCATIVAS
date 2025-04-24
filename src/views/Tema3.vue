<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Educación y promoción de la salud  
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/1.svg', alt='')
        .col-sm-12.col-lg-11
          p.mb-0 De acuerdo con la organización panamericana de la salud (OPS) y la organización mundial de la salud (OMS), la promoción de la salud es un proceso esencial que permite a las personas, familias y comunidades fortalecer su capacidad para mejorar su bienestar y calidad de vida; para lograrlo, se requiere no solo el acceso a servicios de salud, sino también la creación de entornos saludables y el desarrollo de habilidades personales y colectivas. 
      p.mb-4(data-aos="fade-left") La promoción de la salud se basa en tres mecanismos intrínsecos o internos de las personas, que permiten generar comportamientos saludables y protegerse frente a las enfermedades, los cuales se detallan a continuación: 
      TabsA.color-acento-botones.mb-5(data-aos="fade-left")
        .tarjeta.bg-color-9.p-4(titulo="Autocuidado")
          h5 Autocuidado
          p El autocuidado se refiere a las decisiones, prácticas y acciones que cada persona realiza de manera consciente para mantener y mejorar su salud. Implica la adopción de hábitos saludables como: 
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-8
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Higiene personal (lavado de manos, cuidado dental, entre otros).  
                li.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Alimentación balanceada.  
                li.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Actividad física regular.  
                li.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Manejo adecuado del estrés y las emociones.  
                li.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Asistencia oportuna a servicios de salud para control y prevención.  
              
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/2.png', alt='')
          p.mb-0(data-aos="fade-left") El autocuidado empodera a las personas para actuar responsablemente sobre su bienestar, reconocer factores de riesgo y tomar medidas preventivas, también contribuye a reducir la dependencia exclusiva de los servicios médicos, fomentando la corresponsabilidad en el cuidado de la salud. 

        .tarjeta.bg-color-9.p-4(titulo="Ayuda mutua")
          h5 Ayuda mutua
          p La ayuda mutua se refiere a las acciones solidarias que realizan las personas para apoyarse entre sí frente a diversas situaciones de salud y bienestar, este mecanismo fortalece los lazos sociales y fomenta el sentido de comunidad, permitiendo:
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-8
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Compartir conocimientos y experiencias sobre prácticas saludables.
                li.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Brindar apoyo emocional y social en momentos difíciles.
                li.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Colaborar en el cuidado de personas vulnerables (niños, adultos mayores, personas con discapacidad).
                li.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Organizarse para responder colectivamente ante emergencias, desastres o problemáticas comunes (enfermedades, violencia, desnutrición).
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/3.png', alt='Personas ayudándose mutuamente')
          p.mb-0 La ayuda mutua es clave para construir redes comunitarias de apoyo, que fortalecen la resiliencia de las familias y las comunidades frente a los problemas que afectan su salud y calidad de vida.

        .tarjeta.bg-color-9.p-4(titulo="Entornos saludables")
          h5 Entornos saludables o entornos sanos
          p Los entornos saludables son aquellos espacios físicos, sociales y culturales que favorecen el bienestar y el desarrollo humano integral. Se trata de crear condiciones que promuevan estilos de vida saludables, como:
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-8
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Escuelas saludables, que enseñen hábitos de higiene, alimentación adecuada, convivencia pacífica y desarrollo de habilidades sociales.
                li.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Espacios públicos seguros, con áreas verdes, recreativas y deportivas.
                li.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Viviendas adecuadas, con acceso a agua potable, saneamiento básico y condiciones higiénicas.
                li.d-flex
                  i.fas.fa-check-circle.bg-color-3
                  p.mb-0 Lugares de trabajo saludables, que promuevan el bienestar físico y mental de las personas.
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/4.png', alt='Personas en un entorno saludable')
          p.mb-0 Estos entornos permiten que las personas ejerzan plenamente su derecho a la salud, al propiciar un ambiente favorable para la prevención de enfermedades, el desarrollo de capacidades y la convivencia armónica.

      .row.align-items-center.mb-4.titulo-icono.mt-5(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.p-0 Importancia de estos mecanismos para la promoción de la salud 

      p.mb-4(data-aos="fade-left") Los tres mecanismos (autocuidado, ayuda mutua y entornos saludables) son pilares fundamentales para: 
      .row.justify-content-center.mb-0(data-aos="fade-left")
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/5.svg', alt='')
        .col-sm-12.col-lg-8
          ol.lista-ol--cuadro.lista-ol--separador
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 Prevenir enfermedades y promover el bienestar integral. 

            li.d-flex
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 Fomentar una cultura de la salud basada en la corresponsabilidad individual y colectiva.

            li.d-flex
              .lista-ol--cuadro__vineta
                span 3
              p.mb-0 Reducir la carga de enfermedades prevenibles en la comunidad. 

            li.d-flex
              .lista-ol--cuadro__vineta
                span 4
              p.mb-0 Mejorar la calidad de vida desde una perspectiva integral que involucra a las personas, familias, comunidades y al Estado.
          p.mb-0 Además, la promoción de la salud mediante estos mecanismos contribuye al logro de los objetivos de desarrollo sostenible (ODS), especialmente los relacionados con la salud y el bienestar (ODS 3), la educación de calidad (ODS 4), la reducción de las desigualdades (ODS 10), y las ciudades y comunidades sostenibles (ODS 11). 

      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Marco normativo de la promoción de la salud en Colombia 
      p.mb-4(data-aos="fade-left") La constitución política de Colombia de 1991, en su artículo 49, establece por primera vez el derecho fundamental a la salud, definiendo responsabilidades claras para el estado y garantizando el acceso equitativo a los servicios de salud para toda la población. Este artículo señala que: 
      .row.mb-5(data-aos="fade-left")
        .col-sm-6.col-md-12.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.bg-fondo-3.p-4.h-card-2
            .row.justify-content-center.mb-3.d-none.d-lg-block
              .col-4.m-auto
                figure
                  img(src='@/assets/curso/temas/t3/6.svg')
            p.text-center.mb-0 La atención en salud y el saneamiento ambiental son servicios públicos esenciales, que deben ser prestados por el estado. 


        .col-sm-6.col-md-12.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.bg-fondo-3.p-4.h-card-2 
            .row.justify-content-center.mb-3.d-none.d-lg-block
              .col-4.m-auto
                figure
                  img(src='@/assets/curso/temas/t3/7.svg')
            p.text-center.mb-0 Se garantiza a todas las personas el acceso a los servicios de promoción, protección y recuperación de la salud, asegurando la atención integral. 

        .col-sm-6.col-md-12.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.bg-fondo-3.p-4.h-card-2
            .row.justify-content-center.mb-3.d-none.d-lg-block
              .col-4.m-auto
                figure
                  img(src='@/assets/curso/temas/t3/8.svg')
            p.text-center.mb-0 Corresponde al Estado organizar, dirigir y reglamentar la prestación de los servicios de salud y de saneamiento ambiental, bajo los principios de eficiencia, universalidad y solidaridad. 

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/9.png', alt='')
        .col-sm-12.col-lg-6
          .row.justify-content-center.mb-0.flex-column.h-100
            .col-sm-12.col-lg-2.d-none.d-lg-block.m-0.p-0.mb-2
              img.w-75(src='@/assets/curso/temas/t3/10.svg', alt='')
            .col-sm-12.col-lg-12
              p.mb-3 La organización de los servicios de salud debe hacerse de manera descentralizada, con un enfoque territorial, por niveles de atención y con la participación activa de la comunidad en la gestión y toma de decisiones.  
              p.mb-0 Este marco constitucional reconoce que la salud es un derecho fundamental relacionado con otros derechos como la educación, el ambiente sano, la vivienda digna y el acceso al agua potable, que en conjunto garantizan condiciones adecuadas para una vida saludable.  

      p.mb-4(data-aos="fade-left") Además de la constitución, Colombia ha desarrollado un conjunto de leyes, decretos, resoluciones y políticas públicas que fortalecen el derecho a la salud y promueven la creación de entornos saludables. A continuación, se destacan algunos instrumentos normativos relevantes: 
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/11.png')
        .col-sm-12.col-lg-8
          AcordionA(tipo="a" clase-tarjeta="tarjeta  bg-color-2")
            div(titulo='Ley 1751 de 2015 (ley estatutaria de salud)')
              .row.mb-0
                .col-12
                  p.mb-0 Reconoce la salud como un derecho fundamental autónomo, universal e irrenunciable, que debe ser garantizado por el estado en condiciones de calidad, oportunidad y dignidad.

            div(titulo='Ley 1438 de 2011')
              .row.mb-0
                .col-12
                  p.mb-0 Reforma del sistema general de seguridad social en salud, priorizando la atención primaria en salud, la promoción y prevención, y el acceso equitativo a los servicios.

            div(titulo='Política nacional de salud pública (CONPES 140 de 2011)')
              .row.mb-0
                .col-12
                  p.mb-0 Marco estratégico para la acción intersectorial, la promoción de la salud y la prevención de enfermedades, con un enfoque de derechos, equidad y determinantes sociales de la salud.

            div(titulo='Resolución 3280 de 2018')
              .row.mb-0
                .col-12
                  p.mb-0 Adopta la ruta integral de atención en salud (RIAS), que define las acciones, intervenciones y servicios necesarios para atender las necesidades en salud a lo largo del curso de vida.

            div(titulo='Ley 1804 de 2016 (ley de cero a siempre)')
              .row.mb-0
                .col-12
                  p.mb-0 Política pública para el desarrollo integral de la primera infancia, articulando acciones en salud, nutrición, educación, protección y participación.

            div(titulo='Política nacional de participación social en salud (resolución 2063 de 2017)')
              .row.mb-0
                .col-12
                  p.mb-0 Promueve la participación activa y efectiva de las personas y comunidades en la toma de decisiones sobre su salud y bienestar.

            div(titulo='Política nacional ambiental (ley 99 de 1993)')
              .row.mb-0
                .col-12
                  p.mb-0 Relacionada con la promoción de la salud a través del saneamiento básico, acceso al agua potable y control ambiental, fundamentales para prevenir enfermedades y garantizar entornos saludables.

      .bg-full-width.bg-fondo-15.mb-5.pt-5
        .px-4.px-md-5.pb-md-3(data-aos="fade-left")
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-12
              h5.mb-4 Este conjunto de normas y políticas públicas permite: 
              SlyderF.mb-5(columnas="col-lg-4 col-xl-4")
                .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                    .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                        .col-sm-12.col-md-3.col-lg-5
                            img(src='@/assets/curso/temas/t3/12.svg', alt='')
                    p.mb-0.text-center Garantizar el acceso universal y equitativo a servicios de salud y saneamiento. 
                .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                    .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                        .col-sm-12.col-md-3.col-lg-5
                            img(src='@/assets/curso/temas/t3/13.svg', alt='')
                    p.mb-0.text-center Fomentar acciones preventivas y de promoción, más allá de la atención curativa. 

                .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                    .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                        .col-sm-12.col-md-3.col-lg-5
                            img(src='@/assets/curso/temas/t3/14.svg', alt='')
                    p.mb-0.text-center Desarrollar estrategias de educación en salud, como escuela saludable y vivienda saludable, que promueven prácticas saludables desde los espacios cotidianos. 

                .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                    .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                        .col-sm-12.col-md-3.col-lg-5
                            img(src='@/assets/curso/temas/t3/15.svg', alt='')
                    p.mb-0.text-center Impulsar la participación comunitaria como un eje fundamental en la gestión de la salud pública. 

                .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                    .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                        .col-sm-12.col-md-3.col-lg-5
                            img(src='@/assets/curso/temas/t3/16.svg', alt='')
                    p.mb-0.text-center Asegurar intervenciones intersectoriales para abordar los determinantes sociales de la salud (educación, ambiente, vivienda, nutrición).  

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/17.png', alt='')   
        .col-sm-12.col-lg-6
          p.mb-4 Como parte del marco normativo, se reconoce la importancia de implementar acciones educativas dirigidas a: 
          ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0  Promover prácticas de autocuidado, prevención y salud colectiva. 
              li.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0   Empoderar a las comunidades para que participen activamente en la construcción de entornos seguros, saludables e inclusivos.
              li.d-flex.mb-0
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Sensibilizar a la población sobre la importancia de la corresponsabilidad en la promoción de la salud y la prevención de enfermedades. 
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.mb-0 #[b Tabla 1.] Marco normativo para la promoción de la salud en Colombia
      .tabla-a.color-acento-botones.mb-5(data-aos="fade-left")(alt="Tabla que muestra el marco normativo para la promoción de la salud en Colombia, incluyendo leyes, resoluciones, decretos y circulares emitidas entre 1993 y 2008. Establece directrices para el sistema de seguridad social en salud (SGSSS), protocolos de atención, estrategias de salud pública, planes nacionales, enfoques intersectoriales, y regulación de planes territoriales y colectivos de salud.") 
          table
            thead
              tr
                th.w-25 NORMA
                th OBJETO / ALCANCE
            tbody
              tr
                td.fw-bold Ley 100 de 1993
                td 
                  p.mb-4 Crea el sistema general de seguridad social en salud (SGSSS), garantizando el acceso de la población colombiana a la seguridad social en salud mediante dos componentes:
                  ol.lista-ol--cuadro.mb-0
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 1
                      p.mb-0 Aseguramiento de servicios de salud mediante planes de beneficios (POS y POS-S).

                    li.d-flex.mb-0
                      .lista-ol--cuadro__vineta
                        span 2
                      p.mb-0 Descentralización de la gestión de la salud a los entes territoriales a través del plan de atención básica (PAB).

              tr
                td.fw-bold Resolución 0412 de 2000
                td
                  p.mb-0 Establece las normas, guías y protocolos de atención para las entidades promotoras de salud (EPS) y las instituciones prestadoras de servicios de salud (IPS) que manejan el POS, con el fin de garantizar una atención integral.

              tr
                td.fw-bold Circular externa 052 de 2002
                td
                  p.mb-0 Define metas, actividades e indicadores de cumplimiento obligatorio dentro del plan de atención básica (PAB), para asegurar la cobertura y calidad de las intervenciones en salud pública.

              tr
                td.fw-bold Circular 018 de 2004
                td
                  p.mb-0 Establece estrategias prioritarias en salud pública, incluyendo:
                  ul.lista-ul--color.mb-0.mt-2
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Participación social.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Habilidades para la vida.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Estrategias de información, educación y comunicación.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Escuelas saludables.

              tr
                td.fw-bold Ley 1122 de 2007
                td
                  p.mb-0 Introduce ajustes a la ley 100 de 1993 y al SGSSS, estableciendo:
                  ul.lista-ul--color.mb-0.mt-2
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Nueva reglamentación para la salud pública.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Creación del plan nacional de salud pública, con enfoques intersectoriales y de participación ciudadana.

              tr
                td.fw-bold Decreto 3039 de 2007
                td
                  p.mb-0 Adopta el plan nacional de salud pública 2007-2010.
                  p.mb-0 Establece que la formulación de los planes debe articular tres enfoques:
                  ul.lista-ul--color.mb-0.mt-2
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Poblacional.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Determinantes sociales de la salud.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Gestión social del riesgo.

              tr
                td.fw-bold Resolución 425 de 2008
                td
                  p.mb-4 Define la metodología para la elaboración, ejecución, seguimiento y evaluación del plan de salud pública territorial (PSPT).
                  p.mb-0 Regula las acciones de los planes de salud pública de intervenciones colectivas (PIC) a cargo de los entes territoriales.

      p.mb-4(data-aos="fade-left") El conocimiento y aplicación del marco normativo en salud es clave para los profesionales, instituciones y comunidades, ya que: 
      .row.justify-content-center.mb-0(data-aos="fade-left")
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/18.svg', alt='')   
        .col-sm-12.col-lg-8
          ul.lista-ul--color.mb-4
              li.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Garantiza los derechos en salud de la población. 
              li.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Promueve la participación social y comunitaria en la toma de decisiones. 
              li.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Orienta las acciones educativas y preventivas que fortalecen la promoción de la salud y la creación de entornos saludables.  
              li.d-flex
                i.fas.fa-check-circle.bg-color-3
                p.mb-0 Facilita la coordinación entre sectores para intervenir los determinantes sociales de la salud, mejorando así la calidad de vida. 
          p.mb-0 Por lo tanto, este marco no solo regula el sistema de salud, sino que promueve una cultura de corresponsabilidad social, esencial para construir comunidades más saludables, equitativas y sostenibles. 

      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Modelo de promoción de la salud  
      p.mb-4(data-aos="fade-left") Según Giraldo et al. (2010), el modelo de promoción de la salud propuesto por Pender (1996) constituye un enfoque integral que permite entender cómo las personas deciden adoptar comportamientos saludables o de riesgo, a partir de factores individuales y contextuales, este modelo destaca la influencia de las características personales, las experiencias individuales, las creencias en salud y la percepción de los beneficios y barreras que tiene cada persona para actuar en favor de su bienestar. 
      p.mb-4(data-aos="fade-left") Uno de los elementos fundamentales de este modelo es la valoración que hace cada individuo de su conducta, estilo de vida, entorno y experiencias previas, estas percepciones son clave para decidir si asumen o no comportamientos protectores de la salud. Así, las creencias personales, la cultura, el entorno social y las emociones, tienen un peso importante en la adopción de hábitos saludables. 
      p.mb-4(data-aos="fade-left") #[b Componentes del modelo de Pender:] este modelo se organiza en tres grandes dimensiones que interactúan entre sí: 
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-6
          LineaTiempoD.color-acento-botones
            .row(numero="a" titulo="Características y experiencias individuales")
              .col-sm-12.col-lg-12
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Experiencias previas relacionadas con conductas de salud.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Factores personales: aspectos biológicos, psicológicos y socioculturales, como edad, género, cultura, educación, nivel socioeconómico y creencias.

            .row(numero="b" titulo="Cogniciones y afectos relacionados con la conducta específicaz")
              .col-sm-12.col-lg-12
                p.mb-4 Se refiere a cómo las personas piensan y sienten acerca de las acciones que pueden tomar para cuidar su salud, incluyendo:
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Percepción de beneficios de la acción (ventajas que creen obtener al adoptar un comportamiento saludable).
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Percepción de barreras para la acción (dificultades o limitaciones que perciben).
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Percepción de autoeficacia (creencia en su capacidad para realizar la conducta).
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Afectos relacionados a la actividad (emociones positivas o negativas vinculadas con la acción).
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Influencias personales y situacionales, como apoyo social, entorno físico y disponibilidad de recursos.
  
            .row(numero="c" titulo="Resultados conductuales esperados")
              .col-sm-12.col-lg-12
                p.mb-4 Se relacionan con el resultado final de ese proceso de reflexión y valoración, incluyendo: 
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Demandas y preferencias (expectativas personales y de su entorno sobre el comportamiento).  
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Compromiso con un plan de acción (decisión concreta de cambiar o mantener un comportamiento). 
                  li.d-flex
                    i.fas.fa-check-circle.bg-color-3
                    p.mb-0 Conducta promotora de la salud, entendida como la adopción de acciones concretas para proteger y mejorar la salud personal y colectiva.      
 
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/19.png', alt='')   

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-10
          .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 1.]  Modelo de promoción de la salud según Pender
          img(src='@/assets/curso/temas/t3/20.svg', alt='modelo de promoción de la salud según Pender explica cómo las personas adoptan conductas saludables. Se basa en factores individuales (experiencias previas y características personales), percepciones (beneficios, barreras, autoeficacia e influencias externas) y compromiso con la acción, lo que finalmente lleva a una conducta promotora de la salud.')


      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-8
          p.mb-5 Este modelo es de gran utilidad para planear y diseñar intervenciones en promoción de la salud, ya que permite: 
          ol.lista-ol--cuadro.lista-ol--separador
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 Comprender las motivaciones y barreras que tienen las personas para cuidar su salud. 

            li.d-flex
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 Identificar factores personales y culturales que influyen en las decisiones relacionadas con la salud. 

            li.d-flex
              .lista-ol--cuadro__vineta
                span 3
              p.mb-0 Guiar acciones educativas y preventivas que estén ajustadas a las realidades, creencias y necesidades de las personas. 

            li.d-flex.mb-0
              .lista-ol--cuadro__vineta
                span 4
              p.mb-0 Diseñar estrategias que fomenten la autoeficacia y refuercen las redes de apoyo social, comunitario e institucional. 
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/21.svg', alt='')

      .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.p-0 Factores que influyen en la conducta promotora de salud según Pender 

      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/22.svg', alt='')
        .col-sm-12.col-lg-11
          p.mb-0 Según Pender (1996), la conducta promotora de salud es el resultado de múltiples factores que interactúan entre sí, y que determinan la decisión de las personas para adoptar o no comportamientos saludables, estos factores se agrupan en características individuales previas y en cogniciones y afectos relacionados con la salud, que influyen directamente en las acciones que las personas deciden emprender. 
      p.mb-4(data-aos="fade-left") A continuación, se describen los principales factores y variables implicadas en este modelo: 
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
        p.mb-0 #[b Tabla 2.] Factores que influyen en la conducta promotora de salud según Pender 
      .tabla-a.color-acento-botones.mb-5(data-aos="fade-left")(alt="Tabla que describe factores que influyen en la conducta promotora de salud según Pender. Incluye características individuales (experiencias previas y factores personales), creencias en salud (percepción de beneficios, barreras, autoeficacia, afectos, influencias interpersonales y situacionales) y resultado conductual (compromiso hacia la acción saludable).") 
          table
            thead
              tr
                th.w-25 FACTOR
                th VARIABLES ASOCIADAS
            tbody
              tr
                td.fw-bold Características y experiencias individuales
                td 
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Experiencias previas relacionadas con conductas de salud.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Factores personales: aspectos biológicos, psicológicos y socioculturales, como edad, género, cultura, educación, nivel socioeconómico y creencias.

              tr
                td.fw-bold Creencias en salud (cogniciones y afectos)
                td
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Percepción de beneficios de la acción: las personas se motivan cuando anticipan resultados positivos al adoptar conductas saludables.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Percepción de barreras para la acción: obstáculos personales, interpersonales o del entorno que dificultan la acción.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Autoeficacia: confianza en la capacidad personal para organizar y ejecutar las acciones necesarias para cuidar su salud.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Afectos y motivaciones: emociones, deseos, objetivos y propósitos que impulsan a actuar. Las actividades educativas deben ser dinámicas y atractivas para motivar a las personas.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Influencias interpersonales y situacionales: apoyo social, familiar, comunitario, y las condiciones del entorno que favorecen o dificultan la acción. Estas influencias son fuentes importantes de motivación.

              tr
                td.fw-bold Resultado conductual
                td
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Determinado por el compromiso hacia un plan de acción, es decir, la decisión concreta de realizar o mantener un comportamiento saludable.

      p.mb-4(data-aos="fade-left") Este modelo resalta que la adopción de comportamientos saludables no depende solo de la información que se tenga sobre salud, sino también de: 
      .row.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/23.svg' alt='')
            .tarjeta.bg-color-1.br-1
              .p-4.mb-3
                p.mb-0.text-center Las experiencias y creencias personales. 
        .col-sm-12.col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/24.svg' alt='')
            .tarjeta.bg-color-1.br-1
              .p-4.mb-3
                p.mb-0.text-center Las emociones y la autoeficacia, que son claves para sostener la motivación. 
        .col-sm-12.col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/25.svg' alt='')
            .tarjeta.bg-color-1.br-1
              .p-4.mb-3
                p.mb-0.text-center El apoyo social y los entornos favorables, que refuerzan las decisiones saludables. 

      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/26.svg', alt='')
        .col-sm-12.col-lg-11
          p.mb-4 Por ello, las intervenciones en promoción de la salud deben estar diseñadas teniendo en cuenta la diversidad de factores individuales y sociales, y no enfocarse únicamente en dar información, sino también en fortalecer las capacidades y motivaciones de las personas para actuar. 
          p.mb-0 Comprender estos factores es fundamental para diseñar programas y estrategias de promoción de la salud que sean efectivos, pertinentes y sostenibles, adaptados a las realidades y necesidades de cada comunidad, así, los profesionales y agentes educativos deben: 
      .row.justify-content-center.mb-0(data-aos="fade-left")
        .col-sm-12.col-lg-10
          .tarjeta--container.row.mb-4(data-aos="fade-left")
            .col-md.tarjeta.p-3
              .row.justify-content-center.mb-0
                .col-12.border-right-cus
                  .row.align-items-end.justify-content-start.mb-2
                    .col-md-4.col-lg-2.mb-0.d-none.d-md-block
                      img(src='@/assets/curso/temas/t3/27.svg')
                  p.mb-2 Identificar las barreras y facilitadores que tienen las personas para cuidar su salud. 
            .col-md.tarjeta.p-3
              .row.justify-content-center.mb-0
                .col-12
                  .row.align-items-end.justify-content-start.mb-2
                    .col-md-4.col-lg-2.mb-0.d-none.d-md-block
                      img(src='@/assets/curso/temas/t3/28.svg')
                  p.mb-2 Fomentar la autoeficacia y empoderamiento personal.
          
          .tarjeta--container.row.mb-4(data-aos="fade-left")
            .col-md.tarjeta.p-3
              .row.justify-content-center.mb-0
                .col-12.border-right-cus
                  .row.align-items-end.justify-content-start.mb-2
                    .col-md-4.col-lg-2.mb-0.d-none.d-md-block
                      img(src='@/assets/curso/temas/t3/29.svg')
                  p.mb-2 Incluir componentes emocionales y motivacionales en las actividades educativas.
            .col-md.tarjeta.p-3
              .row.justify-content-center.mb-0
                .col-12
                  .row.align-items-end.justify-content-start.mb-2
                    .col-md-4.col-lg-2.mb-0.d-none.d-md-block
                      img(src='@/assets/curso/temas/t3/30.svg')
                  p.mb-2 Promover el trabajo comunitario y el apoyo social, como pilares de la promoción de la salud.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
