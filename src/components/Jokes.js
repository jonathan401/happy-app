import React, { Fragment, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Typography, Tag } from 'antd';
import { cardStyles } from './Category';
import Spinner from './Spinner';
import Error from './Error';

const colorConfig = {
  Programming: 'purple',
  Pun: 'green',
  Misc: 'blue',
  Dark: 'dark',
  Spooky: 'cyan',
  Christmas: 'gold'
};

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { Title } = Typography;
  const { category, type } = useParams();
  useEffect(() => {
    // eslint-disable-next-line
    setLoading(true);
    getJokes();
  }, []);

  const getJokes = async () => {
    let url = type
      ? fetch(`https://v2.jokeapi.dev/joke/Any?type=${type}&amount=9`)
      : fetch(`https://v2.jokeapi.dev/joke/${category}?amount=9`);
    const res = await url;
    const data = await res.json();
    setJokes(data.jokes);
    setLoading(false);
  };

  const capitalize = type ? type.charAt(0).toUpperCase() + type.slice(1) : '';

  let header = type ? capitalize : category;
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div onClick={() => navigate('/')}>
        <i
          className="fa fa-long-arrow-left"
          aria-hidden="true"
          style={{
            marginTop: '2rem',
            marginLeft: '1.3rem',
            fontSize: '1.3rem',
            color: 'white',
            cursor: 'pointer'
          }}></i>
      </div>
      <div className="my-2 text-center">
        <Title level={3}>{`${header} Jokes`}</Title>
      </div>
      <div style={cardStyles}>
        {jokes.map((joke, index) => (
          <Card key={index} style={{ color: 'grey' }}>
            {
              <Tag
                color={colorConfig[joke.category]}
                style={{ marginBottom: '0.7rem' }}>
                {joke.category}
              </Tag>
            }
            {joke.type === 'twopart' ? (
              <Fragment>
                <p>{joke.setup}</p>
                <p>{joke.delivery}</p>
              </Fragment>
            ) : (
              <p style={{ marginBottom: '0' }}>{joke.joke}</p>
            )}
            <div style={{ marginTop: '0.6rem' }}>
              {joke.safe ? (
                <Tag color="green">safe</Tag>
              ) : (
                <Tag color="red">not safe</Tag>
              )}
              {joke.type === 'single' ? (
                <Tag color="lime">single</Tag>
              ) : (
                <Tag color="volcano">twopart</Tag>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Jokes;
