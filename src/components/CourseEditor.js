import React, {Component} from 'react'
import ModuleList from "./ModuleList";
import {Route} from 'react-router-dom'
import LessonTabs from "./LessonTabs";
import {Link} from 'react-router-dom'

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

        this.state = {
            course: course,
            selectedModule: selectedModule,
            selectedLesson: selectedLesson,
            selectedModuleTitle:'',
            isEdit:false
        }
        console.log(this.state.course)
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
        
    
    render() {
        return(
            <div>
                <div className="navbar navbar-dark fixed-top bg-primary">
                <Link to={`/course/grid`} className="fa fa-2x fa-times text-dark"></Link>
                <h2>
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
                        <LessonTabs
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            lessons={this.state.selectedModule.lessons}/>
                    </div>
                </div>
            </div>
        )
    }
}
