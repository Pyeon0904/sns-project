import { type Database } from "@/database.types";

// 정제된 타입들이 보관될 파일
// post 테이블의 데이터 타입을 가져다 쓰려고 하면, public에 tables에 post에 row, 이런식으로 써야하니 불편함을 야기.
// 타입을 따로 정제해서 관리하게 되면, PostEntity 타입만 불러다가 깔끔하게 이용하면 됨
export type PostEntity = Database["public"]["Tables"]["post"]["Row"];
