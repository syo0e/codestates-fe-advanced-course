import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

function PostList({ data }) {
  return (
    <div>
      {data.map((el, idx) => {
        return (
          <Post key={idx}>
            <StyledLink to={`/posts/${el.id}`} state={{ data: el }}>
              {el.title}
            </StyledLink>
            <div style={{ width: '15%' }}>작성자 {el.userId}</div>
          </Post>
        );
      })}
    </div>
  );
}

export default PostList;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 85%;
`;

const Post = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px #d1c7cd solid;
  padding: 10px;
`;
