import React,{Component} from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import LinkWidget from "./LinkWidget";
import ImageWidget from "./ImageWidget";
import ListWidget from "./ListWidget";
class WidgetListComp extends Component {

    constructor(props){
        super(props);
        props.init(props.widgetsInit,props.topic)

    }
    componentDidUpdate(){
        //alert('Refreshed')
        this.props.init(this.props.widgetsInit,this.props.topic)
    }
    updateHeadingWidget = (widget) =>
    {
        let newHeading = document.getElementById(widget.id+'-heading').value
        let newSize = document.getElementById(widget.id+'-size').value
        //alert(newHeading)
        widget.text = newHeading
        widget.size = parseInt(newSize)
        //console.log(widget)
        this.props.updateWidget(widget)
    }
    updateParagraphWidget = (widget) =>
    {
        let newHeading = document.getElementById(widget.id+'-para').value

        //alert(newHeading)
        widget.text = newHeading

        //console.log(widget)
        this.props.updateWidget(widget)
    }

    updateLinkWidget = (widget) =>
    {
        let newHeading = document.getElementById(widget.id+'-name').value
        let newUrl = document.getElementById(widget.id+'-url').value
        let newText = document.getElementById(widget.id+'-text').value
        widget.name = newHeading
        widget.href = newUrl
        widget.text = newText
        this.props.updateWidget(widget)
    }
    updateImageWidget = (widget) =>
    {
        alert(widget.src)

    }
    render(){
        return(<ul className="list-group">
                {
                    this.props.widgets.map((widget, index) =>
                        <li key={index} className="list-group-item">
                            <div className="row">
                            <h3 className="ml-4">{widget.type} Widget</h3>
                            <button
                                onClick={() => this.props.deleteWidget(widget)}
                                className="btn btn-danger pull-right fa fa-2x fa-times">

                            </button>
                            </div>
                            <div className="clearfix"></div>
                            <div>
                                {widget.type === "HEADING" && <HeadingWidget updateHeadingWidget={this.updateHeadingWidget}
                                                                         widget={widget}/>}
                                {widget.type === "PARAGRAPH" && <ParagraphWidget updateParagraphWidget={this.updateParagraphWidget}
                                                                       widget={widget}/>}
                                {widget.type === "LINK" && <LinkWidget updateLinkWidget={this.updateLinkWidget}
                                                                                 widget={widget}/>}
                                {widget.type === "IMAGE" && <ImageWidget updateImageWidget={this.updateImageWidget}
                                                                       widget={widget}/>}
                            </div>
                        </li>)
                }

            </ul>

        )
    }

}
export default WidgetListComp