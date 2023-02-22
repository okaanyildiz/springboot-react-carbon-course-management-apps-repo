import './App.scss';
import { Grid, Column } from '@carbon/react';
import { Form, Stack, TextInput, Select, SelectItem, Button } from '@carbon/react';
import { useState } from 'react';
import Nanoid, { nanoid } from 'nanoid'
import AppHeader from './components/AppHeader';
import CourseTable from './components/CourseTable';

function App() {

  const [course, setCourse] = useState("");
  const [place, setPlace] = useState("");
  const [teacher, setTeacher] = useState("");
  const [courses, setCourses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCourses(prev => [...prev,
    {
      id: nanoid(),
      name: course,
      teacher: teacher,
      place: place
    }]);

    setCourse("");
    setTeacher("");
    setPlace("");
    console.log(courses)
  }

  return (
    <div className="App">
      <AppHeader />
      <Grid className="main-page" fullWidth>
        <Column lg={{ span: 8, offset: 4 }} md={8} sm={4} className="save-course">
          <h1 className='header'>Create New Courses</h1>
          <Form onSubmit={handleSubmit}>
            <Stack gap={6}>
              <TextInput
                id="test2"
                invalidText="Invalid error message."
                labelText="Course Name"
                placeholder="Math, Bio..."
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
              <TextInput
                id="test3"
                invalidText="Invalid error message."
                labelText="Course Place"
                placeholder="A-11, C-34..."
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
              <Select
                defaultValue="placeholder-item"
                placeholder="Select a teacher"
                id="select-1"
                invalidText="This is an invalid error message."
                labelText="Course Teacher"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
              >
                <SelectItem
                  text="Select a Teacher"
                  value=""
                />
                <SelectItem
                  text="Jonas Pringles"
                  value="John Pringles"
                />
                <SelectItem
                  text="John Lemmon"
                  value="John Lemmon"
                />
                <SelectItem
                  text="Mubu Bugmug"
                  value="Mubu Bugmug"
                />
              </Select>
              <Button
                className="btn-submit"
                kind="primary"
                tabIndex={0}
                type="submit"
              >
                Create
              </Button>
            </Stack>
          </Form>
        </Column>
      </Grid>

      <CourseTable courses={courses} />

    </div>
  );
}

export default App;
