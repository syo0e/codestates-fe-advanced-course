import "./home.scss";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-title">
        <span>C-Board</span> 에 오신걸 환영합니다
      </div>
      <div className="home-contents">
        자유롭게 게시판에 글을 작성하고📝
        <br />
        댓글로 여러 의견을 나눠보세요✏️
      </div>
      <div className="about-project">
        이 프로젝트는 코드스테이츠 과제로 쓰기위해
        <br />
        <span>React</span>으로 만들었습니다😎
      </div>
      <div className="my-website">
        <div className="my-website-title">syo0e's Website</div>
        <a
          href="https://github.com/syo0e/codestates-fe-advanced-course"
          target="_blank"
        >
          🏴GitHub
        </a>
        <a href="https://velog.io/@kimdlzp" target="_blank">
          📖 Blog
        </a>
      </div>
    </div>
  );
};
export default Home;
