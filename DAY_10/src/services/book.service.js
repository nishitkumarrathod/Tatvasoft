import request from "./requests";
const ENDPOINT = "api/book";

const searchBook = async (searchText) => {
    const url = `${ENDPOINT}/search?keyword=${searchText}`;
    return request.get(url).then((res) => {
        return res;
    });
}

const getAll = async (params) => {
    const url = `${ENDPOINT}`;
    return request.get(url, { params }).then((res) => {
        return res;
    });
}

const bookService = {searchBook, getAll};
export default bookService