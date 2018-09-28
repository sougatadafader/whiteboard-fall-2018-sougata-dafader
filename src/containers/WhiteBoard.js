import React, {Component} from 'react'
import CourseCard from "../components/CourseCard";
import ModuleList3 from "../components/ModuleList3";
import CourseGrid from "../components/CourseGrid";
import CourseTable from "../components/CourseTable";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseService from "../services/CourseService";
import CourseEditor from "../components/CourseEditor";
import CourseAdd from "../components/CourseAdd";
import NavDefault from "../components/NavDefault";
import NavTable from "../components/NavTable";
import NavGrid from "../components/NavGrid";

export default class WhiteBoard extends Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }
    addCourse = newCourse => {
        this.courseService.createCourse(newCourse)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    deleteCourse = courseToDelete => {
        this.courseService.deleteCourse(courseToDelete.id)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    deleteModule = module =>{
        this.courseService.deleteModule(module)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    render() {
        return (

            <div>
                
                <Router>
                    <div className="mt-5 pt-4">
                        <Link to="/course/table">Table</Link>
                        <Link to="/course/grid">Grid</Link>
                        <Route path="/course/table"
                               render={() =>
                                    <div>
                                   <NavDefault addCourse={this.addCourse}/>
                                   <NavTable/>
                                    <CourseTable
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>
                                       </div>
                                   }/>
                        <Route path="/course/grid"

                                render={() =>
                                <div>
                                    <NavDefault addCourse={this.addCourse}/>
                                    <NavGrid/>
                                    <CourseGrid addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>
                                       </div>
                                }/>

                        <Route
                            exact
                            render={(props) =>
                                <CourseEditor
                                    {...props}
                                    deleteModule={this.deleteModule}
                                    courses={this.state.courses}/>}
                            path="/course/:courseId/edit"/>
                    </div>
                </Router>
            </div>
        );
    }
}