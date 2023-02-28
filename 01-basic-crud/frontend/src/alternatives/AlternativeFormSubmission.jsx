import './App.scss';
import { useState } from 'react';
import { Grid, Column } from '@carbon/react';
import { Form, Stack, TextInput, Select, SelectItem, Button } from '@carbon/react';
import mockData from './mock-data.json';
import AppHeader from './components/AppHeader';
import CourseTable from './components/CourseTable';
import { nanoid } from 'nanoid'

function App() {

    const [courses, setCourses] = useState(mockData);

    const formData = {
        courseName: "",
        lecturer: "",
        place: ""
    }

    const handleNewFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        formData[fieldName] = fieldValue;
    }

    const submitNewForm = (e) => {
        e.preventDefault();

        const newCourse = {
            id: nanoid(),
            courseName: formData.courseName,
            lecturer: formData.lecturer,
            place: formData.place
        }

        setCourses([...courses, newCourse]);

        document.querySelector('[name="courseName"]').value = "";
        document.querySelector('[name="place"]').value = "";
        document.querySelector('[name="lecturer"]').value = "";

    }

    const deleteCourse = (courseId) => {
        const remainingCourses = courses.filter(course => course.id !== courseId);
        setCourses(remainingCourses);
    }



    return (
        <div className="App">
            <AppHeader />

            <h1 className='form-header'>Create a New Course</h1>

            <Grid>
                <Column lg={{ span: 5, offset: 3 }} md={6} sm={4}>
                    <Form onSubmit={submitNewForm}>
                        <Stack gap={6}>
                            <TextInput
                                id="test2"
                                invalidText="Invalid error message."
                                labelText="Course Name"
                                placeholder="Maths, Sociology..."
                                name="courseName"
                                onChange={handleNewFormChange}
                            />
                            <TextInput
                                id="test2"
                                invalidText="Invalid error message."
                                labelText="Course Place"
                                placeholder="b34, z22, f43..."
                                name="place"
                                onChange={handleNewFormChange}
                            />

                            <Select
                                defaultValue="placeholder-item"
                                id="select-1"
                                invalidText="This is an invalid error message."
                                labelText="Course Lecturer"
                                name="lecturer"
                                onChange={handleNewFormChange}
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
                            <Button
                                className="btn-submit"
                                kind="primary"
                                tabIndex={0}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Form>
                </Column>
            </Grid>

            <CourseTable
                courses={courses}
                deleteCourse={deleteCourse}
            />

        </div>
    );
}

export default App;
