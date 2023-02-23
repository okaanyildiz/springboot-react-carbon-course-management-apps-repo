import './App.scss';
import { Grid, Column } from '@carbon/react';
import { Form, Stack, TextInput, Select, SelectItem, Button } from '@carbon/react';
import AppHeader from './components/AppHeader';
import CourseTable from './components/CourseTable';

function App() {
  return (
    <div className="App">
      <AppHeader />

      <h1 className='form-header'>Create a New Course</h1>

      <Grid>
        <Column lg={{ span: 5, offset: 3 }} md={6} sm={4}>
          <Form>
            <Stack gap={6}>
              <TextInput
                id="test2"
                invalidText="Invalid error message."
                labelText="Course Name"
                placeholder="Maths, Sociology..."
              />
              <TextInput
                id="test2"
                invalidText="Invalid error message."
                labelText="Course Place"
                placeholder="b34, z22, f43..."
              />

              <Select
                defaultValue="placeholder-item"
                id="select-1"
                invalidText="This is an invalid error message."
                labelText="Course Lecturer"
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

      <CourseTable />
    </div>
  );
}

export default App;
