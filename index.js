
/** @type { { id: number, content: string, done: boolean, category: string, tags: string[] } } */
let todo;

/**
  @type { { message: string } }
 */
let responseMessage;

/**
 * todo를 등록하는 함수.
 * @param { string } content 해야 할 일
 * @param { string } category 할일의 카테고리
 * @param { string[] } tags 할일에 붙은 태그들
 * @returns { responseMessage }
 */
const createTodo = (content = '', category, tags) => {

};

/**
 * todo 리스트를 조회하는 함수.
 * @returns { todo } 
 */
const getTodos = () => {

};

/**
 * 아이디 값으로 todo를 조회하는 함수.
 * @param {number} id todo 고유의 아이디값
 * @returns { todo } 조회한 todo의 내용
 */
const getTodoById = (id) => {

}

/**
 * todo를 업데이트 하는 함수.
 * @param { number } id 고유의 아이디
 * @param { string } content 수정할 할일의 정보
 * @param { string } category 할일의 카테고리
 * @param { string[] } tags 할일에 붙은 태그들
 * @returns { todo } 수정 후 todo의 정보
 */
const updateTodo = (id, content, category, tags) => {
  
};

/**
 * todo를 제거하는 함수.
 * @param { number } id Todo의 고유 아이디값
 * @returns { responseMessage } 성공여부를 알려주는 메세지
 */
const deleteTodo = (id) => {

}

/**
 * 모든 Todo들을 삭제하는 함수.
 * @returns { responseMessage } 성공여부를 알려주는 메세지
 */
const deleteTodos = () => {
  
}
