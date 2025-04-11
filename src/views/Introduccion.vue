<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1.mb-0
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/intro/1.svg', alt='')
          .col-sm-12.col-lg-10
              p.mb-0 La promoción de la salud es un proceso fundamental que busca fortalecer las capacidades de las personas y las comunidades para mejorar su calidad de vida, prevenir enfermedades y fomentar entornos saludables, a través de la educación, se promueven conocimientos y prácticas que permiten a las personas tomar decisiones informadas, cuidar de sí mismas y de los demás. Además, se incentiva la creación de entornos favorables que apoyen el bienestar físico, mental y social. La integración de estrategias como la atención integrada a las enfermedades prevalentes de la infancia (AIEPI) y la estrategia de entornos saludables (EES) dentro de los programas de atención primaria en salud, permite ofrecer respuestas efectivas a las necesidades de la población, especialmente en la niñez, garantizando una atención integral, oportuna y de calidad. Este proceso, además, fomenta la participación activa de las familias y comunidades para lograr un impacto positivo y duradero en la salud colectiva. 
        
        .row.justify-content-center.align-items-center           
          .col-lg-12
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/90pYh8xw8gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
