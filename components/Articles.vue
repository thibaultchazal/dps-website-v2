<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(article, index) in data?.data"
        :key="article.id"
        :cols="index % 2 ? 8 : 4">
        <v-card
          density="comfortable"
          elevation="3"
          :to="'articles/' + article.id"
        >
          <v-img
            v-if="article.attributes.cover.data"
            height="200"
            :src="config.apiBaseUrl + article.attributes.cover.data.attributes.formats.large.url"
            cover
          />
          <v-card-subtitle v-if="article.attributes.Category" class="pt-2"><v-chip :color="article.attributes.Category.data.attributes.color">{{ article.attributes.Category.data.attributes.name }}</v-chip></v-card-subtitle>
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
        Category: Category,
        createdAt: string,
        updatedAt: string
    }
}
interface Category{
  data: {
    id: string,
    attributes:{
      name: string,
      color: string,
      createdAt: string,
      updatedAt: string
    }
  }
}
interface Cover{
  data: {
    id: string,
    attributes:{
      name: string,
      alternativeText: string,
      caption: string,
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
const { data } = await useFetch<strapiResponse>(config.apiBaseUrl + '/api/articles?populate=*');

</script>