import React from "react";

const ImageWidget = ({updateImageWidget,widget}) =>
    <div className="widget-heading">
        <div className="element-container">
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Image URL</label>
            <div className="col-sm-10">
                <input className="form-control" placeholder="Some URL" id={widget.id+'-src'} required="" defaultValue={widget.src} onChange={()=>updateImageWidget(widget)}/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Widget Name</label>
            <div className="col-sm-10">
                <input className="form-control" placeholder="Widget Name" id={widget.id+'-name'} required="" defaultValue={widget.name} onChange={()=>updateImageWidget(widget)}/>
            </div>
        </div>
        <h2>PREVIEW</h2>
        </div>
        <div className="preview-container">
            <img src={widget.src}></img>
        </div>
    </div>











{/*
    return ( <div className="styles.widget-container">
        <div className="styles.widgets">
            <div className="new-widget border m-2">
                <div className="widget-heading">
                    <h3 id="widg-heading-554e8c72-a2c3-33d9-ae7a-5de166afb409">Image Widget</h3>

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
                <div className="widgu p-3" id="image-{{guid}}">
                    <div className="form-group row">
                        <label htmlFor="itext-{{guid}}" className="col-sm-2 col-form-label">
                            Image Url</label>
                        <div className="col-sm-10">
                            <input className="form-control" className="head-text" id="itext-{{guid}}"
                                   placeholder="www.abc.xyz" type="url" required data-preview="iprev-{{guid}}"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="img_widname" className="col-sm-2 col-form-label">
                            Widget Name</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="img_widname" placeholder="Widget Name" required/>
                        </div>
                    </div>
                    <h2>PREVIEW</h2>
                    <img src="" id="iprev-{{guid}}" className="heading-preview img-responsive" alt="Image"/>
                </div>
            </div>
        </div>
    </div> )
*/}

export default ImageWidget































