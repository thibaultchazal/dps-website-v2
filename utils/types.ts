export interface strapiResponse{
    data: [Article]
}
export interface Article{
    id: string,
    attributes:{
      title: string,
      tempsLecture: number,
      slug: string,
      content: string,
      excerpt: string,
      cover: Cover,
      categories: Categories,
      createdAt: string,
      updatedAt: string
    }
}
export interface Categories{
  data: [Category]
}
export interface Category{
  id: string,
  attributes:{
    name: string,
    color: string,
    createdAt: string,
    updatedAt: string
  }
}
export interface Cover{
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