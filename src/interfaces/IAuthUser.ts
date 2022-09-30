/** 授权用户 */
export default interface IAuthUser {
    /** 用户ID */
    id: string,
    /** 登录账号 */
    name: string,
    /** 头像 */
    avatar: string,
    /** Token */
    token: string
}