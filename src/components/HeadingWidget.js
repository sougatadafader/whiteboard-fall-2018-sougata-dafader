import React from "react";

const HeadingWidget = ({updateHeadingWidget,widget}) =>
    <div className="heading-widget">
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Heading Text</label>
            <div className="col-sm-10">
                <input className="form-control" placeholder="Some Heading" id={widget.id+'-heading'} required="" defaultValue={widget.text} onChange={()=>updateHeadingWidget(widget)}/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Heading Size</label>
            <div className="col-sm-10">
                <select className="form-control" required="" id={widget.id+'-size'} defaultValue={widget.size} onChange={()=>updateHeadingWidget(widget)}>
                    <option value="1" >Heading 1</option>
                    <option value="2" >Heading 2</option>
                    <option value="3" >Heading 3</option>
                    <option value="4" >Heading 4</option>
                    <option value="5" >Heading 5</option>
                    <option value="6" >Heading 6</option>
                </select>
            </div>
        </div>
        <h2>PREVIEW</h2>
        <div>

        {widget.size === 1 && <h1>{widget.text}</h1>}
        {widget.size === 2 && <h2>{widget.text}</h2>}
        {widget.size === 3 && <h3>{widget.text}</h3>}
        {widget.size === 4 && <h4>{widget.text}</h4>}
        {widget.size === 5 && <h5>{widget.text}</h5>}
        {widget.size === 6 && <h6>{widget.text}</h6>}
        </div>
    </div>
    {/* return ( <div className="styles.widget-container">
        <div className="styles.widgets">
            <div className="new-widget border m-2">
                <div className="widget-heading">
                    <h3 >Heading Widget</h3>

                    <div className="widget-changer">
                        <a href="#"><i className="fa fa-arrow-up mr-2 p-2 btn-secondary"></i></a>
                        <a href="#"><i className="fa fa-arrow-down mr-2 p-2 btn-secondary"></i></a>
                        <select >
                            <option value="heading">Heading</option>
                            <option value="paragraph">Paragraph</option>
                            <option value="list">List</option>
                            <option value="image">Image</option>
                            <option value="link">Link</option>
                        </select>
                        <button className="btn btn-danger fa fa-times">
                        </button>
                    </div>
                </div>
                <div className="widgu p-3" >
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Heading Text</label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   placeholder="Some Heading" required=""
                                   />
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
    </div> )
    */}

export default HeadingWidget