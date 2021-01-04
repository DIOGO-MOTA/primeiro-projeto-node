import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';
import FakeAppointmenstRepository from '../repositories/fakes/FakeAppointmentsRepository';

let listProviderMonthAvailability: ListProviderMonthAvailabilityService;
let fakeAppointmenstRepository: FakeAppointmenstRepository;

describe('ListProviderMonthAvailability', () => {
    beforeEach(() => {
        fakeAppointmenstRepository = new FakeAppointmenstRepository();
        listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
            fakeAppointmenstRepository,
        );
    });

    it('should be able to list the month availability from provider', async () => {
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            date: new Date(2021, 4, 20, 8, 0, 0),
        });
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            date: new Date(2021, 4, 20, 9, 0, 0),
        });
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            date: new Date(2021, 4, 20, 10, 0, 0),
        });
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            date: new Date(2021, 4, 20, 11, 0, 0),
        });
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            date: new Date(2021, 4, 20, 12, 0, 0),
        });
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            date: new Date(2021, 4, 20, 13, 0, 0),
        });
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            date: new Date(2021, 4, 20, 14, 0, 0),
        });
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            date: new Date(2021, 4, 20, 15, 0, 0),
        });
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            date: new Date(2021, 4, 20, 16, 0, 0),
        });
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            date: new Date(2021, 4, 20, 17, 0, 0),
        });
        await fakeAppointmenstRepository.create({
            provider_id: 'user',
            date: new Date(2021, 4, 21, 8, 0, 0),
        });

        const availability = await listProviderMonthAvailability.execute({
            provider_id: 'user',
            year: 2021,
            month: 5,
        });

        expect(availability).toEqual(
            expect.arrayContaining([
                { day: 19, availability: true },
                { day: 20, availability: false },
                { day: 21, availability: true },
                { day: 22, availability: true },
            ]),
        );
    });
});
