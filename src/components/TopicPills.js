import React from 'react'
import TopicPill from "./TopicPill";

const TopicPills = ({topics, selectTopic, selectedTopic,deleteTopic,editTopic,addTopic}) =>
    <div className="topics">
        <ul className="nav nav-pills">
        {
            topics.map((topic, index) =>
                <TopicPill
                    selected={selectedTopic === topic}
                    selectTopic={selectTopic}
                    deleteTopic={deleteTopic}
                    editTopic={editTopic}
                    topic={topic}
                    key={index}/>
            )
        }
        <li>
            <input type="text" id="topic-add" />
            <button className="btn btn-primary" id="topic-add-btn" onClick={() => addTopic()}>Add Topic</button>
        </li>
        </ul>
    </div>

export default TopicPills