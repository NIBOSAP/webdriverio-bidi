describe('test webdriverio bidi', function () {

    it('test with array reference', async function () {
        await browser.url('https://webdriver.io/');

        const result = await browser.execute(() => {
            const toto = [];
            const result= [
                {
                    "id": "__button1",
                    "properties": toto
                },
                {
                    "id": "__button1",
                    "properties": toto
                }
            ]
            return result;
        })
        console.log(result);
    });
});
