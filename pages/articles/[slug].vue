<template>
  <div>
    <v-img
      v-if="data?.data[0].attributes.cover.data"
      :aspect-ratio="30/9"
      cover
      :src="data?.data[0].attributes.cover.data.attributes.formats.small?.url ?? data?.data[0].attributes.cover.data.attributes.url"
    />
    <v-container style="background-color: #fff; position: relative; margin-top: -10em;">
      <v-row>
        <v-col cols="12">
          <h1>{{ data?.data[0].attributes.title }}</h1>
        </v-col>
        <v-col cols="12">
          <div v-html="data?.data[0].attributes.content"></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { strapiResponse } from "@/utils/types"
const route = useRoute()
const config = useRuntimeConfig()
const { data } = await useFetch<strapiResponse>(config.public.apiBaseUrl + '/api/articles?filters\[slug\][$eq]=' + route.params.slug + '&populate=*');
</script>