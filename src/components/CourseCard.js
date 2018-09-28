import React from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course, deleteCourse}) =>
   <div className="card">
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <Link to={`/course/${course.id}/edit`}><h5>{course.title}</h5></Link>
                    <p className="card-text">Card text.</p>
                    <a onClick={() => deleteCourse(course)} className="btn text-primary fa fa-2x fa-trash"></a>
                </div>
            </div>

export default CourseCard