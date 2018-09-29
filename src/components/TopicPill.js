import React from 'react'

const TopicPill = ({topic, selected,deleteTopic,editTopic}) =>
    <li className="nav-item mr-2">
        <a className="nav-link btn btn-secondary" href="#">{topic.title}<span className="fa fa-pencil ml-3" onClick={() => editTopic(topic)}></span>
            <span className="fa fa-trash ml-1" onClick={() => deleteTopic(topic)}></span></a>
    </li>

export default TopicPill