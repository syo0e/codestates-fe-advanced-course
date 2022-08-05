import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-title">
        <Link to="/">
          <span>C-Board</span>
        </Link>
      </div>
      <div className="header-menu">
        <Link to="board-list">게시판</Link>
        <Link to="add-board">글쓰기</Link>
        <Link to="/login">로그인</Link>
        <Link to="/sign-up">회원가입</Link>
      </div>
    </div>
  );
};

export default Header;
