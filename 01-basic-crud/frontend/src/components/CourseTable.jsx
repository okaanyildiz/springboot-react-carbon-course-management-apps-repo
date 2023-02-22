import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@carbon/react';
import { Grid, Column } from '@carbon/react';

function CourseTable({ courses }) {

    const headerData = [
        {
            header: 'Name',
            key: 'name',
        },
        {
            header: 'Teacher',
            key: 'teacher',
        },
        {
            header: 'Place',
            key: 'place',
        },
    ];

    return (
        <Grid className="courseTable" fullWidth>
            <Column lg={{ span: 14, offset: 1 }} md={8} sm={4} className="save-course">
                <DataTable rows={courses} headers={headerData}>
                    {({ rows, headers, getHeaderProps, getTableProps }) => (
                        <TableContainer title="DataTable">
                            <Table {...getTableProps()}>
                                <TableHead>
                                    <TableRow>
                                        {headers.map((header) => (
                                            <TableHeader {...getHeaderProps({ header })}>
                                                {header.header}
                                            </TableHeader>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id}>
                                            {row.cells.map((cell) => (
                                                <TableCell key={cell.id}>{cell.value}</TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </DataTable>
            </Column>
        </Grid>
    )
}

export default CourseTable