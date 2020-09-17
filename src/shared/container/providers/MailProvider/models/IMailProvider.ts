export default interface IMailProvider {
    sendMail(to: string, boby: string): Promise<void>;
}
