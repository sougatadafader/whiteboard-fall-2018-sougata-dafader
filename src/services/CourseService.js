let courses = [
    {
        id: '123',
        title: 'CS5200',
        modules: [
            {
                title: 'Week 1 of CS5200',
                lessons: [
                    {
                        title: 'Lesson 1'
                    },
                    {
                        title: 'Lesson 2'
                    },
                    {
                        title: 'Lesson 3'
                    }
                ]
            },
            {
                title: 'Week 2 of CS5200',
                lessons: [
                    {
                        title: 'Lesson A'
                    },
                    {
                        title: 'Lesson B'
                    },
                    {
                        title: 'Lesson C'
                    }
                ]
            },
            {
                title: 'Week 3 of CS5200',
                lessons: []
            }
        ]
    },
    {
        id: '234',
        title: 'CS5610',
        modules: [
                    {
                title: 'Week 1 of CS5610',
                lessons: [
                    {
                        title: 'Lesson 1'
                    },
                    {
                        title: 'Lesson 2'
                    },
                    {
                        title: 'Lesson 3'
                    }
                ]
            },
            {
                title: 'Week 2 of CS5610',
                lessons: [
                    {
                        title: 'Lesson A'
                    },
                    {
                        title: 'Lesson B'
                    },
                    {
                        title: 'Lesson C'
                    }
                ]
            },
            {
                title: 'Week 3 of CS5610',
                lessons: [
                    {
                        title: 'Lesson A'
                    },
                    {
                        title: 'Lesson B'
                    },
                    {
                        title: 'Lesson C'
                    }
                ]
            }
        ]
    }
]

export default class CourseService {
    findAllCourses = () =>
        courses
    createCourse = course =>
        courses.push(course)

    findCourseById = courseId =>
        courses = courses.filter(
            course => course.id === courseId
        )
    

    deleteCourse = courseId =>
        courses = courses.filter(
            course => course.id !== courseId
        )
    deleteModule = moduleToDelete => {
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== moduleToDelete
            )
            return course;
        })
    }
}