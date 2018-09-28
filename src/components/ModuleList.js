import React from 'react'
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({modules, deleteModule, selectModule, selectedModule,changeModule,addModule,editModule}) =>
        <ul className="list-group">
                        <li className="list-group-item">
                            <input type="text" id="module-add" />
                            <button className="btn btn-primary fa fa-plus" onClick={()=>addModule()}></button>
                        </li>
        {
            modules.map((module, index) =>
                <ModuleListItem
                    selected={selectedModule === module}
                    selectModule={selectModule}
                    deleteModule={deleteModule}
                    editModule={editModule}
                    key={index}
                    module={module}/>
            )
        }
        </ul>

export default ModuleList