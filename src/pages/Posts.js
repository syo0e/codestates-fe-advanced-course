import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { useEffect, useState } from 'react';

import PostList from '../components/PostList';

function Posts() {
  const [posts, setPosts] = useState();
  const [isLoading, setLoading] = useState(true);
  const [currentData, setCurrentData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [btnList, setBtnList] = useState([]);
  const [disableBtn, setDisableBtn] = useState('lt');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data);
        setLoading(false);
        let newData = res.data.slice();
        setCurrentData(newData.slice(0, 10));
        let btns = [...Array(Math.ceil(res.data.length / 5)).keys()];
        btns = btns.map((el, idx) => {
          return el + 1;
        });
        let newBtn = btns.slice(0, 5);
        setBtnList(newBtn);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleClick = number => {
    let newData = posts.slice();
    setCurrentPage(number);
    setCurrentData(newData.slice((number - 1) * 10, number * 10));
    if (number === 1) {
      setDisableBtn('lt');
    } else if (number === Math.ceil(posts.length / 10) - 1) {
      setDisableBtn('rt');
    } else {
      setDisableBtn();
    }
  };

  const rightClick = () => {
    if (currentPage === btnList[btnList.length - 1]) {
      let newBtnList = btnList.slice();
      newBtnList.shift();
      newBtnList.push(btnList[btnList.length - 1] + 1);
      setBtnList(newBtnList);
    }
    if (currentPage === Math.ceil(posts.length / 10) - 1) {
      setDisableBtn('rt');
    } else {
      setDisableBtn();
    }
    let newData = posts.slice();
    setCurrentPage(currentPage + 1);
    setCurrentData(newData.slice(currentPage * 10, (currentPage + 1) * 10));
  };

  const leftClick = () => {
    if (currentPage === btnList[0]) {
      let newBtnList = btnList.slice();
      newBtnList.pop();
      newBtnList.unshift(btnList[0] - 1);
      setBtnList(newBtnList);
    }
    if (currentPage - 1 === 1) {
      setDisableBtn('lt');
    } else {
      setDisableBtn();
    }
    let newData = posts.slice();
    setCurrentPage(currentPage - 1);
    setCurrentData(newData.slice((currentPage - 2) * 10, (currentPage - 1) * 10));
  };

  const btns = btnList.length
    ? btnList.map((el, idx) => {
        return (
          <StyledBtn className={currentPage === el ? 'selected' : null} key={idx} onClick={() => handleClick(el)}>
            {el}
          </StyledBtn>
        );
      })
    : null;

  return (
    <StyledDiv>
      <PostList data={currentData} />
      <ButtonContainer>
        <StyledBtn disabled={disableBtn === 'lt'} onClick={() => leftClick()}>
          &lt;
        </StyledBtn>
        {btns}
        <StyledBtn disabled={disableBtn === 'rt'} onClick={() => rightClick()}>
          &gt;
        </StyledBtn>
      </ButtonContainer>
    </StyledDiv>
  );
}

export default Posts;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const StyledDiv = styled.div`
  border-top: 5px #d1c7cd solid;
  padding-top: 15px;
`;

const StyledBtn = styled.button`
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #2c4af5;
  }
  &.selected {
    color: white;
    background-color: #2c4af5;
  }
`;
