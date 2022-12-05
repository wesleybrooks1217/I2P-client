import {HoverCard, Button, Text, Timeline} from '@mantine/core';
import {PieChart, Pie, Tooltip, BarChart, 
CartesianGrid, XAxis, YAxis, Legend, Bar} from 'recharts';
import {useState} from 'react';
import {CurrencyDollar} from 'tabler-icons-react';

function Cost() {

    const [active, setActive] = useState(0);
    const [salary, setSalary] = useState(59600);

    const averageAidAwarded = [
        {
            "name": "Average aid for low income students",
            "value": 19323
        },

        {
            "name": "Average aid for lower middle income students",
            "value": 10206
        },

        {
            "name": "Average aid for middle income students", 
            "value": 16673
        },

        {
            "name": "Average aid for upper middle income students",
            "value":13332
        },

        {
            "name": "Average aid for high income students",
            "value":10926
        }
    ];

    const averageNetPrice = [
        {
            "name": "30,000",
            "value": 6293
        },

        {
            "name": "48,000",
            "value": 8943
        },

        {
            "name": "75,000",
            "value": 12284
        },

        {
            "name": "110,000",
            "value": 14690
        }

    ];

    const changeBullet = (num) => {

        if (num === 0) {
            setActive(0);
            setSalary(59600);
        } else if (num === 1) {
            setActive(1);
            setSalary(74500);
        }
    }



    return (
        <div>
            <p style = {{
                fontSize: 24,
                fontWeight: "bold"
            }}>Financial Information</p>

            <div style = {{
                display: "flex",
                flexDirection: "row",
                marginTop: 75
            }}>

                <Timeline active = {active} bulletSize = {24} lineWidth = {2}>

                    <Timeline.Item title = {"6 year earnings"}
                    onClick = {() => changeBullet(0)}
                    bullet = {<CurrencyDollar /> }>
                        <Text> Average earnings after 6 years</Text>
                    </Timeline.Item>

                    <Timeline.Item title = {"10 year earnings"}
                    onClick = {() => changeBullet(1)}
                    bullet = {<CurrencyDollar />}>
                        <Text> Average earnings after 10 years </Text>
                    </Timeline.Item>

                </Timeline>

                <p style = {{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'green',
                    marginLeft: 175,
                    marginTop: 50
                }}>{salary}</p>

            </div>

            <div style = {{
                marginTop: 50
            }}>
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button>Instate tuition</Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size = "sm">
                            15,000
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>

                <HoverCard width={280} shadow="md" style = {{
                    marginLeft: 100
                }}>
                    <HoverCard.Target>
                        <Button>Out of State tuition</Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size = "sm">
                            45,000
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>

                <HoverCard width={280} shadow="md" style = {{
                    marginLeft: 100
                }}>
                    <HoverCard.Target>
                        <Button>Average financial aid</Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size = "sm">
                            9,583
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>

                <HoverCard width={280} shadow="md" style = {{
                    marginLeft: 100
                }}>
                    <HoverCard.Target>
                        <Button>Average cost of attendance</Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size = "sm">
                            23,216
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>

                

            </div>

            <div style = {{
                marginTop: 150,
                display: "flex",
                flexDirection: "row"
            }}>

                <div>
                    <p style = {{
                        fontSize: 18,
                        fontWeight: "bold",
                        position: "relative",
                        right: 50
                    }}> Average aid based on income</p>
                    <PieChart width = {500} height = {500}
                    style = {{
                        position: "relative",
                        right: 150
                    }}>
                        <Tooltip />
                        <Pie data = {averageAidAwarded} dataKey = {"value"} nameKey = {"name"} fill = "#82ca9d"/>
                    </PieChart>
                </div>

                <div>
                    <p style = {{
                        marginBottom: 50,
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginLeft: 200
                    }}> Average net price based on income </p>
                    <BarChart width = {700} height = {500} data = {averageNetPrice}>
                        <CartesianGrid strokeDasharray={"3 3"} />
                        <XAxis dataKey={"name"} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={"value"} fill = "#8884d8"/>
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Cost;