/* global kakao */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { kakao } = window;

const KakaoMap = () => {
  const navigate = useNavigate();

  const [MapInfo, setMapInfo] = useState([]);

  useEffect(() => {
    axios.get("/api/contents/getAdress").then((res) => {
      if (res.data.success) {
        setMapInfo(res.data.mapInfo);
      } else {
        alert("주소정보를 불러올 수 없습니다.");
      }
    });
    displayMap();
    // 렌더링 후에 useEffect가 실행되고 state가 업데이트 되기 전에 지도가 렌더링 되기 때문에
    // MapInfo가 업데이트되면 useEffect를 한번 더 실행하기 위해서 인자를 넣어준다.
    // MapInfo만 넣으면 useEffect가 계속 실행된다.
  }, [MapInfo.length]);

  const displayMap = () => {
    const mapContainer = document.getElementById("kakaoMap"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막는다
    map.setZoomable(false);

    // 지도에 확대 축소 컨트롤을 생성한다
    const zoomControl = new kakao.maps.ZoomControl();
    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다.

        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);

        var geocoder = new kakao.maps.services.Geocoder();

        MapInfo.forEach((address, i) => {
          geocoder.addressSearch(address.address, function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
              var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

              var marker = new kakao.maps.Marker({
                map: map,
                position: coords,
              });
              marker.setMap(map);

              var iwContent = `<div style="width:150px; padding:7px;">
                                <div style="font-size:15px; font-weight:600;">${address.category}</div>
                                <div style="font-size:12px">${address.title}</div>
                              </div>`;

              var infowindow = new kakao.maps.InfoWindow({
                content: iwContent,
              });
              //마커에 마우스 오버 시 정보 표시
              kakao.maps.event.addListener(marker, "mouseover", function () {
                infowindow.open(map, marker);
              });
              //마커에 마우스 아웃 시 정보 사라짐
              kakao.maps.event.addListener(marker, "mouseout", function () {
                infowindow.close();
              });
              //마커 클릭 시 해당 컨텐트로 이동
              kakao.maps.event.addListener(marker, "click", function () {
                navigate(`content/${address._id}`)
              });
            }
          });
        });
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);

      var geocoder = new kakao.maps.services.Geocoder();

      MapInfo.forEach((address, i) => {
        geocoder.addressSearch(address.address, function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            var marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });
            marker.setMap(map);
          }
        });
      });
    }
  };

  return (
    <>
      <div
        id="kakaoMap"
        style={{ width: "80%", height: "500px", margin: "3rem auto" }}
      ></div>
    </>
  );
};

export default KakaoMap;
