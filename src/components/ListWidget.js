import React from "react";

const ListWidget = () =>{

    return ( <div className="styles.widget-container">
        <div className="styles.widgets">
            <div className="new-widget border m-2">
                <div className="widget-heading">
                    <h3 id="widg-heading-554e8c72-a2c3-33d9-ae7a-5de166afb409">Heading Widget</h3>

                    <div className="widget-changer">
                        <a href="#"><i className="fa fa-arrow-up mr-2 p-2 btn-secondary"></i></a>
                        <a href="#"><i className="fa fa-arrow-down mr-2 p-2 btn-secondary"></i></a>
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
                <div className="widgu  p-3" id="list-{{guid}}">
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            List Text</label>
                        <div className="col-sm-10">
                                <textarea className="form-control" className="head-text" id="ltext-{{guid}}"
                                          placeholder="List placeholder" required
                                          data-preview="lprev-{{guid}}"></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            List type</label>
                        <div className="col-sm-10">
                            <select className="form-control" required data-preview="lprev-{{guid}}"
                                    id="ltype-{{guid}}">
                                <option value="ul">Unordered List</option>
                                <option value="ol">Ordered List</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="list_widname" className="col-sm-2 col-form-label">
                            Widget Name</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="list_widname" placeholder="Widget Name" required/>
                        </div>
                    </div>
                    <h2>PREVIEW</h2>
                    <div className="heading-preview" id="lprev-{{guid}}"></div>
                </div>
            </div>
        </div>
    </div> )
}

export default ListWidget