import React, {Component} from 'react'

export default class CourseAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'New Course'
        }
    }
    updateForm = event =>
        this.setState({
            title: event.target.value
        })

    render() {
        return(
            <div className="row">
                <input
                    onChange={this.updateForm}
                    className="form-control col-md-10 col-sm-6 col-9 mt-1"/>
                <button
                    onClick={() => this.props.addCourse({
                        id: (new Date()).getTime() + '',
                        title: this.state.title,
                        modules:[
                            {
                                'title': 'Module 1',
                                'lessons': [
                                    {
                                        'title': 'Lesson A',
                                        'topics': [
                                            {
                                                'title': 'Topic 1'
                                            }
                                        ]
                                    }]}]
                    })}
                    className="btn btn-primary fa-2x fa fa-plus col-md-2 col-sm-3 col-3"></button>
            </div>
        )
    }
}