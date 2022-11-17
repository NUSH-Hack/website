export class Project {
    title!: string
    tagline!: string
    award!: string
    isAward!: boolean
    year!: number
    image!: string

    constructor(
        title: string, tagline: string, 
        award: string, isAward: boolean, 
        year: number, image: string) {
        this.title = title;
        this.tagline = tagline;
        this.award = award;
        this.isAward = isAward;
        this.year = year;
        this.image = image;
    }
}

