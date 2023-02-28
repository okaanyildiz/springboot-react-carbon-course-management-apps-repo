import React from 'react'
import { EditOff, Save } from '@carbon/icons-react';
import { TextInput, Select, SelectItem } from '@carbon/react';


function EditableTableRow({
    courseName,
    setCourseName,
    place,
    setPlace,
    lecturer,
    setLecturer,
    submitEditedForm,
    cancelEdit }) {

    return (
        <tr className='table-rows'>
            <td>
                <TextInput
                    id="test2"
                    invalidText="Invalid error message."
                    labelText="Course Name"
                    placeholder="Maths, Sociology..."
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                />
            </td>
            <td>
                <Select
                    defaultValue="placeholder-item"
                    id="select-1"
                    invalidText="This is an invalid error message."
                    labelText="Course Lecturer"
                    value={lecturer}
                    onChange={(e) => setLecturer(e.target.value)}
                >
                    <SelectItem
                        text="Select a Lecturer"
                        value=""
                    />
                    <SelectItem
                        text="John Lemmon"
                        value="John Lemmon"
                    />
                    <SelectItem
                        text="Brent Hinds"
                        value="Brent Hinds"
                    />
                    <SelectItem
                        text="Wilma Flintstone"
                        value="Wilma Flintstone"
                    />
                </Select>
            </td>
            <td>
                <TextInput
                    id="test2"
                    invalidText="Invalid error message."
                    labelText="Course Place"
                    placeholder="b34, z22, f43..."
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                />
            </td>
            <td>
                <a href="#mug"><EditOff onClick={cancelEdit} /></a>
            </td>
            <td>
                <a href="#mug"><Save onClick={submitEditedForm} /></a>
            </td>
        </tr>
    )
}

export default EditableTableRow