import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function DataTable({ tableWidth, data }) {
    return (
        <View>
            {/* Table header */}
            <View style={[styles.row, { backgroundColor: '#eee', fontWeight: 'bold', width: tableWidth }]}>
                <Text style={[styles.cell, { flex: 2 }]}>Name</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Email</Text>
                <Text style={[styles.cell, { flex: 1 }]}>Country</Text>
            </View>
            {/* Table data */}
            {data.map((item, index) => (
                <View key={index} style={[styles.row, { width: tableWidth }]}>
                    <Text style={[styles.cell, { flex: 2 }]}>{item.name}</Text>
                    <Text style={[styles.cell, { flex: 2 }]}>{item.email}</Text>
                    <Text style={[styles.cell, { flex: 1 }]}>{item.country}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 20,
        marginVertical: 10,
        minWidth: 350,
    },
    cell: {
        flex: 1,
        fontSize: 24,
    },
})