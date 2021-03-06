import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Typography } from 'antd';

const Category = ({ categories, types }) => {
  // navigate user
  const navigate = useNavigate();
  const { Title } = Typography;

  return (
    <div>
      <div>
        <Title level={1} className="m-2">
          Happy App
        </Title>
      </div>
      <div className="container">
        <div className="categories text-center">
          <Title level={3} style={headerStyle}>
            Category
          </Title>
        </div>
        <div style={cardStyles}>
          {categories.map((category, index) => {
            return (
              <Card
                onClick={() => navigate(`/category/${category.category}`)}
                key={index}
                title={`${category.category} Jokes`}
                style={{ cursor: 'pointer' }}>
                <p>{`A collection of ${category.category} Jokes`}</p>
              </Card>
            );
          })}
        </div>
        <div>
          <div className="types text-center">
            <Title level={3} style={headerStyle}>
              Joke Type
            </Title>
          </div>
          <div style={cardStyles}>
            {types.map((type, index) => {
              return (
                <Card
                  onClick={() => navigate(`/type/${type.type.toLowerCase()}`)}
                  key={index}
                  title={`${type.type} Jokes`}
                  style={{ cursor: 'pointer' }}>
                  <p>{`A collection of ${type.type} Jokes`}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const cardStyles = {
  display: 'grid',
  padding: '2rem 0',
  gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
  gridGap: '0.7rem',
  justifyContent: 'center',
  alignItems: 'center'
};

const headerStyle = {
  margin: '0'
};

export { cardStyles, Category as default };
