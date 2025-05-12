<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Estrategia de atención integrada a las enfermedades prevalentes de la infancia (AIEPI)
      
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/1.png', alt='')
        .col-sm-12.col-lg-8
            p.mb-4 La estrategia de atención integrada a las enfermedades prevalentes de la infancia (AIEPI) es una iniciativa desarrollada por la organización panamericana de la salud (OPS) y la organización mundial de la salud (OMS) con el objetivo de reducir la morbilidad y mortalidad en niños menores de cinco años; se centra en el abordaje integral de las enfermedades más comunes en esta población, como infecciones respiratorias agudas, enfermedades diarreicas, desnutrición y otras condiciones prevenibles mediante un enfoque basado en la atención primaria en salud. 
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-9
                  p.mb-0 En Colombia, la implementación de AIEPI comenzó en 1996 como una estrategia para fortalecer la calidad de la atención en salud infantil y mejorar la capacidad de respuesta del sistema de salud frente a enfermedades prevenibles, A lo largo de los años, AIEPI ha evolucionado incorporando nuevos enfoques y herramientas tecnológicas que facilitan su aplicación en distintos contextos, incluidos entornos rurales y comunidades de difícil acceso. 
              .col-sm-12.col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/2.svg', alt='')
      .tarjeta.bg-fondo-16.p-3.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t4/3.png")
          .col
            .row.justify-content-between.align-items-center.text-white
              .col.mb-3.mb-sm-0
                h4.mb-1 Para fortalecer el tema anteriormente plasmado, se presenta el siguiente video: 
                p.mb-0 Niñez protegida con estrategia AIEPI.
              .col-sm-auto
                a.boton.color-acento-botones.text-sistema(href="https://www.youtube.com/watch?v=k0-hkZI8oyE" target="_blank")
                  span Ver video
                  i.fas.fa-link
      .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.p-0 Componentes de la estrategia AIEPI 
      p.mb-4(data-aos="fade-left") La estrategia AIEPI se basa en tres componentes fundamentales, los cuales se implementan de manera coordinada para garantizar una atención integral y efectiva: 
      .bg-full-width.bg-fondo-17.mb-5(data-aos="fade-left")
        .px-4.px-md-5.py-3
          .tarjeta.bg-color-white.py-4.px-5
            SlyderA(tipo="b")
              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-8
                  h4.mb-3 1. Componente institucional u organización local:
                  p.mb-4 Este componente se centra en el fortalecimiento del sistema de salud, asegurando que las instituciones de atención primaria cuenten con los recursos, la infraestructura y la organización adecuados. Las principales acciones incluyen:
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Mejora en la disponibilidad de medicamentos esenciales y equipamiento.
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Capacitación del personal administrativo y de gestión en supervisión y monitoreo de servicios. 
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Implementación de protocolos y guías clínicas basadas en evidencia. 
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Coordinación entre niveles de atención para la referencia y contrarreferencia de pacientes. 
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Uso de herramientas digitales para la recolección y análisis de datos epidemiológicos.  
                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t4/4.png', alt='')

              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-8
                  h4.mb-3 2. Componente clínico:
                  p.mb-4 Se enfoca en la capacitación del personal de salud para mejorar la calidad de la atención infantil, priorizando el manejo adecuado de enfermedades prevalentes en niños menores de cinco años. Las acciones clave incluyen:
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Formación y actualización continúa del personal médico, de enfermería y comunitario en protocolos AIEPI.  
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Diagnóstico temprano y tratamiento oportuno de enfermedades prevalentes.  
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Promoción de la lactancia materna y vigilancia nutricional.  
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Evaluación del crecimiento y desarrollo infantil.  
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Atención diferenciada según las necesidades de cada niño, con enfoque en salud mental y bienestar integral.  
                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t4/5.png', alt='')

              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-8
                  h4.mb-3 3. Componente comunitario:
                  p.mb-4 Busca involucrar activamente a las familias y comunidades en la promoción de la salud infantil, fomentando prácticas saludables y el acceso a servicios de salud. Se implementan estrategias como:
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Educación a padres y cuidadores sobre signos de alarma y prevención de enfermedades.  
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Promoción de hábitos saludables como la alimentación adecuada, higiene y vacunación.  
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Fortalecimiento de redes de apoyo comunitario para mejorar el acceso a servicios de salud.  
                    li.d-flex
                      i.fas.fa-check-circle.bg-color-3
                      p.mb-0 Implementación de programas de vigilancia nutricional y monitoreo del desarrollo infantil.  
                .col-sm-12.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t4/6.png', alt='')

      .bg-color-4.mb-4(data-aos="fade-left")
        h3.px-3.py-1 Impacto y evolución de la estrategia AIEPI 

      p.mb-4(data-aos="fade-left") Desde su implementación, AIEPI ha demostrado ser una herramienta eficaz para reducir la mortalidad infantil y mejorar la calidad de vida de los niños en países de ingresos bajos y medianos. Entre los principales logros de la estrategia se destacan: 
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/7.png', alt='')
        .col-sm-12.col-lg-7
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-check-circle.bg-color-3
              p.mb-0  Reducción significativa en la mortalidad infantil por enfermedades prevenibles.

            li.d-flex
              i.fas.fa-check-circle.bg-color-3
              p.mb-0 Mayor acceso a servicios de salud de calidad en comunidades rurales y zonas de difícil acceso. 

            li.d-flex
              i.fas.fa-check-circle.bg-color-3
              p.mb-0 Empoderamiento de las familias y comunidades en el cuidado de la salud infantil. 

            li.d-flex.mb-0
              i.fas.fa-check-circle.bg-color-3
              p.mb-0 Integración con otras estrategias de salud pública, como programas de vacunación, salud materna e intervenciones contra la desnutrición. 
             
      .bg-color-4.mb-0(data-aos="fade-left")
        h3.px-3.py-1 Lineamientos para la evaluación de la estrategia AIEPI       
      .bg-full-width.bg-fondo-14.mb-0.pt-5(data-aos="fade-left")
        .px-4.px-md-5.pb-md-3(data-aos="fade-left")
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-12
              p.mb-4 Según Ocampo, J. y Peralta, G. (2014), la OPS/OMS estableció en 2001 una serie de lineamientos clave para evaluar la implementación y efectividad de la estrategia AIEPI. Estos incluyen:        
              SlyderF.mb-5(columnas="col-lg-4 col-xl-4")
                .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                    .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                        .col-sm-12.col-md-3.col-lg-5
                            img(src='@/assets/curso/temas/t4/8.svg', alt='')
                    p.mb-0.text-center Reducción de la morbilidad y mortalidad infantil, evaluando el impacto en la salud de los niños menores de cinco años. 
                .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                    .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                        .col-sm-12.col-md-3.col-lg-5
                            img(src='@/assets/curso/temas/t4/9.svg', alt='')
                    p.mb-0.text-center Mejoras en la atención y el cuidado del niño en el hogar, promoviendo prácticas saludables dentro del núcleo familiar. 

                .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                    .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                        .col-sm-12.col-md-3.col-lg-5
                            img(src='@/assets/curso/temas/t4/10.svg', alt='')
                    p.mb-0.text-center Capacitación y desempeño del personal de salud, garantizando la aplicación efectiva de la estrategia AIEPI en los servicios de atención primaria. 

                .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                    .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                        .col-sm-12.col-md-3.col-lg-5
                            img(src='@/assets/curso/temas/t4/11.svg', alt='')
                    p.mb-0.text-center Cumplimiento de las normas técnicas para el manejo de casos, asegurando una atención basada en guías clínicas actualizadas. 

                .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                    .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                        .col-sm-12.col-md-3.col-lg-5
                            img(src='@/assets/curso/temas/t4/12.svg', alt='')
                    p.mb-0.text-center Identificación y abordaje de factores de riesgo, tanto individual como comunitario, que inciden en la salud infantil. 

                .tarjeta.bg-fondo-9.p-3.p-md-3.p-lg-5
                    .row.align-items-center.my-4.justify-content-center.hide-icon-sm
                        .col-sm-12.col-md-3.col-lg-5
                            img(src='@/assets/curso/temas/t4/13.svg', alt='')
                    p.mb-0.text-center Análisis de otras causas de enfermedad y problemas de salud en la infancia, para fortalecer la prevención y la respuesta del sistema de salud. 

          .row.justify-content-center.mb-5(data-aos="fade-left")
            .col-sm-12.col-lg-10 
              p.mb-0 Estos lineamientos siguen siendo fundamentales para la evaluación y adaptación de la estrategia AIEPI en diferentes contextos, incorporando nuevos enfoques y tecnologías para mejorar su impacto. 










</template>

<script>
export default {
  name: 'Tema4',
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
