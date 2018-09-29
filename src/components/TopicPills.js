import React from 'react'
import TopicPill from "./TopicPill";
import WidgetList from "./WidgetList";

const TopicPills = ({topics, selectTopic, selectedTopic,deleteTopic,editTopic,addTopic}) =>
    <div className="topics mt-4">
        <ul className="nav nav-pills">
        {
            topics.map((topic, index) =>
                <TopicPill
                    selected={selectedTopic === topic}
                    selectTopic={selectTopic}
                    deleteTopic={deleteTopic}
                    editTopic={editTopic}
                    topic={topic}
                    selectTopic = {selectTopic}
                    key={index}/>
            )
        }
        <li>
            <input type="text" id="topic-add" className="btn border-dark m-1"/>
            <button className="btn btn-primary" id="topic-add-btn" onClick={() => addTopic()}>Add Topic</button>
        </li>
        </ul>
        <WidgetList/>
    </div>

export default TopicPills