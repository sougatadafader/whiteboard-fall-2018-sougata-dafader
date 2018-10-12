let courses = [
    {
        id: '123',
        title: 'CS5200',
        modules: [
            {
                id: '123_module',
                title: 'Week 1',
                lessons: [
                    {
                        id: '123_lessons',
                        title: 'Lesson 1',
                        topics: [
                            {
                                id: '123_topic',
                                title: 'topic 1',
                                widgets: [
                                    {
                                        id: '123_wid',
                                        type: "HEADING",
                                        size: 4,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '234_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '345_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '456_wid',
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '567_wid',
                                        type: "LINK",
                                        title: "The DOM",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {
                                id: '234_topic',
                                title: 'topic 2',
                                widgets: [
                                    {
                                        id: '678_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '789_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '890_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '901_wid',
                                        type: "IMAGE",
                                        title: "The DOM",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '012_wid',
                                        type: "LINK",
                                        title: "The DOM",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '234_lessons',
                        title: 'Lesson 2',
                        topics: [
                            {
                                id: '1234_topic',
                                title: 'topic a',
                                widgets: [
                                    {
                                        id: '1234_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '2345_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '3456_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '4567_wid',
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '5678_wid',
                                        type: "LINK",
                                        title: "The DOM",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {
                                id: '2345_topic',
                                title: 'topic b',
                                widgets: [
                                    {
                                        id: '6789_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '7890_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '8901_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '9012_wid',
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '0123_wid',
                                        type: "LINK",
                                        title: "The DOM",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {
                                id: '000_topic',
                                title: 'topic c',
                                widgets: [
                                    {
                                        id: '001_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '002_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '003_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '004_wid',
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '005_wid',
                                        type: "LINK",
                                        title: "The DOM",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '345_lessons',
                        title: 'Lesson 3',
                        topics: [
                            {
                                id: '111_topic',
                                title: 'topic abc',
                                widgets: [
                                    {
                                        id: '112_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '113_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '114_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '115_wid',
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '116_wid',
                                        type: "LINK",
                                        title: "The DOM",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {
                                id: '222_topic',
                                title: 'topic bcd',
                                widgets: [
                                    {
                                        id: '221_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '222_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '223_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '224_wid',
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '225_wid',
                                        type: "LINK",
                                        title: "The DOM",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: '234_module',
                title: 'Week 2',
                lessons: [
                    {
                        id: '456_lessons',
                        title: 'Lesson A',
                        topics: [
                            {
                                id: '333_topic',
                                title: 'topic 1',
                                widgets: [
                                    {
                                        id: '330_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '331_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '332_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '333_wid',
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '334_wid',
                                        type: "LINK",
                                        title: "The DOM",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '567_lessons',
                        title: 'Lesson B',
                        topics: [
                            {
                                id: '444_topic',
                                title: 'topic 1',
                                widgets: [
                                    {
                                        id: '440_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '441_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '442_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '443_wid',
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '444_wid',
                                        type: "LINK",
                                        title: "The DOM",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '678_lessons',
                        title: 'Lesson C',
                        topics: [
                            {
                                id: '555_topic',
                                title: 'topic 1',
                                widgets: [
                                    {
                                        id: '550_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '551_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '552_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '553_wid',
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '554_wid',
                                        type: "LINK",
                                        title: "The DOM",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
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
                id: '345_module',
                title: 'Week 1',
                lessons: [
                    {
                        id: '789_lessons',
                        title: 'HTML',
                        topics: [
                            {
                                id: '666_topic',
                                title: 'DOM',
                                widgets: [
                                    {
                                        id: '660_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '661_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '662_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '663_wid',
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '664_wid',
                                        type: "LINK",
                                        title: "The DOM",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {
                                id: '777_topic',
                                title: "Tags",
                                widgets: [
                                    {
                                        id: '770_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '771_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '772_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '773_wid',
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '774_wid',
                                        type: "LINK",
                                        title: "The DOM",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {
                                id: '888_topic',
                                title: "Attributes",
                                widgets: [
                                    {
                                        id: '880_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '881_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '882_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '883_wid',
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '884_wid',
                                        type: "LINK",
                                        title: "The DOM",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '890_lessons',
                        title: "CSS",
                        topics: [
                            {
                                id: '999_topic',
                                title: 'DOM',
                                widgets: [
                                    {
                                        id: '990_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '991_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '992_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '993_wid',
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '994_wid',
                                        type: "LINK",
                                        title: "The DOMion",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: '456_module',
                title: "Week 2",
                lessons: [
                    {
                        id: '012_lessons',
                        title: "JavaScript",
                        topics: [
                            {
                                id: '000_topic',
                                title: 'DomElements',
                                widgets: [
                                    {
                                        id: '001_wid',
                                        type: "HEADING",
                                        size: 1,
                                        text: "The Document Object Model"
                                    },
                                    {
                                        id: '002_wid',
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the DOM"
                                    },
                                    {
                                        id: '003_wid',
                                        type: "LIST",
                                        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        id: '004_wid',
                                        type: "IMAGE",
                                        title:"Hello",
                                        src: "https://picsum.photos/200"
                                    },
                                    {
                                        id: '005_wid',
                                        type: "LINK",
                                        title: "The DOMinator",
                                        href: "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
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
    createWidget = (topicId, widget) => {

        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === topicId.id) {
                            courses[c].modules[m].lessons[l].topics[t].widgets.push(widget)
                            //console.log(courses);
                        }
                    }
                }
            }
        }
    }
    static findWidgets = topicId => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === topicId.id) {
                            return courses[c].modules[m].lessons[l].topics[t].widgets
                        }
                    }
                }
            }
        }
    }
    findWidget = widgetId => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        for(let to in courses[c].modules[m].lessons[l].topics[t].widgets) {
                            if (courses[c].modules[m].lessons[l].topics[t].widgets[to].id === widgetId) {
                                return courses[c].modules[m].lessons[l].topics[t].widgets[to]
                            }
                        }
                    }
                }
            }
        }
    }
    static updateWidget = (forTopic, forWidget) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id)
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex] = forWidget;
                        }
                    }
                }
            }
        }
    }
    static deleteWidget = (forTopic, forWidget) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            //const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id)
                            //courses[c].modules[m].lessons[l].topics[t].widgets.splice(widgetIndex, 1)
                            //let cntr = 0
                            for(let w in courses[c].modules[m].lessons[l].topics[t].widgets)
                            {
                                if(courses[c].modules[m].lessons[l].topics[t].widgets[w].id === forWidget.id)
                                {
                                    courses[c].modules[m].lessons[l].topics[t].widgets.splice(w, 1)
                                    break
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}