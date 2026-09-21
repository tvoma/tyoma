import CardProject from '@/components/card-project'

export function mapProjects(projects) {
    return (
        projects.map((project, index) => (
            <CardProject key={ index } { ...project } />
        ))
    )
}
