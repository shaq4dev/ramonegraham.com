
    const $filter = document.querySelector('.place_holding')

//  ======= FILTER ======= //

    const complete = document.getElementById('filter__complete')
    const in__progress = document.getElementById('filter__in--progress')
    let countComplete = 0
    let countIp = 0

    complete.addEventListener('click', filterComplete)
    in__progress.addEventListener('click', filterInProgress)

    function filterComplete(){

        countComplete++
        // console.log(countComplete);

        if(countComplete > 1){
            projectRows = null
        } else {
            let projectRows = document.getElementById('projectWrapper')
            let ip_projectRows = document.querySelector('.ip_projectWrapper')
            
            ip_projectRows.style.display = 'none'
            projectRows.style.display = 'block'

            // complete on 

            complete.style.margin = '0px 5px 0px 0px'  
            complete.style.width = '151px'
            complete.style.height = '37px'
            complete.style.fontSize = '16px'
            complete.style.border = 'none'
            complete.style.borderRadius = '55px'
            complete.style.background = 'var(--linear-gradient)'
            complete.style.transition = 'var(--transition-03)'
            complete.style.color = 'var(--background-color)'
            $filter.style.display = 'none'

            // filter off 

            in__progress.style.margin = '0px 5px'  
            in__progress.style.width = '151px'
            in__progress.style.height = '37px'
            in__progress.style.fontSize = '16px'
            in__progress.style.border = 'solid 2px var(--primary-color)'
            in__progress.style.borderRadius = '55px'
            in__progress.style.background = 'var(--background-color)'
            in__progress.style.transition = 'var(--transition-03)'
            in__progress.style.color = 'var(--primary-color)'

            for(i = 0; i < rows.length; i++){
                if(rows[i].state){


                    // horizontal lines
                    
                    const horizontal = document.createElement('hr')
                    horizontal.classList.add('project-hr')
                    projectRows.appendChild(horizontal) 
            
                    // project data

                    const projectData = document.createElement('div')
                    projectData.classList.add('project__data')
                    projectRows.appendChild(projectData)

                    

                    // year

                    const year = document.createElement('div')
                    year.classList.add('project__year')
                    year.textContent = rows[i].year
                    projectData.appendChild(year)

                    // project-container

                    const $project__container = document.createElement('div')
                    $project__container.classList.add('project__project')
                    projectData.appendChild($project__container)

                    // project-items

                        for($proj = 0; $proj < rows[i].project.length; $proj++){
                            const $project = document.createElement('div')
                            $project.classList.add('project-item')
                            $project.textContent = rows[i].project[$proj]
                            $project__container.appendChild($project)
                        }


                    // made at

                    const madeAt = document.createElement('div')
                    madeAt.classList.add('project__made--at')
                    madeAt.textContent = rows[i].made_at
                    projectData.appendChild(madeAt)


                    // build_by-container

                    const $build__container = document.createElement('div')
                    $build__container.classList.add('project__build--by')
                    projectData.appendChild($build__container)

                    // build-items

                        for($build = 0; $build < rows[i].build_by.length; $build++){
                            const $builder = document.createElement('div')
                            $builder.classList.add('build_item')
                            $builder.textContent = rows[i].build_by[$build]
                            $builder.style.margin = '5px 3px'
                            $build__container.appendChild($builder)
                        }

                    // link

                    const link = document.createElement('div')
                    link.classList.add('project__link')
                    link.innerHTML = rows[i].link
                    projectData.appendChild(link)
                }
            }
        }
        
       
        
    }


    function filterInProgress(){

        countIp++
        console.log(countIp);


        if(countIp > 1){
            ip_projectRows = null
        } else {

            let projectRows = document.getElementById('projectWrapper')
            let ip_projectRows = document.querySelector('.ip_projectWrapper')

            projectRows.style.display = 'none'
            ip_projectRows.style.display = 'block'

            // filter on 
            in__progress.style.margin = '0px 5px 0px 5px'  
            in__progress.style.width = '151px'
            in__progress.style.height = '37px'
            in__progress.style.fontSize = '16px'
            in__progress.style.border = 'none'
            in__progress.style.borderRadius = '55px'
            in__progress.style.background = 'var(--linear-gradient)'
            in__progress.style.transition = 'var(--transition-03)'
            in__progress.style.color = 'var(--background-color)'
            $filter.style.display = 'none'

            // complete off
            complete.style.margin = '0px 5px'  
            complete.style.width = '151px'
            complete.style.height = '37px'
            complete.style.fontSize = '16px'
            complete.style.border = 'solid 2px var(--primary-color)'
            complete.style.borderRadius = '55px'
            complete.style.background = 'var(--background-color)'
            complete.style.transition = 'var(--transition-03)'
            complete.style.color = 'var(--primary-color)'

            for(i = 0; i < rows.length; i++){
                if(!rows[i].state){


                    // horizontal lines
                
                    const horizontal = document.createElement('hr')
                    horizontal.classList.add('project-hr')
                    ip_projectRows.appendChild(horizontal) 
            
                    // project data

                    const projectData = document.createElement('div')
                    projectData.classList.add('project__data')
                    ip_projectRows.appendChild(projectData)

                    // year

                    const year = document.createElement('div')
                    year.classList.add('project__year')
                    year.textContent = rows[i].year
                    projectData.appendChild(year)

                    // project-container

                    const $project__container = document.createElement('div')
                    $project__container.classList.add('project__project')
                    projectData.appendChild($project__container)

                    // project-items

                        for($proj = 0; $proj < rows[i].project.length; $proj++){
                            const $project = document.createElement('div')
                            $project.classList.add('project-item')
                            $project.textContent = rows[i].project[$proj]
                            $project__container.appendChild($project)
                        }


                    // made at

                    const madeAt = document.createElement('div')
                    madeAt.classList.add('project__made--at')
                    madeAt.textContent = rows[i].made_at
                    projectData.appendChild(madeAt)


                    // build_by-container

                    const $build__container = document.createElement('div')
                    $build__container.classList.add('project__build--by')
                    projectData.appendChild($build__container)

                    // build-items

                        for($build = 0; $build < rows[i].build_by.length; $build++){
                            const $builder = document.createElement('div')
                            $builder.classList.add('build_item')
                            $builder.textContent = rows[i].build_by[$build]
                            $builder.style.margin = '5px 3px'
                            $build__container.appendChild($builder)
                        }

                    // link

                    const link = document.createElement('div')
                    link.classList.add('project__link')
                    link.innerHTML = rows[i].link
                    projectData.appendChild(link)
                }
            }
        } 
    }

// ======= DATA ======== //

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

// put id on div that contains the row
// create an array and initiate objects

const rows = [
    new Data(
    new Date("2023").getFullYear(),
    projects = ['Harvard Business School', 'Design System'],
    'Upstatement',
    built_by = ['Storybook', 'React', 'TypeScript'],
    '',
    true
    ),
    new Data(
    new Date("2024").getFullYear(),
    projects = ['Threadable'],
    'Upstatement',
    built_by = ['React Native', 'Ruby on Rails', 'Firebase'],
    `
    <a href="#">
              apps.apple.com
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 17L17 7L7 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
    `,
    true
    ),
    new Data(
    new Date("2026").getFullYear(),
    projects = ['Everytown Gun Law', 'Rankings'],
    'Upstatement',
    built_by = ['Wordpress', 'Timber', 'Airtable API', 'PHP'],
    '',
    false
    ),
    new Data(
    new Date("2025").getFullYear(),
    projects = ['Pratt'],
    'Upstatement',
    built_by = ['WordPress', 'Timber', 'WordPress Multisite', 'Gutenburg', 'Javascript'],
    `
    <a href="#">
              pratt.edu
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 17L17 7L7 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
    `,
    true
    ),
    new Data(
    new Date("2025").getFullYear(),
    projects = ['Koala Health'],
    'Upstatement',
    built_by = ['Next.js', 'TypeScript', 'Redux Toolkit', 'Stripe', 'Algolia', 'Javascript', 'Formik', 'Vercel'],
    `
    <a href="#">
              koala.health
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 17L17 7L7 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
    `,
    false
    )
]

// loop through this array and say every element


   