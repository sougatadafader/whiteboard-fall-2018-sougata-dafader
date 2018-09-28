import React from 'react'

const ModuleListItem = ({module, deleteModule, selectModule, selected, editModule}) =>

    <li className={selected ? 'list-group-item active': 'list-group-item'} onClick={() => selectModule(module)}>
        {module.title}
        <button
            onClick={() => editModule(module)}>
            Edit
        </button>
        <button
            onClick={() => deleteModule(module)}>
            Delete
        </button>
    </li>


export default ModuleListItem