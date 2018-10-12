import CourseService from '../services/CourseService'

const WidgetReducer = (state ={widgets:[]},action) =>{
    switch (action.type){
        case "INIT":
            return {
                widgets: CourseService.findWidgets(action.topic),
                selectedTopic:action.topic
            }
        case "DELETE_WIDGET":
            CourseService.deleteWidget(state.selectedTopic, action.widget)
            const newWidgets = CourseService.findWidgets(state.selectedTopic)
            return{
                widgets:newWidgets.slice(0),
                selectedTopic: state.selectedTopic
            }
        case "UPDATE_WIDGET":
            CourseService.updateWidget(state.selectedTopic,action.widget)
            //console.log(CourseService.findWidgets(state.selectedTopic).slice(0))
            return{
                widgets: CourseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic:state.selectedTopic
            }
            default:
                return state
}
}

export default WidgetReducer