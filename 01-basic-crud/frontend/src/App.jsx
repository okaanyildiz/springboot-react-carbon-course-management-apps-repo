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
  const [courseName, setCourseName] = useState("");
  const [place, setPlace] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [editedCourseId, setEditedCourseId] = useState(null)

  const submitNewForm = (e) => {
    e.preventDefault();

    const newCourse = {
      id: nanoid(),
      courseName: courseName,
      lecturer: lecturer,
      place: place
    }

    setCourses([...courses, newCourse]);

    setCourseName("");
    setPlace("")
    setLecturer("")
  }

  const submitEditedForm = (e) => {
    e.preventDefault();

    const editedCourse = {
      id: editedCourseId,
      courseName: courseName,
      lecturer: lecturer,
      place: place
    }

    const newCourses = [...courses]
    const courseIndex = courses.findIndex(course => course.id === editedCourseId);

    newCourses[courseIndex] = editedCourse;

    setCourses(newCourses);

    setCourseName("");
    setPlace("")
    setLecturer("")
    setEditedCourseId(null);
  }

  const cancelEdit = () => {
    setCourseName("");
    setPlace("")
    setLecturer("")
    setEditedCourseId(null);
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
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
              <TextInput
                id="test2"
                invalidText="Invalid error message."
                labelText="Course Place"
                placeholder="b34, z22, f43..."
                name="place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
              <Select
                defaultValue="placeholder-item"
                id="select-1"
                invalidText="This is an invalid error message."
                labelText="Course Lecturer"
                name="lecturer"
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
        submitEditedForm={submitEditedForm}
        courseName={courseName}
        setCourseName={setCourseName}
        place={place}
        setPlace={setPlace}
        lecturer={lecturer}
        setLecturer={setLecturer}
        editedCourseId={editedCourseId}
        setEditedCourseId={setEditedCourseId}
        cancelEdit={cancelEdit}
      />
    </div>
  );
}

export default App;
