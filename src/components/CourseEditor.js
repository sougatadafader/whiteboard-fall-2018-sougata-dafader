import React, {Component} from 'react'
import ModuleList from "./ModuleList";
import {Route} from 'react-router-dom'
import LessonTabs from "./LessonTabs";
import {Link} from 'react-router-dom'
import TopicPills from "./TopicPills";

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);

        // retrieve courseId from the URL path parameter 'courseId'
        // the props.match.params is part of the Route library which
        // parses the URL path and names the parameters and creates
        // the params map
        const courseId = this.props.match.params.courseId;

        // use courseId to find the course object from the
        // courses array passed in as a property
        console.log(this.props.courses)
        const course = this.props.courses.find(
            course => course.id === courseId);
        console.log(course)
        const selectedModule = course.modules[0];
        const selectedLesson = selectedModule.lessons[0];
        const selectedTopic = selectedLesson.topics[0]

        this.state = {
            course: course,
            selectedModule: selectedModule,
            selectedLesson: selectedLesson,
            selectedTopic:selectedTopic,
            selectedModuleTitle:'',
            selectedLessonTitle:'',
            selectedTopicTitle:'',
            isEdit:false,
            isLessonEdit:false,
            isTopicEdit:false
        }
        console.log(this.state.course)
    }
    addLesson = () => {

        let lessonName='New Lesson'
        let lessonInput = document.getElementById('lesson-add').value
        if(lessonInput!='')
        {
            lessonName = lessonInput
        }
        let course = this.state.course
        let modules = course.modules
        let selectedTitle = this.state.selectedModule.title
        let ptr = 0
        let isLessonEdit=this.state.isLessonEdit
        for(let m in modules)
        {
            if(modules[m].title == selectedTitle)
            {
                ptr = m
                break
            }
        }
        if(!isLessonEdit) {
            let lessonObj = {title: lessonName}
            course.modules[ptr].lessons.push(lessonObj)
        }
        else
        {
            let lessons = course.modules[ptr].lessons
            let selectedLessonTitle = this.state.selectedLessonTitle
            for(let l in lessons)
            {
                if(lessons[l].title == selectedLessonTitle)
                {
                    lessons[l].title = lessonName
                    break
                }


            }
            this.setState(
                {
                    selectedLessonTitle:'',
                    isLessonEdit:false
                }
            )
            document.getElementById('lesson-add-btn').innerHTML = 'Add Lesson'
        }
        this.setState({
            course:course
        })
        document.getElementById('lesson-add').value = ''
    }

    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson
        })

    selectModule = module => {
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0]
        })
    }
    addModule = () => {

        let moduleName = 'New Module'
        let modInput = document.getElementById('module-add').value
        if(modInput != '')
        {
            moduleName = modInput
        }
        let modObj = {
            title:moduleName,
            lessons:[
                {
                    title:'New Lesson'
                }
            ]
        }
        let course = this.state.course
        let isEdit = this.state.isEdit
        if( !isEdit )
        {
        course.modules.push(modObj)
        }
        else
        {
            let modules = course.modules
            let selectedModTitle = this.state.selectedModuleTitle
            

            for(let m in modules)
            {
                if(modules[m].title == selectedModTitle )
                {
                    modules[m].title = moduleName
                    break
                }
            }
            this.setState({
                selectedModuleTitle:""
            })
            this.setState({
                isEdit:false
            })
        }
        this.setState(
            {
                course:course
            }
        )
        //console.log(this.state.course)
        document.getElementById('module-add').value = ''
    }

    editModule = (module) =>
    {
        document.getElementById('module-add').value = module.title
        this.setState(
            {
                selectedModuleTitle:module.title
            }
        )
        this.setState(
            {
                isEdit:true
            }
        )
    }
    deleteLesson = (lesson) =>
    {
        let selectedModule = this.state.selectedModule
        let course = this.state.course
        let ptr = 0
        let modules = course.modules
        for(let m in modules)
        {
            if(modules[m].title == selectedModule.title)
            {
                ptr = m
                break
            }
        }
        let lsnPtr = 0
        let lessons = modules[ptr].lessons
        for(let l in lessons)
        {
            if(lessons[l].title == lesson.title )
            {
                lsnPtr = l
                break
            }
        }
        lessons.splice(lsnPtr,1)
        this.setState(
            {
                course:course
            }
        )

    }
    editLesson = (lesson) =>
    {
        this.setState(
            {
                selectedLessonTitle:lesson.title,
                isLessonEdit:true
            }
        )
        document.getElementById('lesson-add').value = lesson.title
        document.getElementById('lesson-add-btn').innerHTML = 'Update Lesson'
    }
    selectTopic = (topic) =>
    {

    }
    editTopic = (topic) =>
    {
        document.getElementById('topic-add').value = topic.title
        this.setState(
            {
                isTopicEdit:true,
                selectedTopicTitle:topic.title
            }
        )
        document.getElementById('topic-add-btn').innerHTML = 'Update Topic'
    }
    deleteTopic = (topic) =>
    {
        let course = this.state.course
        let modules = course.modules
        let selectedModule = this.state.selectedModule
        let lessons = selectedModule.lessons
        let selectedLesson = this.state.selectedLesson
        let modPtr = 0
        for(let m in modules)
        {
            if(modules[m].title == selectedModule.title)
            {
                modPtr = m
                break
            }
        }
        let lessonPtr = 0
        for(let l in lessons)
        {
            if(lessons[l].title == selectedLesson.title)
            {
                lessonPtr = l
                break
            }
        }
        let topicPtr = 0
        let topics = course.modules[modPtr].lessons[lessonPtr].topics
        console.log(topics)
        for(let t in topics)
        {
            if(topics[t].title == topic.title)
            {
                topicPtr = t
                break
            }
        }
        topics.splice(topicPtr,1)
    }
    addTopic = () =>
    {
        let course = this.state.course
        let modules = course.modules
        let selectedModule = this.state.selectedModule
        let lessons = selectedModule.lessons
        let selectedLesson = this.state.selectedLesson
        let modPtr = 0
        for(let m in modules)
        {
            if(modules[m].title == selectedModule.title)
            {
                modPtr = m
                break
            }
        }
        let lessonPtr = 0
        for(let l in lessons)
        {
            if(lessons[l].title == selectedLesson.title)
            {
                lessonPtr = l
                break
            }
        }
        let topicName = 'New Topic'
        let topicInp = document.getElementById('topic-add').value
        if(topicInp!='')
        topicName=topicInp
        let isTopicEdit = this.state.isTopicEdit
        if(!isTopicEdit) {
            let topicObj = {title: topicName}
            course.modules[modPtr].lessons[lessonPtr].topics.push(topicObj)
        }
        else
        {
            let selectedTopicTitle = this.state.selectedTopicTitle
            let topics = course.modules[modPtr].lessons[lessonPtr].topics

            for(let t in topics)
            {
                if(topics[t].title == selectedTopicTitle)
                {
                    topics[t].title = topicName
                    break
                }
            }
            this.setState(
                {
                    isTopicEdit:false,
                    selectedTopicTitle:''
                }
            )
            document.getElementById('topic-add-btn').innerHTML = 'Add Topic'
        }
        this.setState(
            {
                course:course
            }
        )
        document.getElementById('topic-add').value = ''
    }
    
    render() {
        return(
            <div>
                <div className="navbar navbar-dark fixed-top bg-primary">
                <Link to={`/course/grid`} className="fa fa-2x fa-times text-light"></Link>
                <h2 className="text-light">
                    {this.state.course.title}
                    
                </h2>
                </div>
                <div className="row">
                    <div className="col-4">
                    
                        <ModuleList
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            deleteModule={this.props.deleteModule}
                            modules={this.state.course.modules}
                            addModule={this.addModule}
                            editModule={this.editModule} />
                        
                    </div>
                    <div className="col-8">
                        <input type="text" id="lesson-add" className="btn border-dark"/>
                        <button className="btn btn-primary m-1"  onClick={this.addLesson} id="lesson-add-btn">Add Lesson</button>
                        <LessonTabs
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            deleteLesson={this.deleteLesson}
                            lessons={this.state.selectedModule.lessons}
                            editLesson={this.editLesson}
                        />
                        <TopicPills
                            selectTopic={this.selectTopic}
                            selectedTopic={this.state.selectedTopic}
                            deleteTopic={this.deleteTopic}
                            topics={this.state.selectedLesson.topics}
                            editTopic={this.editTopic}
                            addTopic = {this.addTopic}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
