import { getTextOfJSDocComment } from "typescript"
import { timer } from "../utils/capabilities"

class apiDemos {
    constructor() {
         
    }
    private get Accessibilit () { return $(`//android.widget.TextView[@content-desc="Access'ibility"]`)}
    private get Accessibility () {return $('~Accessibility')};
    private get Animation () {return $('~Animation')};
    private get App () {return $('~App')};
    private get Content () {return $('~Content')};
    private get Graphics () {return $('~Graphics')};
    private get Media () {return $('~Media')};
    private get NFC () {return $('~NFC')};
    private get OS () {return $('~OS')};
    private get Preference () {return $('~Preference')};
    private get Text () {return $('~Text')};
    private get Views () {return $('~Views')};

async Inspecionar() {

    (await this.Accessibilit).waitForDisplayed({timeout:timer.timeout});
    await expect(this.Accessibilit).toHaveText(`Access'ibility`);
    
    (await this.Accessibility).waitForDisplayed({timeout:timer.timeout});
    await expect(this.Accessibility).toHaveText('Accessibility');

    (await this.Animation).waitForDisplayed({timeout:timer.timeout});
    await expect(this.Animation).toHaveText('Animation');

    (await this.App).waitForDisplayed({timeout:timer.timeout});
    await expect(this.App).toHaveText('App');

    (await this.Content).waitForDisplayed({timeout:timer.timeout});
    await expect(this.Content).toHaveText('Content');

    (await this.Graphics).waitForDisplayed({timeout:timer.timeout});
    await expect(this.Graphics).toHaveText('Graphics');

    (await this.Media).waitForDisplayed({timeout:timer.timeout});
    await expect(this.Media).toHaveText('Media');

    (await this.NFC).waitForDisplayed({timeout:timer.timeout});
    await expect(this.NFC).toHaveText('NFC');

    (await this.OS).waitForDisplayed({timeout:timer.timeout});
    await expect(this.OS).toHaveText('OS');

    (await this.Preference).waitForDisplayed({timeout:timer.timeout});
    await expect(this.Preference).toHaveText('Preference');

    (await this.Text).waitForDisplayed({timeout:timer.timeout});
    await expect(this.Text).toHaveText('Text');

    (await this.Views).waitForDisplayed({timeout:timer.timeout});
    await expect(this.Views).toHaveText('Views');
    
}

}


export default new apiDemos;