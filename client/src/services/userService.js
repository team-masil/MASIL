import client from "./client";

class User {
  constructor(props) {
    this.user = props;
  }

  // id를 이용해 사용자 정보 조회
  getUserInfo = async (id) => {
    try {
      const user = await this.user.get(`users/${id}`);
      return user;
    } catch (e) {
      console.error(e);
    }
  };

  // user nickname 중복 검사
  checkNickname = async (id, nickName) => {
    try {
      const res = await this.user.get(
        `users/${id}/exists?nickName=${nickName}`
      );
      return res;
    } catch (e) {
      console.error(e);
    }
  };

  // 닉네임을 이용해 사용자 정보 조회
  getUserInfoByNickName = async (nickName) => {
    try {
      const params = {
        nickName,
      };

      const user = await this.user.get(`users`, {
        params,
      });

      return user;
    } catch (e) {
      console.error(e);
    }
  };

  // 사용자 정보 수정
  // 닉네임이 변경될 경우 AccessToken 재설정
  modifyUserInfo = async (id, userData) => {
    try {
      const user = await this.user.patch(`users/${id}`, userData);
      return {
        user,
        modifySuccess: true,
      };
    } catch (e) {
      console.error(e);
      return {
        user: null,
        modifySuccess: false,
      };
    }
  };

  // 회원탈퇴
  deleteUser = async (id) => {
    try {
      await this.user.delete(`users/${id}`);
      return true;
    } catch (e) {
      console.error(e);
    }
  };

  // 내가 읽은 글 조회
  getUserReadList = async (id) => {
    try {
      const res = await this.user.get(`users/read-list/${id}`);
      return res;
    } catch (e) {
      console.error(e);
    }
  };

  // 내가 좋아요한 글 목록
  getUserLikeList = async (id) => {
    try {
      const res = await this.user.get(`users/likes/${id}`);
      return res;
    } catch (e) {
      console.error(e);
    }
  };
}

const userService = new User(client);
export default userService;
