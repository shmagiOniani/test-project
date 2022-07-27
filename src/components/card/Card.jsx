import React, { useEffect, PureComponent } from "react";
import { Row, Col } from "antd";
import XMLParser from "react-xml-parser";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./Card.scss";

const chartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Card({ data }) {
  let colorArr = [
    "#3498db",
    "#9b59b6",
    "#e91e63",
    "#4caf50",
    "#f44336",
    "#673ab7",
  ];
  const getColor = () => {
    return colorArr[Math.floor(Math.random() * 3) + 1];
  };

  useEffect(() => {
    if (data.avatar) {
      axios
        .get(data?.avatar, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
          },
        })
        .then((res) => {
          console.log(res);
          var xml = new XMLParser().parseFromString(res);
          console.log(xml);
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  }, []);

  return (
    <div className="card-wrapper">
      <div className="container">
        <Row>
          <Col xs={6} className="img-name">
            <div className="img-wrapper">
              {/* <img src={data?.avatar} alt='user-logo'/> */}
              <div className="avatar" style={{ backgroundColor: getColor() }}>
                {data?.name.slice(0, 1)}
              </div>
            </div>
          </Col>
          <Col xs={18}>
            <div className="name">
              <span>
                {data?.name.length > 14
                  ? `${data?.name.slice(0, 14)}...`
                  : data?.name}
              </span>
              <span>{data?.occupation}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={18}>
            <div className="statistics">
              <div className="charts">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart width={190} height={80} data={chartData}>
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <span>Conversions 4/12 - 4/30</span>
            </div>
          </Col>
          <Col xs={6}>
            <div className="numbers">
              <div className="impressions">
                <span>20,345</span>
                <span>impressions</span>
              </div>
              <div className="conversions">
                <span>1,987</span>
                <span>conversions</span>
              </div>
              <div className="total">
                <span>$53,982</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Card;
