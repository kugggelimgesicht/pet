import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', ['class1', 'class2'])).toBe(expected);
    });
    test('with additional class and modes', () => {
        const expected = 'someClass class1 class2 visible scrollable';
        expect(classNames('someClass', ['class1', 'class2'], { visible: true, scrollable: true })).toBe(expected);
    });
    test('with additional class and one false mode', () => {
        const expected = 'someClass class1 class2 visible';
        expect(classNames('someClass', ['class1', 'class2'], { visible: true, scrollable: false })).toBe(expected);
    });
    test('with additional class and undefined mode', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(classNames('someClass', ['class1', 'class2'], { visible: undefined, scrollable: true })).toBe(expected);
    });
});
