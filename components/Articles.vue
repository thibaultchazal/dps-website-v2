<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(article, index) in data?.data"
        :key="article.id"
        :cols="index === 0 ? 12 : 6">
        <v-card
          density="comfortable"
          elevation="3"
          :to="'articles/' + article.id"
        >
          <v-img
            v-if="article.attributes.cover.data"
            height="200"
            :src="config.apiBaseUrl + article.attributes.cover.data.attributes.url"
            cover
          />
          <v-card-subtitle v-if="article.attributes.categories.data.length" class="pt-2">
            <v-chip
              v-for="category of article.attributes.categories.data"
              :color="category.attributes.color">
              {{category.attributes.name }}
            </v-chip>
          </v-card-subtitle>
          <v-card-title
            style="white-space: normal;">
            <h2>{{ article.attributes.title }}</h2>
          </v-card-title>
          <v-card-text>
            {{ article.attributes.excerpt }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
interface strapiResponse{
    data: [Article]
}
interface Article{
    id: string,
    attributes:{
      title: string,
      content: string,
      excerpt: string,
      cover: Cover,
      categories: Categories,
      createdAt: string,
      updatedAt: string
    }
}
interface Categories{
  data: [Category]
}
interface Category{
  id: string,
  attributes:{
    name: string,
    color: string,
    createdAt: string,
    updatedAt: string
  }
}
interface Cover{
  data: {
    id: string,
    attributes:{
      name: string,
      alternativeText: string,
      caption: string,
      url: string,
      formats: {
        thumbnail: {
          url: string
        },
        small: {
          url: string
        },
        medium: {
          url: string
        },
        large: {
          url: string
        }
      },
      createdAt: string,
      updatedAt: string
    }
  }
}
const config = useRuntimeConfig()
const { data } = await useFetch<strapiResponse>(config.public.apiBaseUrl + '/api/articles?populate=*');
</script>