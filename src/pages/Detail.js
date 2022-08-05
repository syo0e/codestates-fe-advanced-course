import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail() {
  const location = useLocation();
  const { state } = location;
  const [comment, setComment] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/?postId=${state.data.id}`)
      .then(res => {
        setComment(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Content1>
        <div>{state.data.title}</div>
        <div>작성자 {state.data.userId}</div>
      </Content1>
      <Content2>
        <div>{state.data.body}</div>
        <div>댓글 {comment.length}개</div>
      </Content2>
      {comment.map((el, idx) => {
        return (
          <List key={idx}>
            <div>{el.name}</div>
            <div style={{ fontWeight: 'lighter' }}>{el.body}</div>
          </List>
        );
      })}
    </Container>
  );
}

export default Detail;

const List = styled.div`
  border-bottom: 1px #d1c7cd solid;
  margin: 10px;
`;

const Container = styled.div`
  box-shadow: 10px 5px 5px gray;
  padding: 10px;
  border-radius: 5px;
`;

const Content1 = styled.div`
  border-bottom: 2px #d1c7cd solid;
  padding: 10px 0;
  > * {
    &:first-child {
      font-weight: bold;
    }
    &:last-child {
      text-align: right;
    }
  }
`;

const Content2 = styled.div`
  border-bottom: 2px #d1c7cd solid;
  padding: 10px 0;
  margin-bottom: 30px;
  > * {
    &:last-child {
      font-weight: lighter;
      text-align: right;
    }
  }
`;
