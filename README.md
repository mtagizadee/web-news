# TODOs

- [ ] NewsCard without images
- [ ] AllNews
- [ ] News without images
- [ ] Add api for images w/ RTK Query
- [ ] Add images for News
- [ ] Add images for NewsCard
- [ ] Create auth slice in redux storage
- [ ] Auth
- [ ] Add to header profile depending on isAuth
- [ ] Comments

# Types
    news - {
        id: number
        image: { stream: Stream }
        part1: string
        part2: string
        title: string
        createdAt: DateTime
        comments: Comment[]
    }
    comment - {
        id: number
        content: string
        authorId: number
        author: User
    }