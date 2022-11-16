export interface MenuDataItem {
  tabName: string;
  path?: string; // 타입만들기
  subMenu?: MenuDataItem[];
}

const menuData: MenuDataItem[] = [
  { tabName: "대시보드", path: "/dashboard" },
  {
    tabName: "계좌 목록",
    subMenu: [
      { tabName: "투자 계좌", path: "/accounts/investment" },
      { tabName: "기타 계좌", path: "/accounts/etc" },
    ],
  },
  { tabName: "사용자", path: "/users" },
  { tabName: "로그아웃" },
];

export default menuData;
