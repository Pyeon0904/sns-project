import {Link, Outlet} from "react-router";
import logo from "@/assets/logo.png";
import defaultAvatar from "@/assets/default-avatar.png";
import {SunIcon} from "lucide-react";

export default function GlobalLayout() {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <header className="h-15 border-b">
        <div className="m-auto flex h-full w-full max-w-175 justify-between px-4">
          {/* 로고 */}
          <Link to={"/"} className="flex items-center gap-2">
            <img className="h-5" src={logo} alt="SNS logo" />
            <div className="font-bold">SNS</div>
          </Link>
          <div className="flex items-center gap-5">
            {/* 테마 아이콘 */}
            <div className="hover:bg-muted cursur-pointer rounded-full p-2">
              <SunIcon />
            </div>
            {/* 프로필 아이콘 */}
            <img className="h-6" src={defaultAvatar} />
          </div>
        </div>
      </header>
      <main className="m-auto w-full max-w-175 flex-1 border-x px-4 py-6">
        {/* Outlet컴포넌트 : page 컴포넌트가 실제로 렌더링 될 위치 지정 */}
        <Outlet />
      </main>
      <footer className="text-muted-foreground border-t py-10 text-center">
        @onestar
      </footer>
    </div>
  );
}
