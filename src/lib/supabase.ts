import {createClient} from "@supabase/supabase-js";
// 1) type을 불러와 제네릭으로 type을 전달해주면
import {type Database} from "@/database.types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// 어느 컴포넌트에서든지 or 어느 함수에서든지
// 아래 supabase라는 클라이언트를 활용하면 각종 기능을 이용 가능
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
// 2) supabase 클라이언트가 해당 DB의 타입 정보를 참고해서 데이터를 불러온다던지 또는 수정한다던지 할 때 type 정보를 참고해서 타입 오류에서 보다 안전하게 개발 진행하게 도와줌
