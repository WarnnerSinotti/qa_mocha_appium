import apiDemos from '../screenobjects/testPage';

describe('My application', () => {
    it('Inspec name', async () => {

        await apiDemos.Inspecionar();
        
    });

    it('Click on ApiDemos', async () => {

        await browser.pause(4000)
    });
});


