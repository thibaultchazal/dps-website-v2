<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(article, index) in data?.data"
        :key="article.id"
        :cols="index === 0 ? 12 : 6">
        <v-card
          density="comfortable"
          elevation="2"
          :to="'articles/' + article.attributes.slug"
          variant="outlined"
          style="background: #fcf2cf;"
        >
          <v-img
            v-if="article.attributes.cover.data"
            :aspect-ratio="30/9"
            cover
            :src="article.attributes.cover.data.attributes.formats.small?.url ?? article.attributes.cover.data.attributes.url"
          />
          <v-card-subtitle v-if="article.attributes.categories.data.length" class="pt-2">
            <v-chip
              v-for="category of article.attributes.categories.data"
              :color="category.attributes.color">
              <b>{{category.attributes.name }}</b>
            </v-chip>
          </v-card-subtitle>
          <v-card-title
            style="white-space: normal;">
            <h2>{{ article.attributes.title }}</h2>
          </v-card-title>
          <v-card-text>
            <p class="article-excerpt">{{ article.attributes.excerpt }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              variant="text"
              size="small"
            >Lire la suite -></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { strapiResponse } from "@/utils/types"
const config = useRuntimeConfig()
const { data } = await useFetch<strapiResponse>(config.public.apiBaseUrl + '/api/articles?populate=*');
</script>
<style>
.article-excerpt{
  overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>