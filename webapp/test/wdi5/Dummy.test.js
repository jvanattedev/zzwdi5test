import { wdi5 } from "wdio-ui5-service"

describe("test suite description", () => {
    before(async () => {
        await wdi5.goTo("#/vliegtuigSet/('A319')")
    })

    it("The page title should be A321.", async () => {
        const text = await browser.asControl({
            selector: {
                controlType: "sap.m.Title",
                viewId: "container-zzwdi5test---object",
                bindingPath: {
                    path: "/vliegtuigSet('A321')",
                    propertyPath: "Planetype"
                }
            }
        }).getText();
        expect(text).toEqual("A321");
    })
})