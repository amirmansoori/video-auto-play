interface IVideo {
  id: string
  type: string
  attributes: {
    title: string
    preview_src: string
  }
}

export type { IVideo }
