import { createSlice } from "@reduxjs/toolkit";
import data from "../../FakeData";
import getLocalStorage from "../../utills/getLocalStorage";

// 작명에는 컨벤션있음.
// 하는일Slice

// 우리가 일반적으로 알고있는 useState 훅을 이 자리에 넣는데,
// 문법이 다름. 이니셜스테이트는 객체(복수) 형태이고, 상태를 전부 넣는다.
// 아래는 두 개의 스테이트임. book(newData), month(clickedMonthBtn)
const initialState = {
    book: data,
    month: getLocalStorage()
};

// 슬라이스 === 공장
// 이니셜스테이트 === 작업물(재료)
// 리듀서즈 === 재료로 일을 하는 기계들 (무언가 액션이 있는 것이니 함수를 말함)

const bookSlice = createSlice({
    // name은 slice의 이름. 컴포넌트에서 접근할 때 쓰는 이름.
    name: "book",
    // 그냥 명시해주는 값(위에서 정의한 state들)
    initialState,
    // store에서는 리듀서 단수형, 슬라이스에서는 복수형 주의. 여러 개니까 객체로.
    // useState훅에서 setState에 해당하는 상태 변경 함수들.
    // 일반적으로 CRUD가 많이 옴.
    reducers: {
        // 이 안에는 CRUD 순서로 작성.
        // Read가 가장 쉽고, CUD가 조금 복잡. 조금 쉬운 R부터 작성.

        // 리듀서에는 두 개의 매개변수가 들어감. state, action
        
        // Read
        selectMonth : (prevstate, action) => {
            prevstate.month = action.payload;
        },

        // Create
        createBook : (prevstate, action) => {
            // 리덕스 툴킷에서는 불변성을 관리해주는 immer가 자동으로 적용되기에 우리가 불변성 유지를 신경쓸 필요가 없음.
            // prevstate.book = {...newData, newInput}; 원래대로라면 불변성 유지를 이렇게 했어야 하나
            prevstate.book.push(action.payload);
        },

        // Update
        updateBook : (prevstate, action) => {
            // 원본 데이터 배열 newData는 state에서 book으로 바뀌었음.
            // 사용자가 추가한 값은 원본 데이터가 아니라 action.payload임.
            // map을 돌아서 새롭게 반환된 배열을 기존 배열에 덮어 씌워야 함. (재할당)
            prevstate.book = prevstate.book.map(item => item.id === action.payload.id ? action.payload : item)
        },

        // Delete
        // action.payload는 컴포넌트에서 넘어오는 것을 의미함.
        deleteBook : (prevstate, action) => {
            prevstate.book = prevstate.book.filter(item => item.id !== action.payload)
        }
    }
});

// 여기까지 끝나면 export 해야 함.
// 1. 리듀서즈를 각각 내보내야 하고 2. 슬라이스 자체를 내보내야 함.

// actions는 reducers임. 이름이 달라서 헷갈리지만 같은 것임.
export const { selectMonth, createBook, updateBook, deleteBook } = bookSlice.actions;

// 슬라이즈 자체를 내보냄.
const bookReducer = bookSlice.reducer;
export default bookReducer;