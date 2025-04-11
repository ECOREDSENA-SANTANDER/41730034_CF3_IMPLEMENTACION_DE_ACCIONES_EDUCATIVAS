<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-0 La integración de la estrategia de entornos saludables (EES) y AIEPI en la gestión local fortalece la promoción de la salud y el desarrollo sostenible mediante un enfoque intersectorial; se basa en cinco pilares: desarrollo humano, políticas de entornos saludables, educación en salud, fortalecimiento de AIEPI y su integración con EES. Este modelo impulsa la equidad en salud, fomenta prácticas clave en la comunidad y mejora la calidad de vida infantil a través de la articulación de políticas, educación y prevención. 
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama sobre la integración EES-AIEPI en gestión local, abordando desarrollo humano, políticas saludables, educación, estrategia AIEPI e integración comunitaria.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
