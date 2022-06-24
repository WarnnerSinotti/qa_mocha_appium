import apiDemos from '../screenobjects/ApiDemosScreen';

describe('My application', () => {
    it('Inspec name', async () => {

        await apiDemos.Inspecionar();
        
    });

    it('Click on ApiDemos', async () => {

        await browser.pause(4000)
    });
});


