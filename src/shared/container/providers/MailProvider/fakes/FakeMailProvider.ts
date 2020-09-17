import IMailProvider from '../models/IMailProvider';

interface IMessage {
    to: string;
    boby: string;
}

export default class FakeMailProvider implements IMailProvider {
    private messages: IMessage[] = [];

    public async sendMail(to: string, boby: string): Promise<void> {
        this.messages.push({
            to,
            boby,
        });
    }
}
