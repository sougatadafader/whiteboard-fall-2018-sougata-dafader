import React from 'react'
import styles from './WidgetList.style.css';
const WidgetList = () =>
    <div className="topic-widgets" id="topic-widgets">
        <div className="styles.widget-container">
            <div className="styles.widgets">
                <div className="new-widget border m-2">
                    <div className="widget-heading">
                        <h3 id="widg-heading-554e8c72-a2c3-33d9-ae7a-5de166afb409">Heading Widget</h3>

                        <div className="widget-changer">
                            <a href="#"><i className="fa fa-arrow-up"></i></a>
                            <a href="#"><i className="fa fa-arrow-down"></i></a>
                            <select id="change-widget-554e8c72-a2c3-33d9-ae7a-5de166afb409">
                                <option value="heading" data-head="Heading Widget">Heading</option>
                                <option value="paragraph" data-head="Paragraph Widget">Paragraph</option>
                                <option value="list" data-head="List Widget">List</option>
                                <option value="image" data-head="Image Widget">Image</option>
                                <option value="link" data-head="Link Widget">Link</option>
                            </select>
                            <button className="btn btn-danger fa fa-times">
                            </button>
                        </div>
                    </div>


                    <div className="widgu p-3" id="heading-554e8c72-a2c3-33d9-ae7a-5de166afb409">
                        <div className="form-group row">
                            <label htmlFor="text-554e8c72-a2c3-33d9-ae7a-5de166afb409"
                                   className="col-sm-2 col-form-label">
                                Heading Text</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="text-554e8c72-a2c3-33d9-ae7a-5de166afb409"
                                       placeholder="Some Heading" required=""
                                       data-preview="hprev-554e8c72-a2c3-33d9-ae7a-5de166afb409"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="hprev-554e8c72-a2c3-33d9-ae7a-5de166afb409"
                                   className="col-sm-2 col-form-label">
                                Heading Size</label>
                            <div className="col-sm-10">
                                <select className="form-control" required=""
                                        data-preview="hprev-554e8c72-a2c3-33d9-ae7a-5de166afb409"
                                        id="size-554e8c72-a2c3-33d9-ae7a-5de166afb409">
                                    <option value="h1">Heading 1</option>
                                    <option value="h2">Heading 2</option>
                                    <option value="h3">Heading 3</option>
                                    <option value="h4">Heading 4</option>
                                    <option value="h5">Heading 5</option>
                                    <option value="h6">Heading 6</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-2 col-form-label">
                                Widget Name</label>
                            <div className="col-sm-10">
                                <input className="form-control" placeholder="Widget Name" required=""/>
                            </div>
                        </div>
                        <h2>PREVIEW</h2>
                        <div className="heading-preview"></div>
                    </div>

                </div>
            </div>
            <button className="btn btn-danger" id="add-widget"><i className="fa fa-plus"></i></button>
        </div>
    </div>

export default WidgetList