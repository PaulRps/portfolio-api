export class GithubProjectInfo {

    private static readonly mappedProjects = [
        new GithubProjectInfo(171775345, 'https://peladator.netlify.app')
    ]

    private constructor(private id: number, private url: string) { }

    static getProjectUrl(id: number): string {
        return this.mappedProjects.find(p => p.id == id)?.url
    }

}