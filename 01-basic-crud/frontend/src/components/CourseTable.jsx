import { Grid, Column } from '@carbon/react';
import { Edit, TrashCan } from '@carbon/icons-react';

function CourseTable({ courses, deleteCourse }) {

    return (
        <Grid>
            <Column lg={{ span: 14, offset: 1 }} md={6} sm={4}>

                <h2 className='table-header'>Courses</h2>
                <table className='table'>
                    <tbody>
                        <tr className='table-headers'>
                            <td>Name</td>
                            <td>Lecturer</td>
                            <td>Place</td>
                            <td></td>
                            <td></td>
                        </tr>
                        {courses.map(course =>
                            <tr className='table-rows' key={course.id}>
                                <td>{course.name}</td>
                                <td>{course.lecturer}</td>
                                <td>{course.place}</td>
                                <td>
                                    <a href="#mug"><Edit /></a>
                                </td>
                                <td>
                                    <a href="#mug"><TrashCan onClick={() => deleteCourse(course.id)} /></a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </Column>
        </Grid>
    )
}

export default CourseTable;

