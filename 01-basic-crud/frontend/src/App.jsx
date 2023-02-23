import './App.scss';
import { useState } from 'react';
import { Grid, Column } from '@carbon/react';
import { Form, Stack, TextInput, Select, SelectItem, Button } from '@carbon/react';
import AppHeader from './components/AppHeader';
import CourseTable from './components/CourseTable';

function App() {

  const [course, setCourse] = useState("");
  const [place, setPlace] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [courses, setCourses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourses((prev) => [...prev, {
      name: course,
      lecturer: lecturer,
      place: place
    }])
    setCourse("");
    setLecturer("");
    setPlace("");
  }

  return (
    <div className="App">
      <AppHeader />

      <h1 className='form-header'>Create a New Course</h1>

      <Grid>
        <Column lg={{ span: 5, offset: 3 }} md={6} sm={4}>
          <Form onSubmit={handleSubmit}>
            <Stack gap={6}>
              <TextInput
                id="test2"
                invalidText="Invalid error message."
                labelText="Course Name"
                placeholder="Maths, Sociology..."
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
              <TextInput
                id="test2"
                invalidText="Invalid error message."
                labelText="Course Place"
                placeholder="b34, z22, f43..."
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />

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

      <CourseTable courses={courses}/>
    </div>
  );
}

export default App;