<template>
  <div>
    <v-btn
      id="home-btn"
      to="/"
    >
      <span class="d-none d-lg-flex">Retour</span>
      <!-- <img src="@/assets/icons/home.svg" style="width: 25px; height: 100%;"/> -->
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
    <v-container class="mt-5">
      <v-row justify="center">
        <v-col
          cols="12"
          md="10"
          class="pa-5"
          style="background-color: aquamarine; border-radius: 10px; font-size: smaller;">
          <form
            name="register-email"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="onSubmit"
          >
            <input type="hidden" name="form-name" value="register-email" />
            <p hidden>
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>
            <p>
              Vous souhaitez recevoir en avant première les nouveaux articles ?<br/>
              Laissez nous vos coordonées et nous vous enverrons un email la veille de chaque nouvelle publication !
            </p>
            <v-container class="mt-5">
              <v-row justify="center">
                <v-col cols="6">
                  <v-text-field
                    name='email'
                    class="mw-50 bg-white"
                    label="Votre adresse email:"
                    hide-details
                    single-line
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <button type="submit" style="border-radius: 5px; background-color: white;" class="px-3 py-2">Envoyer</button>
                </v-col>
              </v-row>
            </v-container>
          </form>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar
      v-model="emailRegistered.value"
      color="success"
      :timeout="emailRegistered.error ? 0 : 2000"
    >
      {{ emailRegistered.message }}

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          
          @click="emailRegistered.value = false"
        >
          X
        </v-btn>
      </template>
    </v-snackbar>
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
<script lang="ts">
export default {
  data() {
    return {
      emailRegistered: {
        value: false,
        error: false,
        message: ''
      },
    }
  },
  methods: {
    async onSubmit(event: any) {
      try {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const formObject: Record<string, string> = {};
        formData.forEach((value, key) => {
          formObject[key] = value.toString();
        });
        // Submit the form to Netlify
        const response = await fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams(formObject).toString()
        })

        // Throw an error if the response was not successful
        if (!response.ok) {
          throw new Error('Response was not successful')
        }

        // Say thank you and reset reCAPTCHA
        this.emailRegistered.error = false
        this.emailRegistered.message = 'Vous êtes bien inscrit !'
        this.emailRegistered.value = true
      } catch (e) {
        console.log(e)
        // Error message if something goes wrong
        this.emailRegistered.message = "Oups... Une erreur s'est produite. Vous pouvez essayer de rafraichir la page et réessayer. Sinon, écrivez nous à thibault@digitalproductstudio.fr !"
        this.emailRegistered.error = true
        this.emailRegistered.value = true
      }
    }
  }
}
</script>

<style>
/* @import url('@/assets/icons/send.svg'); */

.send-icon {
  background-image: url('~/assets/icons/send.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
}
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