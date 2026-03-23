const simulate = require('miniprogram-simulate');
const path = require('path');

describe('movearea', () => {
    let id;
    beforeAll(() => {
        id = simulate.load(path.resolve(__dirname, './movearea'));
    });

    it('should test moveclick', () => {
        const comp = simulate.render(id);
        comp.attach(document.createElement('parent-wrapper'));

        comp.setData({ moveStatus: true });
        expect(comp.data.moveStatus).toBe(true);

        comp.instance.moveclick();
        expect(comp.data.moveStatus).toBe(false);
    });
});
