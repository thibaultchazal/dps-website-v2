<template>
  <v-container class="mt-10">
    <v-row>
      <v-col cols="12">
        <p class="sup-title">Le blog</p>
        <h1 id="blog-title">Pour vous faire progresser</h1>
        <p class="sub-title">{{description}}</p>
      </v-col>
      <v-col cols="12">
        <Articles/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const title = "DPS | Le Blog"
const description = "Des informations tirées d'expérience vécues et des conseils actionnables pour vous amener à mieux tirer parti de votre produit digital."

useHead({
  title,
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: 'description', content: description }
  ],
})
useServerSeoMeta({
  ogTitle: title,
  ogDescription: description,
  ogImage: "/DPS-logo.webp",
  twitterCard: 'summary_large_image',
})
</script>
<style>
  #blog-title{
    font-size: 56px;
    position: relative;
    width: fit-content;
    margin: auto;
  }
  @media (min-width: 1280px){
    #blog-title::after {
        content:url('~/assets/img/group16.svg');
        position:absolute;
        z-index:42;
        right: -25px;
        top: -15px;
        width: 20px;
    }
  }
  .sup-title{
    text-align: center;
    margin:20px 0 0;
    font-family: 'Courier New';
    font-size: 28px;
  }
  .sub-title{
    margin-top: 5px;
    font-size: 22px;
    /* font-weight: 200; */
    text-align: center;
  }
</style>