import React from "react";

function Home() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a href="/register">글쓰기</a>
          </li>
          <li>로그인</li>
        </ul>
      </div>
      <div>
        <h2>
          사회성도 기르고 친구들과 더 신나게 놀 수 있도록 내 주변의 반려인들을
          찾아보세요! 반려동물 카페도 같이 가고, 여행과 산책도 함께 할 수
          있어요.
        </h2>
      </div>
      <div>
        <ul>
          <li>궁금해요</li>
          <li>마실가요</li>
          <li>찾아줘요</li>
          <li>나눠봐요</li>
        </ul>
      </div>
      <div>
        <button>최신</button>
        <button>인기</button>
      </div>
      <div>게시글 목록</div>
    </div>
  );
}

export default Home;
