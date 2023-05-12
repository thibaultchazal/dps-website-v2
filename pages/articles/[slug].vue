<template>
  <div>
    <v-btn
      id="home-btn"
      to="/"
    >
      <span class="d-none d-lg-flex">Retour au blog</span>
      <img src="@/assets/icons/home.svg" style="width: 25px; height: 100%;"/>
    </v-btn>
    <v-img
      v-if="article?.data[0].attributes.cover.data"
      id="hero-cover"
      :aspect-ratio="30/9"
      cover
      :src="article?.data[0].attributes.cover.data.attributes.formats.large?.url ?? article?.data[0].attributes.cover.data.attributes.url"
      :alt="article?.data[0].attributes.cover.data.attributes.alternativeText"/>
    <v-container class="rounded-xl" style="background-color: #fff; position: relative; margin-top: -10em;">
      <v-row>
        <v-col cols="12">
          <h1 class="my-5">{{ article?.data[0].attributes.title }}</h1>
          <p v-if="article?.data[0].attributes.tempsLecture" class="text-center text-grey-darken-2">
            <span >{{ article?.data[0].attributes.tempsLecture }} minutes de lecture</span>
          </p>
        </v-col>
        <v-col cols="12" class="px-10">
          <div class="strapi-md" v-html="md.render(article?.data[0]?.attributes?.content ||'')"></div>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="connexesArticles?.data.length">
      <v-row>
        <v-col cols="12" style="z-index: 42;">
          <h2 class="my-5">Articles similaires</h2>
        </v-col>
        <v-col
          v-for="(article, index) in connexesArticles?.data"
          :key="article.id"
          cols="4">
          <PostCard :article="article" />
        </v-col>
      </v-row>
    </v-container>
    <form name="register-email" method="POST" data-netlify="true">
      <p>
        Vous souhaitez recevoir en avant première les nouveaux articles ?<br/>
        Laissez nous vos coordonées et nous vous enverrons un email la veille de chaque nouvelle publication !
        <label>Votre adresse email: <input type="email" name="email" /></label>
      </p>
      <p>
        <button type="submit">J'en suis !</button>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { strapiResponse } from "@/utils/types"
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

const route = useRoute()
const config = useRuntimeConfig()
const { data: article } = await useFetch<strapiResponse>(config.public.apiBaseUrl + '/api/articles?filters\[slug\][$eq]=' + route.params.slug + '&populate=*');
const { data: connexesArticles } = await useFetch<strapiResponse>(config.public.apiBaseUrl + '/api/articles?filters[slug][$ne]=' + route.params.slug + '&filters[categories][name][$contains]=' + article?.value?.data[0].attributes.categories.data[0]?.attributes.name + '&populate=*');

const title = article?.value?.data[0].attributes.title
const description = article?.value?.data[0].attributes.excerpt
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
  ogImage: article?.value?.data[0].attributes.cover.data.attributes.formats.large?.url,
  twitterCard: 'summary_large_image',
})
</script>

<style>
#home-btn{
  position: fixed;
  z-index: 42;
}
@media (max-width: 1279px){
  #home-btn{
    bottom: 20px;
    right: 30px;
  }
}
@media (min-width: 1280px){
  #home-btn{
    top: 20px;
    left: 30px;
  }
}
.strapi-md h2 {
  margin: 1.4em 0 .6em;
}
.strapi-md p {
  margin-bottom: 0.6em;
}
.strapi-md ul {
  margin-left: 2em;
}

</style>