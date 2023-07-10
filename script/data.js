class Data {
    constructor (year, project, made_at, build_by, link, state) {
        this.year = year
        this.project = project 
        this.made_at = made_at 
        this.build_by = build_by
        this.link = link 
        this.state = state
    }

}

const data_1 = new Data(
    2022,
    projects = ['Harvard Business School', 'Design System'],
    'Upstatement',
    built_by = ['Storybook', 'React', 'TypeScript'],
    '',
    true
)

// 
console.log(data_1.project[0]);

