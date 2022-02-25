/* global kakao */
import React, { useState, useEffect } from "react";

const { kakao } = window;

const PostMap = (props) => {
  const [Address, setAddress] = useState("")

  useEffect(() => {
    const mapContainer = document.getElementById("kakaoMap"); // 지도를 표시할 div
    const mapOption = {
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

        var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

        // 마커와 인포윈도우를 표시합니다
        // displayMarker(locPosition);
        map.setCenter(locPosition);

        // 지도를 클릭한 위치에 표출할 마커입니다
        var marker = new kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        kakao.maps.event.addListener(map, "click", function (mouseEvent) {
          // 클릭한 위도, 경도 정보를 가져옵니다
          var latlng = mouseEvent.latLng;

          // 마커 위치를 클릭한 위치로 옮깁니다
          marker.setPosition(latlng);

          getAddress(latlng.getLat(), latlng.getLng())
        });
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);

      // displayMarker(locPosition);
      map.setCenter(locPosition);

      // 지도를 클릭한 위치에 표출할 마커입니다
      var marker = new kakao.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다
        position: map.getCenter(),
      });
      // 지도에 마커를 표시합니다
      marker.setMap(map);

      kakao.maps.event.addListener(map, "click", function (mouseEvent) {
        // 클릭한 위도, 경도 정보를 가져옵니다
        var latlng = mouseEvent.latLng;

        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);

        getAddress(latlng.getLat(), latlng.getLng())
      });
    }
  }, []);

  const getAddress = (lat, lng) => {
    let geocoder = new kakao.maps.services.Geocoder();

    let coord = new kakao.maps.LatLng(lat, lng);
    let callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
          setAddress(result[0].address.address_name)
        }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  }

  const changeAddress = () => {
    props.changeAddress(Address)
  }

  return (
    <>
      <div onClick={changeAddress}
        id="kakaoMap"
        style={{ width: "100%", height: "400px", margin: "1rem auto" }}
      ></div>
    </>
  );
};

export default PostMap;
