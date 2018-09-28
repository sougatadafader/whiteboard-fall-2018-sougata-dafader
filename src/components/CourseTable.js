import React from 'react'
import CourseRow from "./CourseRow";
import CourseAdd from "./CourseAdd";

const CourseTable = ({courses, deleteCourse, addCourse}) =>
    <div>
        <table className="table">
            <tbody>
            {
                courses.map((course, index) =>
                    (<CourseRow
                        deleteCourse={deleteCourse}
                        key={index}
                        course={course}/>)
                )
            }
            </tbody>
        </table>
    </div>

export default CourseTable