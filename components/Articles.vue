<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(article, index) in posts?.data"
        :key="article.id"
        cols="12"
        :md="index === 0 ? 12 : 6">
        <PostCard :article="article" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import PostCard from "@/components/PostCard.vue"
import { strapiResponse } from "@/utils/types"
const config = useRuntimeConfig()
const { data: posts } = await useFetch<strapiResponse>(config.public.apiBaseUrl + '/api/articles?populate=*');
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