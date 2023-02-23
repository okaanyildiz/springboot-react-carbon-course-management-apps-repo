import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@carbon/react';
import { Grid, Column } from '@carbon/react';

function CourseTable() {

    const headerData = [
        {
            key: 'name',
            header: 'Name',
        },
        {
            key: 'lecturer',
            header: 'Lecturer',
        },
        {
            key: 'place',
            header: 'Place',
        },
    ];

    const rowData = [
        {
            id: 'a',
            name: "Maths",
            lecturer: 'Load Balancer 3',
            place: 'HTTP',
        }
    ];

    return (
        <Grid className='data-table'>
            <Column lg={{ span: 14, offset: 1 }} md={6} sm={4}>
                <DataTable rows={rowData} headers={headerData}>
                    {({ rows, headers, getHeaderProps, getTableProps }) => (
                        <TableContainer title="Courses">
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

export default CourseTable;

