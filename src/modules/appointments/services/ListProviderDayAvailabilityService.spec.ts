import ListProviderDayAvailabilityService from './ListProviderDayAvailabilityService';
import FakeAppointmenstRepository from '../repositories/fakes/FakeAppointmentsRepository';

let listProviderDayAvailability: ListProviderDayAvailabilityService;
let fakeAppointmenstRepository: FakeAppointmenstRepository;

describe('ListProviderMonthAvailability', () => {
    beforeEach(() => {
        fakeAppointmenstRepository = new FakeAppointmenstRepository();
        listProviderDayAvailability = new ListProviderDayAvailabilityService(
            fakeAppointmenstRepository,
        );
    });

    it('should be able to list the day availability from provider', async () => {
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 4, 20, 14, 0, 0),
        });
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            user_id: 'user',
            date: new Date(2021, 4, 20, 15, 0, 0),
        });

        jest.spyOn(Date, 'now').mockImplementationOnce(() => {
            return new Date(2021, 4, 20, 11).getTime();
        });

        const availability = await listProviderDayAvailability.execute({
            provider_id: 'user',
            year: 2021,
            month: 5,
            day: 20,
        });

        expect(availability).toEqual(
            expect.arrayContaining([
                { hour: 8, availability: false },
                { hour: 9, availability: false },
                { hour: 10, availability: false },
                { hour: 13, availability: true },
                { hour: 14, availability: false },
                { hour: 15, availability: false },
                { hour: 16, availability: true },
            ]),
        );
    });
});
