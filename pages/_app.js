import axios from 'axios';
axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';

export default function App({ Component, pageProps }) {
	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
}

/*
  - Next13에서는 page폴더 안쪽에 jsx를 넣으면 해당 파일명으로 자동 라우터 설정됨 (page router)
    _document.js (Head영역 설정)
    _app.js (index.js를 가져와서 document를 적용해서 루트 컴포넌트를 작동시키는 시동파일)
    index.js (초기 메인페이지 컴포넌트)
*/

/*
  - Next13에서의 새로운 랜더링 방식

	  1.CSR (Client Side Rendering)
    -- 기존 리액트와 동일하게 컴포넌트가 브라우저에 마운트 됐을때 클라이언트쪽에서 페이지 빌드 시작

    2.SSR (Server Side Rendering)
    -- URL요청이 있을때마다 서버쪽에서 Page 빌드 후 완성된 HTML파일을 클라이언트쪽에 제공

    3.SSG (Static Site Generation): 데이터가 바뀔 필요 없는 컴포넌트
    -- 처음 프로젝트 빌드시 미리 prerender처리 해서 완성된 정적인 HTML파일을 클라이언트쪽에 제공

    4.ISR (Incremental Static Regeneration): 24시간에 한번씩 변경
    -- SSG와 마찬가지로 처음 빌드시 미리 prerender되나 일정시간마다 정기적으로 서버쪽에서 데이터를 refetching해 점진적으로 새로운 데이터로 변경된 prerender page 제공
*/

/*
  - Atomic Design Pattern: 컴포넌트를 원자처럼 최소단위로 쪼개서 재활용가능한 컴포넌트로 개발하는 로직
    1. Atoms(원자): 버튼, 메뉴, 제목, 글자, 폼요소, 이미지 컴포넌트
    2. Molecules(분자): 검색바(폼 + 버튼), 블로그 리스트 한개(글자 + 버튼 + 이미지)
    3. Organisms(유기체): Header, 블로그 목록, Footer, Visual 컴포넌트
    4. Page(페이지 레이아웃): 각 유기체를 조합하여 구성한 페이지 컴포넌트

  - Atomic Design Pattern 단점
    : 처음 개발시 공수가 많이 들어가서 설계를 치밀하게 해야함
    : Atomic Design Pattern으로 개발한 컴포넌트의 구조를 프로젝트를 진행하는 팀원들 모두 해당 내용을 숙지해야하므로 번거로움
*/
