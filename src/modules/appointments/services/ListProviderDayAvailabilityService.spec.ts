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
            date: new Date(2021, 4, 20, 8, 0, 0),
        });
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            date: new Date(2021, 4, 20, 10, 0, 0),
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
                { hour: 9, availability: true },
                { hour: 10, availability: false },
                { hour: 11, availability: true },
            ]),
        );
    });
});
