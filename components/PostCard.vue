<template>
    <v-card density="comfortable" elevation="2" :to="'articles/' + article.attributes.slug" variant="outlined"
        style="background: #fcf2cf;">
        <div style="width: 100%;">
            <nuxt-img
                v-if="article.attributes.cover.data"
                preload
                :src="article.attributes.cover.data.attributes.formats.small?.url ?? article.attributes.cover.data.attributes.url"
                :alt="article.attributes.cover.data.attributes.alternativeText"/>
        </div>
        <v-card-subtitle v-if="article.attributes.categories.data.length" class="pt-2">
            <v-chip v-for="category of article.attributes.categories.data" :color="category.attributes.color">
                <b>{{ category.attributes.name }}</b>
            </v-chip>
        </v-card-subtitle>
        <v-card-title style="white-space: normal;">
            <h2>{{ article.attributes.title }}</h2>
            <p v-if="article.attributes.tempsLecture" class="text-overline">{{ article.attributes.tempsLecture }} minutes de lecture</p>
        </v-card-title>
        <v-card-text>
            <p class="article-excerpt">{{ article.attributes.excerpt }}</p>
        </v-card-text>
        <v-card-actions>
            <v-btn variant="text" size="small">Lire la suite -></v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup lang="ts">
const props = defineProps({
    article: {
        type: Object,
        required: true
    }
})
</script>
<style>
img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}
</style>