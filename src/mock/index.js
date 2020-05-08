import Mock from "mockjs";
import loginAPI from "./login";
import userAPI from "./user";
import remoteSearchAPI from "./remoteSearch";
import excelAPI from "./excel";

// 登录相关
Mock.mock(/\/login/, "post", loginAPI.login);
Mock.mock(/\/logout/, "post", loginAPI.logout);
Mock.mock(/\/userInfo/, "post", userAPI.userInfo);

// dashboard
Mock.mock(/\/transaction\/list/, "get", remoteSearchAPI.transactionList);

// excel
Mock.mock(/\/excel\/list/, "get", excelAPI.excelList);
export default Mock;