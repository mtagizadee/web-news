# Description
    So called "web-news" is a project where a
    user can read what is considered all up-to-date
    news and leave a comment if they want what makes 
    it not only a news website but also a forum, where
    someone can share their opinion about some news.

#Technologies used
    1. Main framework --> ReactJS
    2. Redux  + RTK Query
    3. Framer motion + Tailwindcss

#How to run the project
    1. Clone the git repo
    2. run npm install command
    3. run npm start

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