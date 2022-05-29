import React, { useState } from "react";
import { Select, Typography, Row, Col, Card } from "antd";
import moment from "moment";
import { useGetNewsQuery } from "../services/cryptoNews";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const count = simplified ? 6 : 12;
  const { data: Crypto } = useGetCryptosQuery(100);
  const { data, isFetching, isError } = useGetNewsQuery({
    newsCategory,
    count,
  });
  if (isFetching) return "Loading";
  if (isError) return "Error in requesting";

  if (data?.value.lenght === 0) return "No data to show";
  console.log(data?.value);
  const demo =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder={newsCategory}
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {Crypto?.data?.coins?.map((currency) => (
              <Option value={currency.name}>{currency.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {data?.value.map((nw, i) => {
        return (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={`${nw.url}`} target="_blank" rel="noreferrer">
                <div className="new-image-container">
                  <Title className="news-title" level={4}>
                    {nw.name}
                  </Title>
                  <img
                    alt="news"
                    src={nw?.image?.thumbnail?.contentUrl || demo}
                  />
                </div>
                <p>
                  {nw.description > 100
                    ? `${nw.description.substring(0, 100)}...`
                    : nw.description}
                </p>
                <div className="provider-container">
                  <Text
                    style={{ color: "red" }}
                  >{`Organization : ${nw?.provider[0].name}`}</Text>
                </div>
                <Text>{moment(nw.datePublished).startOf("ss").fromNow()}</Text>
              </a>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default News;
