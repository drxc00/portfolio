
interface TabProps {
    text: string
    selected: boolean
    setSelected: (selected: string) => void
}

type Blogs = {
    title: string
    author: string
    datePosted: string
    description: string
    path: string
}