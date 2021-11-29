import GNB from "components/GNB";
import LoginModal from "components/Modal/LoginModal";
import React, { useState } from "react";

function Home() {
  const [loginModal, setLoginModal] = useState(false);

  const handleLoginModal = () => setLoginModal((prev) => !prev);

  return (
    <>
      <GNB />
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
        <button type="button">최신</button>
        <button type="button">인기</button>
      </div>
      <div>게시글 목록</div>
    </>
  );
}

export default Home;
