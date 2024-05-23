# 필수 구현 사항

- 지출 CRUD 구현 (작성, 조회, 수정, 삭제)
- 월별 지출 조회 기능 구현 (Home - Read)
- 월별 지출 항목 등록 구현 (Home - Create)
- 지출 상세 화면 구현 (Detail - Read)
- 상세화면에서 지출 항목 수정 구현 (Detail - Update)
- 상세화면에서 지출 항목 삭제 구현 (Detail - Delete)

# 필수 요구 사항

- [ ]  styled-components 를 이용하여 스타일링
    - 인라인 스타일링이나 일반 css 파일을 이용한 스타일링 방식 지양 (이번 과제 한정)
    - 모든 태그를 styled-components 화 할 필요는 없으나 스타일링이 들어가는 경우는 styled-components 화 할 것
- [ ]  styled-components에 props를 넘김으로 인한 조건부 스타일링 적용
    - 월 선택 탭에 적용해 보세요
- [ ]  react-router-dom 을 이용해서 페이지 전환을 합니다.
    - 지출을 수정하기 위한 페이지 이동 시에 사용해주세요.
- [ ]  useState, useEffect, useRef 사용
    - 과제 안내 순서에 각각 어디에서 사용되면 좋을지 가이드를 드렸습니다. 해당 부분에서 위의 기능들을 각각 사용해주세요
- [ ]  지출 항목 등록 시 id는 uuid 라이브러리를 이용 
(npm i uuid) or (yarn add uuid) [링크](https://www.npmjs.com/package//uuid)

# 주의 사항

👉 과제는 Props Drilling → Context API → Redux 순으로 각각 별도의 브랜치를 만들어 제출해야 합니다.

- 제출된 깃헙에는 props-drilling, context, redux 라는 이름의 각각의 브랜치명이 있어야 합니다. (main 브랜치는 없어도 좋습니다.)        
- props-drilling 브랜치에서는 context나 redux 없이 useState만으로 상태관리해서 코드를 작성합니다.
- props-drilling 으로 코드를 모두 작성 및 커밋을 완료했으면 context 브랜치로 생성 및 이동합니다.
- context 브랜치에서는 props-drilling으로 작업한 코드에서 react context API를 사용하여 전역상태를 이용한 코드로 리팩터링합니다.
- context 브랜치에서 리팩터링 및 커밋을 완료했으면 redux 브랜치 생성 및 이동합니다.
- redux 브랜치에서는 context api로 전역상태를 관리한 코드를 모두 redux 라이브러리를 이용한 코드로 리팩터링합니다. *주의: Redux ducks 패턴을 사용하지 않고 Redux Toolkits 을 사용하도록 합니다.


