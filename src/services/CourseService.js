let courses = [
    {
        id: '123',
        title: 'CS5200',
        modules: [
            {
                title: 'Week 1',
                lessons: [
                    {
                        title: 'Lesson 1',
                        topics:[
                            {
                                title:'Topic 1'
                            },
                            {
                                title:'Topic 2'
                            }
                        ]
                    },
                    {
                        title: 'Lesson 2',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]


                    },
                    {
                        title: 'Lesson 3',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Week 2',
                lessons: [
                    {
                        title: 'Lesson A',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]
                    },
                    {
                        title: 'Lesson B',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]
                    },
                    {
                        title: 'Lesson C',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: '234',
        title: 'CS5610',
        modules: [
                    {
                title: 'Week 1',
                lessons: [
                    {
                        title: 'Lesson 1',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]
                    },
                    {
                        title: 'Lesson 2',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]
                    },
                    {
                        title: 'Lesson 3',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Week 2',
                lessons: [
                    {
                        title: 'Lesson A',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]
                    },
                    {
                        title: 'Lesson B',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]
                    },
                    {
                        title: 'Lesson C',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Week 3',
                lessons: [
                    {
                        title: 'Lesson A',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]
                    },
                    {
                        title: 'Lesson B',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]
                    },
                    {
                        title: 'Lesson C',
                        topics:[
                            {
                                title:'Topic 1'
                            }
                        ]
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
    
    updateCourse = (courseId , course) => {
        courses = courses.filter(
            course => course.id === courseId
        )
        courses = course
    }

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