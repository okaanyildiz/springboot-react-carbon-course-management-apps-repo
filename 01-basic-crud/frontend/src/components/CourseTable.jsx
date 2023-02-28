import { Grid, Column } from '@carbon/react';
import { Edit, TrashCan } from '@carbon/icons-react';
import EditableTableRow from './EditableTableRow';

function CourseTable({
    courses,
    deleteCourse,
    courseName,
    setCourseName,
    place,
    setPlace,
    lecturer,
    setLecturer,
    submitEditedForm,
    editedCourseId,
    setEditedCourseId,
    cancelEdit }) {

    return (
        <Grid>
            <Column lg={{ span: 14, offset: 1 }} md={6} sm={4}>

                <h2 className='table-header'>Courses</h2>
                <form onSubmit={submitEditedForm}>
                    <table className='table'>
                        <thead>
                            <tr className='table-headers'>
                                <td>Name</td>
                                <td>Lecturer</td>
                                <td>Place</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <>
                                    {editedCourseId === course.id ?
                                        (<EditableTableRow
                                            courses={courses}
                                            deleteCourse={deleteCourse}
                                            submitEditedForm={submitEditedForm}
                                            courseName={courseName}
                                            setCourseName={setCourseName}
                                            place={place}
                                            setPlace={setPlace}
                                            lecturer={lecturer}
                                            setLecturer={setLecturer}
                                            cancelEdit={cancelEdit}
                                        />)
                                        :
                                        (<tr className='table-rows' key={course.id}>
                                            <td>{course.courseName}</td>
                                            <td>{course.lecturer}</td>
                                            <td>{course.place}</td>
                                            <td>
                                                <a href="#mug"><Edit onClick={() => setEditedCourseId(course.id)} /></a>
                                            </td>
                                            <td>
                                                <a href="#mug"><TrashCan onClick={() => deleteCourse(course.id)} /></a>
                                            </td>
                                        </tr>)}
                                </>
                            ))}
                        </tbody>
                    </table>
                </form>

            </Column>
        </Grid>
    )
}

export default CourseTable;

