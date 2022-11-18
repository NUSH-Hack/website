export class Project {
    title!: string
    tagline!: string
    award!: string
    year!: number
    image!: string
    github!: string
    hasDemo!: boolean
    demo!: string

    constructor(
        title: string, tagline: string, 
        award: string,
        year: number, image: string,
        github: string,
        hasDemo: boolean, demo: string
    ) {
        this.title = title;
        this.tagline = tagline;
        this.award = award;
        this.year = year;
        this.image = image;
        this.github = github;
        this.hasDemo = hasDemo;
        this.demo = demo;
    }
}

