import Table from 'react-bootstrap/Table';

function Array() {
    // const student=['a','b','c','d'];

    // const student = [
    //     { name: 'A', sid: 1, contact: 111 },
    //     { name: 'B', sid: 1, contact: 222 },
    //     { name: 'C', sid: 1, contact: 333 },
    //     { name: 'D', sid: 1, contact: 444 }

    // ]
    // student.map((item)=>
    //     console.log(item)
    // )

    // for(let i=0;i<student.length;i++){
    //     console.warn(student[i]);
    // }

    const student = [
        {
            name: 'A', sid: 1, contact: 111, address: [
                {
                    hn: "1", city: 'ab', contry: "india",
                },
                {
                    hn: "1", city: 'ab', contry: "india",
                }, {
                    hn: "1", city: 'ab', contry: "india",
                }, {
                    hn: "1", city: 'ab', contry: "india",
                }
            ]
        },
        {
            name: 'B', sid: 1, contact: 222, address: [
                {
                    hn: "2", city: 'cd', contry: "india",
                }, {
                    hn: "2", city: 'cd', contry: "india",
                }, {
                    hn: "2", city: 'cd', contry: "india",
                }, {
                    hn: "2", city: 'cd', contry: "india",
                }
            ]
        },
        {
            name: 'C', sid: 1, contact: 333, address: [
                {
                    hn: "3", city: 'ef', contry: "india",
                }, {
                    hn: "3", city: 'ef', contry: "india",
                }, {
                    hn: "3", city: 'ef', contry: "india",
                }, {
                    hn: "3", city: 'ef', contry: "india",
                }
            ]
        },
        {
            name: 'D', sid: 1, contact: 444, address: [
                {
                    hn: "4", city: 'gh', contry: "india",
                }, {
                    hn: "4", city: 'gh', contry: "india",
                }, {
                    hn: "4", city: 'gh', contry: "india",
                }, {
                    hn: "4", city: 'gh', contry: "india",
                }
            ]
        }

    ]
    return (
        <div>
            <h1>Array List working in java...  </h1>

            {/* <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Sid</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((i,j) =>
                            <tr key={j}>
                            <td>{i.name}</td>
                            <td>{i.sid}</td>
                            <td>{i.contact}</td>
                        </tr>
                        )
                    }
                </tbody>
            </Table> */}
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Sid</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((i, j) =>
                            <tr key={j}>
                                <td>{i.name}</td>
                                <td>{i.sid}</td>
                                <td>{i.contact}</td>
                                <td>
                                    <Table striped bordered hover >
                                        <tbody>
                                            {
                                                i.address.map((j, k) =>
                                                    <tr key={k}>
                                                        <td>{j.hn}</td>
                                                        <td>{j.city}</td>
                                                        <td>{j.contry}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>


        </div>
    )
}
export default Array;