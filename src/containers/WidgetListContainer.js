import React from 'react'
import {connect} from 'react-redux'
import WidgetListComp from '../components/WidgetListComp'

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})


const dispatcherToPropertyMapper = dispatch =>({
    init: (widgets,topic) => dispatch({
        type:'INIT',
        widgets:widgets,
        topic:topic
    }),
    deleteWidget:(widget,topic) => dispatch({
            type: 'DELETE_WIDGET',
            widget: widget,
            topic:topic
        }),
    updateWidget: widget => dispatch({
        type: 'UPDATE_WIDGET',
        widget:widget
    })
})


const WidgetListContainer = connect(stateToPropertyMapper,dispatcherToPropertyMapper)(WidgetListComp)

export default WidgetListContainer