import React from 'react'
import styles from './WidgetList.style.css';
import LinkWidget from "./LinkWidget";
import HeadingWidget from "./HeadingWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import ParagraphWidget from "./ParagraphWidget";

const WidgetList = ({widgets}) =>

    <div className="topic-widgets" id="topic-widgets">
        <ul className="list-group">
            {
                widgets.map((widget, index) =>
                    <li key={index} className="list-group-item">
                        {widget.id}
                    </li>
                )
            }
        </ul>
        <button className="btn btn-danger pull-right m-4" id="add-widget"><i className="fa fa-plus"></i></button>
    </div>
        {/*Widget

        <div className="row">
            <div className="col">
                <label className="float-right ">
                    <span className="text-dark pr-2" style={{fontSize:"x-large"}} >Preview</span>
                    <div className="btn border-dark float-right mr-2">
                        Toggle
                    </div>
                </label>
                <button className="float-right btn btn-primary mr-3 " title="Save">
                    Save
                </button>
            </div>
        </div>
        <HeadingWidget/>
        <ParagraphWidget/>
        <ListWidget/>
        <LinkWidget/>
        <ImageWidget/>


        */}
        {/*
        <div className="styles.widget-container">
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
                    <hr/>
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
                    <hr/>
                    <div className="widgu p-3" id="paragraph-{{guid}}">
                        <div className="form-group row">
                            <label htmlFor="ptext-{{guid}}" className="col-sm-2 col-form-label">
                                Paragraph Text</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" className="head-text" id="ptext-{{guid}}"
                                          placeholder="Some Paragraph" required
                                          data-preview="pprev-{{guid}}"></textarea>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="para_widname" className="col-sm-2 col-form-label">
                                Widget Name</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="para_widname" placeholder="Widget Name" required/>
                            </div>
                        </div>
                        <h2>PREVIEW</h2>
                        <p className="heading-preview" id="pprev-{{guid}}"></p>
                    </div>
                    <hr/>
                    <div className="widgu p-3" id="link-{{guid}}">
                        <div className="form-group row">
                            <label htmlFor="linkurl-{{guid}}" className="col-sm-2 col-form-label">
                                Link URL</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="url" className="head-text" id="linkurl-{{guid}}"
                                       placeholder="Some Link" value="#" required data-preview="linkprev-{{guid}}"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="linktext-{{guid}}" className="col-sm-2 col-form-label">
                                Link Text</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" className="head-text" id="linktext-{{guid}}"
                                       placeholder="Some Link" value="Link Text" required
                                       data-preview="linkprev-{{guid}}"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="link_widname" className="col-sm-2 col-form-label">
                                Widget Name</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="link_widname" placeholder="Widget Name" required/>
                            </div>
                        </div>
                        <h2>PREVIEW</h2>
                        <a className="heading-preview" id="linkprev-{{guid}}"></a>
                    </div>
                    <hr/>
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
            <button className="btn btn-danger" id="add-widget"><i className="fa fa-plus"></i></button>
        </div> */}


export default WidgetList